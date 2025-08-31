<?php
namespace App\Http;

class Request {
    public function __construct(private array $server) {}
    public function getMethod(): string { return strtoupper($this->server['REQUEST_METHOD'] ?? 'GET'); }
    public function getPath(): string {
        $uri = $this->server['REQUEST_URI'] ?? '/';
        $path = parse_url($uri, PHP_URL_PATH) ?? '/';
        return rtrim($path, '/') === '' ? '/' : rtrim($path, '/');
    }
}
