---

# 📚 Teste Prático FullStack – Grupo O POVO

Este repositório contém o **projeto FullStack** desenvolvido como parte do teste prático.
O sistema é composto por um **BackEnd em PHP** e um **FrontEnd em React (Vite)** que consome a API.

---

## 🛠️ Decisões Técnicas

* **BackEnd (PHP puro)**

  * Foi escolhido PHP puro (sem frameworks) para demonstrar domínio da linguagem e controle manual de rotas, respostas HTTP e integração com serviços externos.
  * Estrutura simples organizada em **Controllers** e **Http** (Request, Response, Router).
  * Implementado suporte a **CORS** para integração com o FrontEnd.
  * Endpoints expõem cursos em **JSON** de forma estática, simulando uma API real.

* **FrontEnd (React + Vite)**

  * Criado em React com Vite pela rapidez no desenvolvimento e suporte a Hot Reload.
  * Utilização de **componentização** (Banner, Courses, Footer, Header, etc).
  * Consumo da API via **Axios** configurado em `src/services/api.js`.
  * Interface responsiva (desktop, tablet e mobile).

* **Integração com IA (OpenAI)**

  * Endpoint extra criado no BackEnd:

    ```
    GET /api/courses/{id}/ai-description
    ```
  * Essa rota recebe o **ID de um curso**, busca suas informações e gera uma **descrição automática** utilizando a API da OpenAI.
  * A chave da OpenAI é carregada via **.env** no BackEnd, garantindo segurança e flexibilidade.
  * O FrontEnd possui um botão que consome essa rota e exibe a descrição em tempo real para o usuário.

---

## 📂 Estrutura Geral

```
/BackEnd    → API em PHP (cursos + rota de IA)
  /config
  /public
  /src
  README.md

/FrontEnd   → Aplicação React (Vite) que consome a API
  /src
  /public
  README.md

/Docs       → Documentações extras (se necessário)

README.md   → Este arquivo (guia geral)
```

---

## ▶️ Como instalar e rodar

Este repositório possui dois guias de instalação:

* [📘 BackEnd – README](./BackEnd/README.md)
  Explica como configurar PHP, habilitar extensões, rodar o servidor embutido e configurar a chave da OpenAI.

* [📘 FrontEnd – README](./FrontEnd/README.md)
  Explica como instalar Node.js, rodar com `npm run dev` e consumir a API.

Siga cada um dos guias para rodar o sistema completo em sua máquina.

---

## 📌 Observações

* Certifique-se de rodar o **BackEnd** antes do **FrontEnd**, pois o front consome os dados da API.
* Nunca suba o arquivo `.env` com sua chave da OpenAI para o GitHub.
* O projeto foi estruturado para ser simples de rodar e expandir.

---

👉 Esse README serve como **guia central**. Para detalhes técnicos de instalação e execução, acesse os READMEs de cada módulo (BackEnd e FrontEnd).

---