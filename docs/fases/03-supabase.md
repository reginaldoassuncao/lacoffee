# Fase 3 — Supabase

## Objetivo

Mover categorias e itens do arquivo local para o banco Supabase.

## Tarefas

- [ ] Criar projeto Supabase
- [ ] Tabelas `categories` e `items`
- [ ] Ler o menu do banco na página do cardápio
- [ ] Manter fallback se o banco falhar

## Arquivos envolvidos

- `src/lib/supabase.ts`
- `src/data/` ou hooks de fetch
- `src/pages/Cardapio.tsx`

## Critérios de conclusão

- Cardápio carrega itens do Supabase
- Alterar um preço no banco reflete no site

## Testes

- Smoke: mudar um preço no banco e recarregar a página
