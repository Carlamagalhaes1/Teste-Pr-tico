<?php
function loadEnv(string $path): void {
    if (!file_exists($path)) return;

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (str_starts_with(trim($line), '#') || !str_contains($line, '=')) {
            continue;
        }
        [$name, $value] = array_map('trim', explode('=', $line, 2));
        $value = trim($value, "\"'"); 
        putenv("$name=$value");
        $_ENV[$name] = $value;
        $_SERVER[$name] = $value;
    }
}

loadEnv(__DIR__ . '/../.env');

return [
    'app' => [
        'base_path' => '/api',
        'allowed_origin' => '*',
    ],
    'openai' => [
        'api_key' => getenv('OPENAI_API_KEY'),
        'model'   => getenv('OPENAI_MODEL') ,
    ],
];
