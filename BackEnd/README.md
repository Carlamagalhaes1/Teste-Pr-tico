# BackEnd – API de Cursos (PHP)

API em **PHP puro** que fornece cursos em **JSON** e um endpoint opcional de **IA** para gerar descrições automáticas usando a OpenAI.

---

## ✅ Requisitos

* **PHP 8.1+** (testado com PHP 8.4).
* Extensões obrigatórias:

  * `curl` → usada para chamadas HTTP externas.
  * `openssl` → necessária para conexões seguras (HTTPS).
  * `json` → usada para serialização e retorno de dados.
  * `_dir` →  usada para o php saber onde esra os arquivos

---

## 🔧 Como habilitar as extensões no Windows

1. Vá até a pasta onde o PHP está instalado, por exemplo:

   ```
   C:\php\php-8.4
   ```
2. Abra o arquivo `php.ini` (se não existir, copie o `php.ini-development` e renomeie).
3. Procure as linhas que tenham `;extension=curl`, `;extension=openssl` e `;extension=json`. (se a extensão json não aparecer na pesquisa é porque ela já está embutida)
4. Remova o `;` do início de cada linha para ativar. Deve ficar assim:

   ```
   extension=curl
   extension=openssl
   extension=json
   extension_dir (se remover o ; não funcionar, edite o caminho absoluto para apontar onde você instalou o php.)
   ```
5. Ative também:

   ```
   allow_url_fopen = On
   ```
6. Salve e feche o arquivo `php.ini`.
7. Reinicie o PHP (ou apenas feche e reabra o servidor embutido com `php -S`).

---

## 🔒 Configuração de SSL (obrigatório para IA)

1. Baixe o certificado `cacert.pem` em:
   [https://curl.se/ca/cacert.pem](https://curl.se/ca/cacert.pem)
2. Salve em: (exemplo)

   ```
   C:\php\php-8.4\extras\ssl\cacert.pem
   ```
3. No `php.ini`, pesquise por curl.cainfo e openssl.cafile, e configure da seguite forma: (exemplo, veja onde esta o caminho do seu php)

   ```
   curl.cainfo = "C:/php/php-8.4/extras/ssl/cacert.pem"
   openssl.cafile = "C:/php/php-8.4/extras/ssl/cacert.pem"
   ```
4. Salve e reinicie o PHP.

---

---

## 🔑 Obtendo a chave da OpenAI

1. Crie uma conta em [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys).
2. Vá em **API Keys**.
3. Clique em **Create new secret key**.
4. Copie a chave e cole no `.env` em `OPENAI_API_KEY`.

---

## 🗂️ Arquivo `.env`

Na pasta **BackEnd**, crie um arquivo chamado `.env` com o seguinte modelo:

```
# Chave da OpenAI (substitua pela sua)
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Modelo da OpenAI a ser usado
OPENAI_MODEL=gpt-4o-mini
```

---

## ▶️ Executando o servidor

Na raiz da pasta **BackEnd**, rode:

```
php -S localhost:8000 -t public public/.htrouter.php
```

Agora você pode acessar:

* [http://localhost:8000/api/courses](http://localhost:8000/api/courses)
* [http://localhost:8000/api/courses/1](http://localhost:8000/api/courses/1)
* [http://localhost:8000/api/courses/1/ai-description](http://localhost:8000/api/courses/1/ai-description)


