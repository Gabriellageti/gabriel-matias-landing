# Guia de Deploy

## Antes de publicar

1. Rode o projeto localmente.
2. Revise textos e links em `src/data/profile.js`.
3. Confirme se o LinkedIn está correto.
4. Substitua ou remova placeholders de GitHub e WhatsApp.
5. Verifique se imagens de dashboards não têm dados sensíveis.
6. Rode o build:

```bash
npm run build
```

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse [Vercel](https://vercel.com).
3. Clique em "Add New Project".
4. Selecione o repositório.
5. Framework preset: Vite.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Publique.

## Publicar no GitHub Pages

1. Instale o pacote de deploy, se optar por esse caminho:

```bash
npm install -D gh-pages
```

2. Ajuste `vite.config.js` com o `base` do repositório, se necessário:

```js
export default defineConfig({
  base: "/nome-do-repositorio/",
  plugins: [react()]
});
```

3. Configure scripts de deploy no `package.json`.
4. Rode o build e publique a pasta `dist`.

## Domínio

Para uso em LinkedIn e bio profissional, o ideal é usar um domínio simples e memorável, por exemplo:

```txt
gabrielmatias.dev
lageops.com.br
```

Escolha apenas domínios disponíveis e alinhados ao posicionamento que Gabriel quiser sustentar.
