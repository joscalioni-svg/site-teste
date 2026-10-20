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

## Deploy no Cloudflare

O arquivo `wrangler.jsonc` configura o deploy como Worker com arquivos estáticos:

- Pasta publicada: `dist`
- Fallback de SPA (rotas desconhecidas servem o `index.html`)

No painel da Cloudflare, importe este repositório usando:

- Comando de build: `npm run build`
- Comando de deploy: `npx wrangler deploy`
