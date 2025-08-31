<?php
namespace App\Http;

class Router {
    private array $routes = [];
    public function __construct(private string $basePath='/') {
        $this->basePath = rtrim($basePath, '/');
    }
    public function get(string $path, callable $handler) { $this->map('GET', $path, $handler); }

    private function map(string $method, string $path, callable $handler): void {
        $full = $this->basePath . ($path === '/' ? '' : $path);
        $this->routes[] = [$method, $full, $handler];
    }

    public function dispatch(Request $request, Response $response): void {
        $method = $request->getMethod();
        $path   = $request->getPath();

        foreach ($this->routes as [$m, $p, $h]) {
            $pattern = preg_replace('#\{(\w+)\}#', '(?P<$1>[^/]+)', $p);
            if ($m === $method && preg_match('#^'.$pattern.'$#', $path, $matches)) {
                $params = array_filter($matches, 'is_string', ARRAY_FILTER_USE_KEY);
                $h($request, $response, $params);
                return;
            }
        }
        $response->json(['error' => 'Not Found'], 404);
    }
}
