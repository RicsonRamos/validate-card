# Desafio DIO - Validador de Cartões de Crédito

Este projeto foi desenvolvido como parte de um desafio proposto pela [DIO](https://www.dio.me/) (Digital Innovation One). O objetivo foi criar um validador de números de cartões de crédito utilizando o algoritmo de Luhn e identificar a bandeira do cartão com base no número.

O código foi auxiliado pelo [GitHub Copilot](https://copilot.github.com/) para otimizar o processo de desenvolvimento e sugerir melhorias.

## Descrição

O validador implementado realiza duas funções principais:

1. **Validação do número do cartão de crédito utilizando o algoritmo de Luhn.**
2. **Identificação da bandeira do cartão** a partir de seu número, utilizando expressões regulares.

## Como Funciona

1. **Algoritmo de Luhn**: O algoritmo de Luhn é um método simples utilizado para verificar a validade de um número de cartão de crédito. Ele aplica um cálculo matemático aos dígitos do cartão, resultando em um número válido apenas se a soma total for divisível por 10.
   
2. **Identificação da Bandeira do Cartão**: O validador usa expressões regulares para identificar a bandeira do cartão (Visa, MasterCard, American Express, etc.) com base no início do número do cartão e no seu comprimento.

## Funcionalidade

O código implementa uma função chamada `validateCreditCard(cardNumber)` que:

- Recebe um número de cartão de crédito (com ou sem espaços ou caracteres especiais).
- Verifica se o número é válido utilizando o algoritmo de Luhn.
- Identifica a bandeira do cartão utilizando expressões regulares.
- Retorna um objeto com a validade e a bandeira do cartão.

## Exemplo de Uso

```javascript
const cardNumber = "3028 674969 7529";
const result = validateCreditCard(cardNumber);
console.log(`Card Number: ${cardNumber}`);
console.log(`Valid: ${result.isValid}`);
console.log(`Issuer: ${result.issuer}`);
```

### Saída esperada:
```
Card Number: 3028 674969 7529
Valid: true
Issuer: American Express
```

## Como Rodar o Código

Para rodar este código, você precisa de um ambiente JavaScript. Você pode utilizá-lo em um arquivo `.html` com um `<script>` dentro, ou em um ambiente de execução JavaScript como Node.js.

### Exemplo de configuração local:
1. Crie um arquivo `index.html`.
2. Adicione o código dentro de uma tag `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validador de Cartão de Crédito</title>
</head>
<body>
  <script src="path/to/your/credit-card-validator.js"></script>
</body>
</html>
```

Ou, caso esteja utilizando **Node.js**:
1. Crie um arquivo `validateCard.js`.
2. Coloque o código dentro do arquivo.
3. Execute com o comando `node validateCard.js`.

## Contribuições

Sinta-se à vontade para fazer sugestões de melhorias ou contribuir com o projeto. Se você encontrar algum bug ou tiver uma ideia de nova funcionalidade, abra um **issue** ou envie um **pull request**!

## Tecnologias Utilizadas

- **JavaScript**
- **GitHub Copilot** 
