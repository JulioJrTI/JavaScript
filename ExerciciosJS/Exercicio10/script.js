// Criando um tag no documento HTML que irá conter o resultado da conversão
var elementoMain = document.getElementsByTagName('div')[0]
var criarTag = document.createElement('h1')

function conversaoDolar(){

    // Inserindo o valor de uma caixa de texto no documento na variavel abaixo
    let dinheiroReais = Number(document.getElementById('reais').value)
    
    // Cotação atual (15/07/24)
    let cotacaoAtual = 5.45

    // Convertendo BR para USD e imprimindo o resultado
    if (dinheiroReais <= 0){
        window.alert('Erro! Digite um valor monetario superior a 0 reais!')
    }else{
        // Convertendo BR para USD
        let converterDolar = (dinheiroReais/cotacaoAtual)
        
        // Formatando valor monetario dolar
        let dolarFormatado = converterDolar.toLocaleString('en-US',{style:'currency',currency:'USD'})
        
        // Inserindo ao documento HTML o resultado da conversão
        criarTag.textContent = `R$${dinheiroReais} valem ${dolarFormatado} USD`
        elementoMain.appendChild(criarTag)
    }
}