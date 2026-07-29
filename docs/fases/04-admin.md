# Fase 4 — Painel admin

## Objetivo

Permitir que o dono edite o cardápio sozinho (login + CRUD).

## Tarefas

- [ ] Login com Supabase Auth (1 conta do dono)
- [ ] CRUD de categorias e produtos
- [ ] Marcar item como esgotado / esconder
- [ ] Upload de foto no Supabase Storage
- [ ] Reordenar itens e editar preços

## Arquivos envolvidos

- `src/app/admin/*`
- `src/lib/supabase/*`
- Storage bucket de produtos

## Critérios de conclusão

- Dono muda um preço no celular e vê no cardápio na hora

## Testes

- Smoke: login → editar preço → conferir `/cardapio` sem login

## Conteúdo necessário

- Email e senha que o dono vai usar
