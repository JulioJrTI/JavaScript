// Reais
var dinheiroReais = 15

// Contação atual (15/07/24)
var dolarAtual = 5.45

// Convertendo BR para USD
var conversaoDolar = (dinheiroReais/dolarAtual)

// Imprimindo resultado da conversão
console.log(`R$${dinheiroReais} = ${conversaoDolar.toLocaleString('en-US',{style:'currency',currency:'USD'})}`)
