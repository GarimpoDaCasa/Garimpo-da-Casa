# Garimpo da Casa — Landing Page (Bio do Instagram)

Landing page estática, leve e responsiva, feita com **HTML + CSS + JavaScript puro** (sem frameworks), pensada para ser colocada no link da bio do Instagram e direcionar cliques para produtos afiliados do Mercado Livre.

## 📁 Estrutura do projeto

```
garimpo-da-casa/
├── index.html      → estrutura da página
├── style.css        → estilo visual (cores, layout, responsividade)
├── script.js        → interações (ano automático, botão voltar ao topo)
├── assets/          → imagens (foto de perfil, favicon, imagem de compartilhamento)
└── README.md        → este arquivo
```

## ✏️ Antes de publicar, personalize:

1. **Foto de perfil**: coloque sua imagem em `assets/perfil.jpg`.
2. **Favicon**: coloque um ícone quadrado em `assets/favicon.png`.
3. **Imagem de compartilhamento (Open Graph)**: coloque uma imagem em `assets/og-image.jpg` (ideal 1200x630px).
4. **Imagens dos produtos**: troque as URLs `https://via.placeholder.com/...` no `index.html` pelas fotos reais dos produtos (pode usar a própria imagem do anúncio do Mercado Livre).
5. **Links de afiliado**: troque todos os `https://mercadolivre.com.br/xxxxx` pelos seus links de afiliado reais.
6. **WhatsApp**: troque `5500000000000` pelo seu número (com DDI + DDD, só números).
7. **Instagram**: troque `seuusuario` no link do ícone do Instagram.
8. **URL do site**: troque `https://seuusuario.github.io/garimpo-da-casa/` nas tags de SEO/Open Graph pela URL final do seu GitHub Pages.

## 🚀 Como publicar gratuitamente no GitHub Pages

### Passo 1 — Criar uma conta no GitHub
Se ainda não tiver, crie uma conta gratuita em [github.com](https://github.com).

### Passo 2 — Criar um novo repositório
1. Clique em **New repository**.
2. Dê um nome, por exemplo: `garimpo-da-casa`.
3. Deixe como **Public**.
4. Não marque nenhuma opção extra (README, .gitignore, etc.) — vamos subir os arquivos prontos.
5. Clique em **Create repository**.

### Passo 3 — Enviar os arquivos
**Opção mais simples (pelo navegador):**
1. Na página do repositório recém-criado, clique em **uploading an existing file**.
2. Arraste os arquivos `index.html`, `style.css`, `script.js`, a pasta `assets/` e o `README.md`.
3. Clique em **Commit changes**.

**Opção via terminal (Git):**
```bash
git init
git add .
git commit -m "Primeira versão do site Garimpo da Casa"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/garimpo-da-casa.git
git push -u origin main
```

### Passo 4 — Ativar o GitHub Pages
1. No repositório, vá em **Settings** (Configurações).
2. No menu lateral, clique em **Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**.
5. Aguarde 1–2 minutos. O GitHub vai gerar uma URL parecida com:
   ```
   https://seu-usuario.github.io/garimpo-da-casa/
   ```

### Passo 5 — Colocar o link na bio do Instagram
Copie a URL gerada e cole no campo **Site** do seu perfil do Instagram.

## 🔄 Como atualizar depois

Sempre que quiser trocar produtos, imagens ou links:
- **Pelo navegador**: entre no repositório → clique no arquivo → ícone de lápis (editar) → salve com **Commit changes**.
- **Pelo terminal**: edite os arquivos localmente, depois:
  ```bash
  git add .
  git commit -m "Atualiza produtos"
  git push
  ```
As mudanças ficam no ar automaticamente em cerca de 1 minuto.

## ⚡ Por que esse site é rápido

- Sem frameworks ou bibliotecas pesadas — só HTML, CSS e JS puro.
- Único CDN externo usado: Google Fonts (Poppins) e Font Awesome (ícones), ambos leves e com cache no navegador do usuário.
- Imagens com `loading="lazy"` (carregam só quando necessário).
- Sem dependências de build — funciona direto ao abrir o `index.html`.
