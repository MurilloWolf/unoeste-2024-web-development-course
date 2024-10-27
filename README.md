# Introdução ao desenvolvimento web

## Tecnologias utilizadas

[Vscode](https://code.visualstudio.com/)
[Browser](https://www.google.com/intl/pt-BR/chrome/)
[Chatgpt](https://chat.openai.com/)
[Plugin LiveServer ](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Plugin Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[Plugin Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
[Plugin Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

## Sumário

- [Introdução](#introdução)
- [Setup](#setup)
- [HTML e DOM](#html)
- [CSS](#css)
- [JavaScript](#javascript)

## Introdução

## Setup

Configuração do prettier
Abrir o arquivo settings.json do vscode e adicionar as seguintes configurações: Windows: `Ctrl + Shift + P` e digitar `settings.json` ou `Ctrl + ,`

````json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.semi": false,
  "prettier.singleQuote": true
}

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

````

## HTML e DOM

HTML é a sigla para HyperText Markup Language, que em português significa Linguagem de Marcação de Hipertexto. É uma linguagem de marcação utilizada para desenvolver páginas web. O HTML é composto por tags que são interpretadas pelos navegadores para exibir o conteúdo de uma página web.

Tags são elementos que compõem o HTML. Elas são formadas por um nome e podem conter atributos. As tags são utilizadas para estruturar o conteúdo de uma página web.

A estrutura mais comum de uma tag é a seguinte: `<[nome_da_tag]> </[nome_da_tag]>` ou `<[nome_da_tag] />`.

Cada tag possui um significado e uma função específica. Por exemplo, a tag `<h1>` é utilizada para criar um título de primeiro nível, a tag `<p>` é utilizada para criar um parágrafo, a tag `<a>` é utilizada para criar um link, e assim por diante.

Além disso cada tag possui atributos próprios. Os atributos são utilizados para adicionar informações adicionais a uma tag. Por exemplo, a tag `<a>` possui o atributo `href` que é utilizado para adicionar o endereço de um link.

Essa é a estrutura básica de uma página HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Olá Mundo</h1>
    <p>Este é um parágrafo</p>
  </body>
  <script />
</html>
```

Tag `<head></head>` tudo que estiver dentro dela não será exibido na página, mas sim no cabeçalho da página. A tag `<title></title>` é utilizada para definir o título da página.

Tag `<body></body>` é utilizada para definir o conteúdo da página. Tudo que estiver dentro dela será exibido na página.  
Tag `<script></script>` é utilizada para adicionar scripts JavaScript na página.  
Tag `<link></link>` é utilizada para adicionar arquivos ao html.

### DOM

DOM é a sigla para Document Object Model, que em português significa Modelo de Objetos de Documento. O DOM é uma interface de programação que representa a estrutura de uma página web. Ele é utilizado para acessar e manipular os elementos HTML de uma página.

## CSS

CSS é a sigla para Cascading Style Sheets, que em português significa Folhas de Estilo em Cascata. O CSS é uma linguagem de estilo utilizada para definir a aparência de uma página web. Com o CSS é possível definir a cor, o tamanho, a fonte, a posição, o espaçamento, a borda, o alinhamento, entre outras propriedades de um elemento HTML.

O CSS é composto por regras de estilo que são aplicadas a elementos HTML. Cada regra de estilo é composta por um seletor e um bloco de declarações. O seletor é utilizado para selecionar os elementos HTML que serão estilizados. O bloco de declarações é utilizado para definir as propriedades de estilo que serão aplicadas aos elementos selecionados.

A estrutura de uma regra de estilo é a seguinte: `[seletor] { [propriedade]: [valor]; }`.

Exemplo de regra de estilo:

```css
/* Todos os elementos h1 ficaram com esse estilo */
h1 {
  color: red;
  font-size: 24px;
}

/* Somente as tags com o id="#paragrafo" ficaram com esse estilo */
#paragrafo {
  color: blue;
  font-size: 16px;
}

/* Somente as tags com a classe="classe" ficaram com esse estilo */
.classe {
  color: green;
  font-size: 12px;
}
```

#### Medidas de CSS

- px - 1px = 1 pixel
- em - 1em = 16px relativo ao tamanho da fonte do elemento pai
- rem - 1rem = 16px
- % - 100% = 100% do tamanho do elemento pai

### Flexbox

Flexbox é um modelo de layout bidimensional que permite a fácil alocação de elementos/divs no layout de uma página web. Com o Flexbox, é possível criar layouts complexos de forma simples e eficiente.

#### Principais propriedades do Flexbox:

- **`display: flex;`**  
  Define um contêiner flexível.

- **`flex-direction:`**  
  Define a direção dos itens no contêiner. Opções:

  - `row`
  - `row-reverse`
  - `column`
  - `column-reverse`

- **`flex-wrap:`**  
  Controla a quebra de linha dos itens. Opções:

  - `nowrap`
  - `wrap`
  - `wrap-reverse`

- **`flex-flow:`**  
  Atalho para `flex-direction` e `flex-wrap`. Exemplo:

  - `<flex-direction> || <flex-wrap>`

- **`justify-content:`**  
  Alinha os itens ao longo do eixo principal. Opções:

  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `space-evenly`

- **`align-items:`**  
  Alinha os itens ao longo do eixo transversal. Opções:

  - `stretch`
  - `flex-start`
  - `flex-end`
  - `center`
  - `baseline`

- **`align-content:`**  
  Alinha as linhas do contêiner flexível quando há espaço extra. Opções:
  - `stretch`
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`

## JavaScript

JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela é utilizada para adicionar interatividade e dinamismo a páginas web. Com o JavaScript, é possível criar animações, validar formulários, manipular o DOM, entre outras funcionalidades.

### Variáveis

- `var` - escopo global
- `let` - escopo local
- `const` - constante

### Tipos de dados

- `number` - números
- `string` - texto
- `boolean` - verdadeiro ou falso
- `null` - valor nulo
- `undefined` - valor indefinido
- `object` - objeto
- `array` - array

### Funções

- `function` - declaração de função.
- `window.document` - objeto document.
- `window.document.getElementById` - método para selecionar um elemento pelo id.
- `window.document.querySelector` - método para selecionar um elemento pelo seletor (class, tag, etc).
- `console.log()` - método para exibir uma mensagem no console.

### Eventos

- `addEventListener` - adiciona um evento a um elemento.
- `click` - evento de clique.
- `mouseover` - evento de passar o mouse.
- `mouseout` - evento de tirar o mouse.
- `keydown` - evento de pressionar uma tecla.
- `keyup` - evento de soltar uma tecla.
