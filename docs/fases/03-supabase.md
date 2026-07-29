# Fase 3 — Banco de dados (Supabase)

## Objetivo

Mover o cardápio do arquivo estático para o Supabase, com leitura pública.

## Tarefas

- [ ] Criar projeto Supabase
- [ ] Tabelas `categories` e `products` + RLS (leitura pública, escrita autenticada)
- [ ] Popular com os itens do menu
- [ ] Trocar `/cardapio` para ler do banco

## Arquivos envolvidos

- `supabase/migrations/*` (ou SQL documentado)
- `src/lib/supabase/*`
- `src/app/cardapio/page.tsx`
- `.env.local` (URL e anon key)

## Critérios de conclusão

- Cardápio publicado lê categorias e produtos do Supabase

## Testes

- Smoke: alterar um preço no banco e ver refletir no `/cardapio`
