function calcular(){
    
    // Variavel referente ao numero inserido na caixa de texto
    var numero = Number(document.getElementById('num').value)

    // Variavel referente a resposta do calculo
    var resposta = document.getElementById('resp')

    // Variaveis referentes ao sucessor e antecessor do numero inserido na caixa de texto
    var numAnt = (numero - 1)
    var numSuc = (numero + 1)

    // Anexando a resposta dos calculos acima ao documento
    if (numero!=0){
        resposta.innerHTML = `O numero ${numero} tem como sucessor o numero ${numAnt} e como sucessor o numero ${numSuc}.`
    }else{
        alert("Digite um numero na caixa de texto!")
    }
}