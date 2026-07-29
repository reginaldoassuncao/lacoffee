# Fase 2 — Deploy + QR code

## Objetivo

Publicar o cardápio na Vercel e gerar um QR code apontando para a URL.

## Tarefas

- [x] Conta/projeto na Vercel
- [x] Deploy do app
- [x] Gerar QR code com a URL publicada
- [x] Testar o QR no celular

## Arquivos envolvidos

- `vercel.json` — rewrite SPA para React Router
- `public/qr-cardapio.png` — QR para impressão nas mesas
- `docs/qr-cardapio.svg` — cópia vetorial do QR

## URL publicada

https://lacoffee.vercel.app

## Critérios de conclusão

- [x] Link público abre o cardápio no celular
- [x] QR das mesas aponta para esse link

## Testes

- Smoke: `GET /` e `GET /cardapio` → 200
- Escaneie `public/qr-cardapio.png` no celular e confira o menu

## Notas

- Projeto Vercel ajustado de Next.js → Vite (`framework: vite`, output `dist`)
