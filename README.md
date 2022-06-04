# Historico de Preços do Mercado

[![Build and Deploy](https://github.com/fberanizo/historico-precos-mercado/actions/workflows/deploy.yml/badge.svg)](https://github.com/fberanizo/historico-precos-mercado/actions/workflows/deploy.yml)

----

Dashboard para avaliar a evolução dos preços nas compras que realizei.

----

## Como adicionar novos dados

1. Copiar HTML da #divTelaImpressao do site da NFP
2. Usar o site http://www.convertcsv.com/html-table-to-csv.htm para converter de HTML para CSV
3. Salvar o CSV em um arquivo com nome 'ANODACOMPRA-MESDACOMPRA-DIADACOMPRA-NOME-MERCADO.json'
4. Tirar a linha do header
5. Substituir \n^, por , para deixar produtos e preços na mesma linha
6. Substituir ("[^",]*),([^"]+") por $1.$2 para troca vírgula por ponto
7. Substituir "X (.+?)" por $1 para troca vírgula por ponto
8. Executar o script abaixo

```shell
file='2022-05-30-SUPERMERCADO-BIG-BOM-LTDA.json'
printf "{\"names\":[" > tmp
awk -F ',' '{printf("\"%s\",", $3)}' "$file" >> tmp
printf "\"\"],\"values\":[" >> tmp
awk -F ',' '{printf("%s,", $6)}' "$file" >> tmp
printf "\"\"]}" >> tmp
mv tmp "$file"
```

9. Copiar arquivo 'ANODACOMPRA-MESDACOMPRA-DIADACOMPRA-NOME-MERCADO.json' para pasta `src/data`
10. Alterar `src/services/prices.js` para importar o novo arquivo

## Acesso

https://boiling-woodland-38725.herokuapp.com
