# Historico de Preços do Mercado

[![Build and Deploy](https://github.com/fberanizo/historico-precos-mercado/actions/workflows/deploy.yml/badge.svg)](https://github.com/fberanizo/historico-precos-mercado/actions/workflows/deploy.yml)

----

Dashboard para avaliar a evolução dos preços nas compras que realizei.

----

## Como adicionar novos dados

1. Acessar a página de Cupom Fiscal Eletrônico na NFP ([example here](./cupom.png))
2. Rodar o seguinte script no console do navegador
```js
var json = {"venue": "NOME-DO-SUPERMERCADO", "names": [], "values": []};
document.querySelectorAll("#tableItens tbody tr").forEach(tr => {
  var items = Array.from(tr.querySelectorAll("td"));
  if (items.length === 8) {
    var regex = /X\n([0-9]+,[0-9]+)/;
    var valueUnit = parseFloat(items.find(td => td.innerText.match(regex)).innerText.match(regex)[1].replace(",", "."));
    var itemName = items[2].innerHTML;
    json["names"].push(itemName);
    json["values"].push(valueUnit);
  }
});
json;
```
3. Copiar output para um arquivo `ANODACOMPRA-MESDACOMPRA-DIADACOMPRA-NOME-MERCADO.json` na pasta `src/data`
4. Alterar `src/features/prices/priceAPI.ts` para importar o novo arquivo
5. Adicionar produtos à lista em `src/features/products/productsAPI.ts`
```js
var products = "copiar aqui o conteúdo do object com a lista de produtos";
var isProduct = (item) => products["data"].some(p => item.match(p["regex"]));
json["names"].filter(i => !isProduct(i));
```

## Acesso

https://fberanizo.github.io/historico-precos-mercado/
