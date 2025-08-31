<?php
namespace App\Controllers;

use App\Http\Request;
use App\Http\Response;
use App\Controllers\CourseController;

class AIController {
    private array $courses;

    public function __construct(private array $config) {
        $this->courses = (new CourseController())->getCourses();
    }

    public function generateDescription(Request $req, Response $res, array $params): void {
        $id = (int)($params['id'] ?? 0);

        $course = array_values(array_filter($this->courses, fn($c) => $c['id'] === $id));
        if (!$course) {
            $res->json(['error' => 'Course not found'], 404);
            return;
        }

        $course = $course[0];

        $prompt = "Gere uma descrição envolvente e clara para este curso:\n\n" .
                  "Título: {$course['titulo']}\n" .
                  "Autor: {$course['autor']}\n" .
                  "Tipo: " . implode(", ", $course['tipo']);

        $descricao = $this->callOpenAI($prompt);

        $res->json([
            'id' => $course['id'],
            'titulo' => $course['titulo'],
            'descricao_ia' => $descricao,
        ]);
    }

    private function callOpenAI(string $prompt): string {
        $apiKey = $this->config['openai']['api_key'] ?? null;
        $model  = $this->config['openai']['model'] ?? 'gpt-4o-mini';

        if (empty($apiKey) || !str_starts_with($apiKey, 'sk-')) {
            return "Chave da OpenAI inválida ou não configurada.";
        }

        $payload = json_encode([
            "model" => $model,
            "messages" => [
                ["role" => "system", "content" => "Você é um assistente educacional que cria descrições de cursos."],
                ["role" => "user", "content" => $prompt]
            ],
            "max_tokens" => 150
        ]);

        $url = "https://api.openai.com/v1/chat/completions";
        $headers = [
            "Authorization: Bearer {$apiKey}",
            "Content-Type: application/json"
        ];

        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

            $response = curl_exec($ch);
            if (curl_errno($ch)) {
                return "Erro ao conectar com OpenAI (cURL): " . curl_error($ch);
            }
            curl_close($ch);
        } 
        else {
            $opts = [
                "http" => [
                    "method" => "POST",
                    "header" => implode("\r\n", $headers),
                    "content" => $payload,
                    "timeout" => 15
                ]
            ];
            $context = stream_context_create($opts);
            $response = @file_get_contents($url, false, $context);

            if ($response === false) {
                $http_response_header ??= [];
                return "Erro ao conectar com OpenAI (file_get_contents): " . ($http_response_header[0] ?? "sem resposta");
            }
        }

        $data = json_decode($response, true);
        return $data['choices'][0]['message']['content'] ?? "Não foi possível gerar a descrição.";
    }
}
