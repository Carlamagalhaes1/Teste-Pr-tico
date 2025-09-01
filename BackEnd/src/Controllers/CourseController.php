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
        "imagem" => "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
    ],
    [
        "id" => 2,
        "tipo" => ["CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO"],
        "titulo" => "Como Implementar a Política Municipal de Educação Ambiental",
        "autor" => "Daniel Pagliuca",
        "imagem" => "https://img.freepik.com/premium-photo/green-city-skyline-through-trees_57163-4360.jpg?w=2000" 
    ],
     [
    "id" => 3,
    "tipo" => ["CURTA DURAÇÃO", "BEM-VIVER"],
    "titulo" => "Bullying: conhecer para combater, como evitar.",
    "autor" => "Grecianny Carvalho",
    "imagem" => "https://plus.unsplash.com/premium_photo-1661380704283-38adf12c3f5e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsbHlpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.0.3&q=60&w=3000"
     ],
    [
        "id" => 4,
        "tipo" => ["EXTENSÃO", "BEM-VIVER"],
        "titulo" => "Harmonização Tributária Intergovernamental",
        "autor" => "Fundação Demócrito Rocha",
        "imagem" => "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
    ],
    [
        "id" => 5,
        "tipo" => ["CURTA DURAÇÃO", "SAÚDE"],
        "titulo" => "Nutrição e Qualidade de Vida, melhores práticas.",
        "autor" => "Ana Paula Lima",
        "imagem" => "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
    ],
    [
        "id" => 6,
        "tipo" => ["EXTENSÃO", "TECNOLOGIA"],
        "titulo" => "Introdução ao Desenvolvimento Web.",
        "autor" => "João Silva",
        "imagem" => "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
    ],
    [
        "id" => 7,
        "tipo" => ["CURTA DURAÇÃO", "BEM-VIVER"],
        "titulo" => "Atenção Plena e Qualidade de Vida, cuidando-se.",
        "autor" => "Maria Oliveira",
        "imagem" => "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
    ],
    [
        "id" => 8,
        "tipo" => ["EXTENSÃO", "TECNOLOGIA E PROFISSÃO"],
        "titulo" => "Inteligência Artificial no Dia a Dia, como entender.",
        "autor" => "Carlos Souza",
        "imagem" => "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
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
