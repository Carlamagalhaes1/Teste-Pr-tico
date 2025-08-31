<?php
namespace App\Controllers;

use App\Http\Request;
use App\Http\Response;

class CourseController {
    private array $courses = [
        [
            "id" => 1,
            "tipo" => ["EXTENSÃO", "BEM-VIVER"],
            "titulo" => "Educação Ambiental para um Presente Sustentável",
            "autor" => "Fundação Demócrito Rocha",
            "imagem" => "https://picsum.photos/400/250?random=1"
        ],
        [
            "id" => 2,
            "tipo" => ["CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO"],
            "titulo" => "Como Implementar a Política Municipal de Educação Ambiental",
            "autor" => "Daniel Pagliuca",
            "imagem" => "https://picsum.photos/400/250?random=2"
        ],
        [
            "id" => 3,
            "tipo" => ["CURTA DURAÇÃO", "BEM-VIVER"],
            "titulo" => "Bullying: conhecer para combater",
            "autor" => "Grecianny Carvalho",
            "imagem" => "https://picsum.photos/400/250?random=3"
        ],
        [
            "id" => 4,
            "tipo" => ["EXTENSÃO", "BEM-VIVER"],
            "titulo" => "Gestão Fiscal Interfederativa",
            "autor" => "Fundação Demócrito Rocha",
            "imagem" => "https://picsum.photos/400/250?random=4"
        ],
        [
            "id" => 5,
            "tipo" => ["CURTA DURAÇÃO", "SAÚDE"],
            "titulo" => "Nutrição e Qualidade de Vida",
            "autor" => "Ana Paula Lima",
            "imagem" => "https://picsum.photos/400/250?random=5"
        ],
        [
            "id" => 6,
            "tipo" => ["EXTENSÃO", "TECNOLOGIA"],
            "titulo" => "Introdução ao Desenvolvimento Web",
            "autor" => "João Silva",
            "imagem" => "https://picsum.photos/400/250?random=6"
        ],
        [
            "id" => 7,
            "tipo" => ["CURTA DURAÇÃO", "BEM-VIVER"],
            "titulo" => "Mindfulness e Bem-estar",
            "autor" => "Maria Oliveira",
            "imagem" => "https://picsum.photos/400/250?random=7"
        ],
        [
            "id" => 8,
            "tipo" => ["EXTENSÃO", "TECNOLOGIA E PROFISSÃO"],
            "titulo" => "Inteligência Artificial no Dia a Dia",
            "autor" => "Carlos Souza",
            "imagem" => "https://picsum.photos/400/250?random=8"
        ]
    ];

    public function index(Request $req, Response $res): void {
        $res->json($this->courses);
    }

    public function show(Request $req, Response $res, array $params): void {
        $id = (int)($params['id'] ?? 0);
        $course = array_values(array_filter($this->courses, fn($c) => $c['id'] === $id));
        if ($course) {
            $res->json($course[0]);
        } else {
            $res->json(['error' => 'Course not found'], 404);
        }
    }

    public function getCourses(): array {
    return $this->courses;
}

}
