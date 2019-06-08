# Historico de Preços do Mercado

----

Dashboard para avaliar a evolução dos preços nas compras que realizei.

----

## Como adicionar novos dados

1. Copiar HTML da #divTelaImpressao do site da NFP
2. Usar o site http://www.convertcsv.com/html-table-to-csv.htm para converter de HTML para CSV
3. Tirar a linha do header
4. Substituir \n^, por , para deixar produtos e preços na mesma linha
5. Substituir ("[^",]*),([^"]+") por $1.$2 para troca vírgula por ponto
6. Substituir "X (.+?)" por $1 para troca vírgula por ponto
7. Executar o script abaixo na pasta 

```shell
for file in $(ls); do
  echo "$file"
  printf "{\"names\":[" > tmp
  awk -F ',' '{printf("\"%s\",", $3)}' "$file" >> tmp
  printf "\"\"],\"values\":[" >> tmp
  awk -F ',' '{printf("%s,", $6)}' "$file" >> tmp
  printf "\"\"]}" >> tmp
  mv tmp "$file"
done
```

8. Copiar arquivos para pasta `src/data`

## Acesso

https://boiling-woodland-38725.herokuapp.com