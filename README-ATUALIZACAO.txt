RIFA CLIENTE V15.14 — PREPARAÇÃO PARA PIX NO RENDER

1. Esta entrega atualiza APENAS o site do cliente enviado. O painel ADM não veio no ZIP.
2. Mantidas reservas Firebase, números, indicação, busca CPF e PWA.
3. Criada interface de Pix automático, inicialmente OCULTA para não prometer cobrança inexistente.
4. Quando o backend estiver pronto, preencha pagamentos-config.js com a URL HTTPS do Render.
5. Contrato esperado: POST /api/pix/criar, Authorization: Bearer <Firebase ID token>, JSON {reservaId}.
   Resposta: {pixCopiaECola, qrCodeBase64}. O backend DEVE verificar token, dono da reserva,
   preço e estado no Firebase e consultar Mercado Pago; NUNCA confiar no valor do navegador.
6. Não coloque MP_ACCESS_TOKEN no site.
7. Esta versão NÃO gera cobranças reais nem confirma automaticamente: depende do backend.
8. Segurança: CPF sozinho NÃO autentica a pessoa. Antes de publicar, proteja consultas de
   reservas/afiliados com login ou verificação e revise regras Firebase.
9. Para atualizar PWA: substitua TODOS os arquivos e abra a URL HTTPS publicada.
