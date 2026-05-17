# Guia de Conteúdo

## Textos principais

Edite `src/data/profile.js` para alterar:

- nome de apresentação
- título profissional
- frase principal
- resumo do hero
- texto sobre
- e-mail
- LinkedIn
- placeholders de GitHub e WhatsApp

## Projetos

Edite `src/data/projects.js` para alterar os cards de:

- LageOps
- Consultoria
- Teolodia
- Dashboards e Monitoramento
- Runbooks e Documentação

Evite transformar projetos paralelos em promessas comerciais exageradas. A página deve manter autoridade sem parecer venda agressiva.

## Stack e ferramentas

Edite `src/data/skills.js`.

As ferramentas estão separadas em:

- Uso prático
- Em evolução
- Interesses estratégicos

Não mova uma ferramenta para "Uso prático" se Gabriel ainda não se sente confortável em sustentar essa experiência em conversa profissional.

## Imagens de dashboards

A pasta preparada é:

```txt
src/assets/dashboard
```

Atualmente a galeria usa placeholders visuais em CSS. Para usar imagens reais, crie um componente ou lista de imagens em `src/components/DashboardGallery.jsx` e importe arquivos da pasta `src/assets/dashboard`.

Antes de publicar qualquer print real, anonimize dados sensíveis:

- hosts
- IPs
- aplicações internas
- URLs
- clientes
- incidentes
- nomes de pessoas
- credenciais
- e-mails internos

## Tom de voz

Manter:

- profissional
- direto
- brasileiro
- técnico sem arrogância
- humano sem virar biografia longa

Evitar:

- "apaixonado por tecnologia"
- "guru"
- "ninja"
- "rockstar"
- "especialista", a menos que Gabriel queira assumir esse posicionamento publicamente
- promessas de resultado milagroso
