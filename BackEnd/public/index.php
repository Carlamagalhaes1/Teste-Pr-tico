<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/Http/Request.php';
require_once __DIR__ . '/../src/Http/Response.php';
require_once __DIR__ . '/../src/Http/Router.php';
require_once __DIR__ . '/../src/Controllers/CourseController.php';
require_once __DIR__ . '/../src/Controllers/AIController.php';

use App\Http\Request;
use App\Http\Response;
use App\Http\Router;
use App\Controllers\CourseController;
use App\Controllers\AIController;

$config = require __DIR__ . '/../config/config.php';

header('Access-Control-Allow-Origin: ' . ($config['app']['allowed_origin'] ?? '*'));
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$request  = new Request($_SERVER);
$response = new Response();
$router   = new Router($config['app']['base_path']);

$courseController = new CourseController();
$aiController     = new AIController($config);

$router->get('/courses/{id}/ai-description', [$aiController, 'generateDescription']);
$router->get('/courses', [$courseController, 'index']);
$router->get('/courses/{id}', [$courseController, 'show']);
$router->dispatch($request, $response);
