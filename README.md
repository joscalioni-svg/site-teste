# site-teste

Projeto React com Vite, Tailwind CSS e Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # gera a pasta dist/
npm run preview
```

## Deploy no Netlify

O arquivo `netlify.toml` já configura:

- Comando de build: `npm run build`
- Pasta de publicação: `dist`
- Fallback de SPA (todas as rotas apontam para `index.html`)

Basta conectar este repositório no Netlify.
