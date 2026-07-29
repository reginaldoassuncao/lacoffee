# Fase 4 — Painel admin

## Objetivo

Permitir que o dono edite o cardápio sem mexer no código.

## Tarefas

- [ ] Login (Supabase Auth)
- [ ] CRUD de categorias e itens
- [ ] Proteger rota `/admin`

## Arquivos envolvidos

- `src/pages/admin/*`
- Políticas RLS no Supabase

## Critérios de conclusão

- Dono consegue logar e editar itens
- Visitante não acessa o admin

## Testes

- Smoke: criar/editar/ocultar um item pelo admin
