# 🌐 Guia para Obter um Domínio

## Opções de Registradores de Domínio

### 1. **Registro.br** (Recomendado para .br)
- **Site**: https://registro.br
- **Preço**: ~R$ 40/ano para .com.br
- **Vantagens**: 
  - Melhor para SEO no Brasil
  - Suporte em português
  - Processo simples

### 2. **Namecheap**
- **Site**: https://www.namecheap.com
- **Preço**: ~$10-15/ano para .com
- **Vantagens**:
  - Interface fácil
  - Boa relação custo-benefício
  - Suporte 24/7

### 3. **Google Domains**
- **Site**: https://domains.google
- **Preço**: ~$12/ano para .com
- **Vantagens**:
  - Integração com Google Workspace
  - Interface simples
  - Confiável

### 4. **Cloudflare**
- **Site**: https://www.cloudflare.com/products/registrar
- **Preço**: Preço de custo (sem markup)
- **Vantagens**:
  - Mais barato
  - Performance excelente
  - Segurança incluída

## Passo a Passo para Registrar

### 1. Escolha seu domínio
- Exemplo: `guilhermecorreia.com.br` ou `guicorreia.design`
- Dica: Use `.design` se for focado em portfólio de design

### 2. Verifique disponibilidade
- Use o buscador no site do registrador
- Tenha alternativas prontas

### 3. Complete o registro
- Preencha seus dados
- Escolha período (1-10 anos)
- Faça o pagamento

### 4. Configure DNS
- Após registrar, você receberá acesso ao painel
- Configure os registros DNS para apontar para seu hosting

## Hospedagem (Hosting)

### Opções Gratuitas:

1. **Netlify** (Recomendado)
   - Site: https://www.netlify.com
   - Grátis para sites estáticos
   - Deploy automático via Git
   - SSL gratuito
   - CDN global

2. **Vercel**
   - Site: https://vercel.com
   - Grátis para projetos pessoais
   - Deploy rápido
   - Performance excelente

3. **GitHub Pages**
   - Site: https://pages.github.com
   - Grátis
   - Integração com GitHub
   - Ideal para portfólios

### Opções Pagas:

1. **Hostinger**
   - ~R$ 10/mês
   - Bom para iniciantes
   - Suporte em português

2. **HostGator**
   - ~R$ 15/mês
   - Confiável
   - Suporte 24/7

## Como Conectar Domínio ao Hosting

### Para Netlify/Vercel:

1. **No painel do registrador** (ex: Registro.br):
   - Acesse "Gerenciar DNS"
   - Adicione registros:
     - Tipo: A
     - Nome: @
     - Valor: IP fornecido pelo Netlify/Vercel
   - Ou use Nameservers do Netlify/Vercel

2. **No Netlify/Vercel**:
   - Vá em "Domain settings"
   - Adicione seu domínio
   - Siga as instruções de configuração

## Checklist Final

- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] Site hospedado
- [ ] SSL/HTTPS ativo (geralmente automático)
- [ ] Site acessível pelo domínio
- [ ] Email configurado (opcional)

## Dicas Importantes

1. **Renovação Automática**: Ative para não perder o domínio
2. **Privacidade WHOIS**: Proteja seus dados pessoais
3. **Backup**: Mantenha backup do seu site
4. **Performance**: Use CDN para carregamento rápido

## Suporte

Se precisar de ajuda:
- Suporte do registrador
- Documentação do hosting escolhido
- Comunidades online (Reddit, Stack Overflow)

---

**Próximos Passos**: Após obter o domínio, me avise que posso ajudar a configurar o DNS e fazer o deploy!

