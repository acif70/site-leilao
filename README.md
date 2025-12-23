Perfeito.
Abaixo está **UM ÚNICO TEXTO**, organizado, limpo e direto, **pronto para você copiar e colar inteiro no `README.md`**.
Não precisa adaptar nada — depois, quando quiser, você só edita os trechos indicados.

---

````md
# O Código da Obra — Site de Leilões

Este repositório contém o site **O Código da Obra**, um site estático para leilões de obras autorais, desenvolvido para funcionar de forma simples, transparente e manual, sem backend ou sistemas complexos.

O objetivo é manter um ambiente sério e respeitoso entre artista e colecionadores.

---

## Visão geral do funcionamento

- Site estático hospedado no **GitHub Pages**
- Leilões feitos de forma manual
- Lances enviados via **Google Forms**
- Acompanhamento público via **Google Sheets** (sem dados sensíveis)
- Contato direto via WhatsApp, Instagram ou e-mail
- Pagamento via PIX combinado após o encerramento do leilão

---

## Estrutura do projeto

Arquivos principais:

- `index.html` — Página inicial (hub do site)
- `leiloes.html` — Página do leilão ativo
- `galeria.html` — Galeria de obras
- `contato.html` — Página de contato e sobre a autora
- `style.css` — Estilos visuais do site
- `script.js` — Scripts (modais, galeria, contador e status do leilão)
- `assets/img/` — Pasta de imagens

Imagens importantes:
- `assets/img/obra-x.jpg` — imagem da obra em leilão
- `assets/img/autora.jpg` — foto da autora
- Outras obras da galeria também ficam nesta pasta

---

## Como abrir ou atualizar um leilão

Tudo relacionado ao leilão é editado no arquivo:

**`leiloes.html`**

### 1. Definir data e hora de encerramento

Procure o trecho:

```html
<div class="big" id="endAt" data-end="2025-12-23T20:00:00-03:00">
  23/12/2025 • 20:00
</div>
````

Edite **as duas partes**:

* O texto visível (data e hora exibidas ao público)
* O atributo `data-end`, sempre no formato:
  `AAAA-MM-DDTHH:MM:SS-03:00`
  (fuso horário de Brasília)

Exemplo:

```html
data-end="2026-01-10T20:00:00-03:00"
```

O site calcula automaticamente:

* Status do leilão (ABERTO / ENCERRADO)
* Contador regressivo até o encerramento

---

### 2. Alterar título, descrição e imagem da obra

No mesmo arquivo `leiloes.html`, procure o modal **“Informações do Leilão”**:

```html
<div class="modal-title">Leilão da Obra X</div>
<div class="desc">Descrição da Obra X</div>
<img src="assets/img/obra-x.jpg">
```

Edite:

* Título do leilão
* Texto descritivo da obra
* Caminho da imagem

A imagem deve estar dentro de:

```
assets/img/
```

---

### 3. Definir o valor mínimo do lance

Procure:

```html
<div class="price">R$ 150,00</div>
```

Altere para o valor desejado.

---

### 4. Formulário oficial de lances

O formulário funciona via Google Forms.

No `leiloes.html`, localize o iframe do formulário e substitua o link caso crie um novo formulário no futuro:

```html
<iframe src="LINK_DO_GOOGLE_FORMS"></iframe>
```

O formulário abre em um pop-up ao clicar em **“Dê seu Lance!”**.

---

### 5. Planilha pública de acompanhamento

A planilha pública (aba “PUBLICO” do Google Sheets) aparece no lado direito da página.

Se necessário, substitua o link do iframe pelo novo link publicado da planilha:

```html
<iframe src="LINK_DA_PLANILHA_PUBLICA"></iframe>
```

A planilha exibe apenas:

* Data e hora
* Nome fictício
* Valor do lance

---

## Como adicionar obras na Galeria

A galeria é controlada pelo arquivo:

**`script.js`**

Dentro dele existe uma lista chamada `OBRAS`.

Cada obra segue este modelo:

```js
{
  id: "obra-01",
  titulo: "Nome da Obra",
  descricao: "Descrição breve da obra.",
  nome: "Nome da Obra",
  numero: "COD-01/2026",
  tecnica: "Aquarela sobre papel",
  etc: "Dimensões, ano ou observações",
  img: "assets/img/obra-01.jpg"
}
```

### Passos para adicionar uma obra:

1. Envie a imagem para:

   ```
   assets/img/
   ```
2. Copie um bloco de obra no `script.js`
3. Cole abaixo das outras obras
4. Edite os textos e o caminho da imagem

A ordem das obras na galeria segue a ordem da lista no arquivo.

---

## Como editar a página de contato

Arquivo:

**`contato.html`**

### Informações de contato

Procure e edite:

```html
Telefone / WhatsApp:
Instagram:
E-mail:
```

Substitua pelos dados reais.

---

### Foto da autora

A imagem está configurada como:

```html
<img src="assets/img/autora.jpg">
```

Para trocar a foto:

* Envie a nova imagem para `assets/img/`
* Ou altere o nome do arquivo no código

---

### Texto “Sobre a Autora”

No mesmo arquivo, edite livremente os parágrafos dentro da seção **Sobre a Autora**.

Recomenda-se manter um texto curto, profissional e coerente com o tom do site.

---

## Página inicial (Quadro de Avisos)

Arquivo:

**`index.html`**

Edite o bloco **QUADRO DE AVISOS** para informar:

* Nome do leilão
* Data e hora
* Avisos importantes

Esse quadro é totalmente manual.

---

## Onde colocar imagens

Todas as imagens do site devem ficar em:

```
assets/img/
```

Boas práticas:

* Use nomes simples (sem espaços)
* Exemplo: `obra-01.jpg`, `obra-02.jpg`, `autora.jpg`
* Evite arquivos muito grandes

---

## Publicação no GitHub Pages

Para atualizar o site:

1. Abra o arquivo desejado no GitHub
2. Clique em **Edit**
3. Cole o novo conteúdo
4. Faça o **Commit**

As mudanças podem levar alguns minutos para aparecer no site.

---

## Observação final

Este site foi projetado para:

* Ser simples
* Ser transparente
* Manter controle manual do leilão
* Evitar burocracia e sistemas complexos

Qualquer evolução futura deve respeitar essa filosofia.

```
