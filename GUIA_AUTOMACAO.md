# 🚀 Como Configurar Atualização Automática (Git + Netlify)

Para que o site atualize **automaticamente** sempre que você salvar um arquivo, precisamos conectar seu computador ao GitHub e ao Netlify.

## Passo 1: Preparar seu PC
Eu já preparei os arquivos. Você só precisa rodar o comando para iniciar o Git (pedi permissão acima).

## Passo 2: Criar repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Nomeie como `portfolio-guilherme`.
3. Deixe como **Privado** ou **Público** (você decide).
4. Clique em "Create repository".

## Passo 3: Enviar o código (No Terminal)
Copie os comandos que aparecem no GitHub na seção **"…or push an existing repository from the command line"**.
Eles serão parecidos com isso:

```bash
git remote add origin https://github.com/SEU_USUARIO/portfolio-guilherme.git
git branch -M main
git push -u origin main
```

Cole esses comandos no seu terminal aqui.

## Passo 4: Conectar no Netlify
1. Acesse [app.netlify.com](https://app.netlify.com).
2. Clique em **"Add new site"** > **"Import from existing project"**.
3. Escolha **GitHub**.
4. Autorize o Netlify a ver seus repositórios.
5. Selecione o repositório `portfolio-guilherme`.
6. Clique em **Deploy Site**.

## ✨ Resultado
Agora, sempre que você alterar algo no site:
1. Salve o arquivo.
2. No terminal, digite:
   ```bash
   git add .
   git commit -m "Nova atualização"
   git push
   ```
3. O Netlify verá a mudança e atualizará o site em segundos automaticamente!
