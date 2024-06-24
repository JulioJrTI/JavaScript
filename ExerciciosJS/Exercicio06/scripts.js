// Função que irá calcular o dobro, triplo e raiz quadrada de um numero inserido em uma caixa de texto

function calcular(){
    
    // Armazenando um valor numerico inserido em uma caixa de texto em uma variavel
    let num = Number(document.getElementById('num').value);

    // Variaveis para o dobro, triplo e raiz quadrada do numero acima
    let dobro = num*2;
    let triplo = num*3;
    let raizQ = Math.sqrt(num);    

    // Inserido a resposta do calculo a uma parte do documento html
    if (num <= 0){
        alert("Erro! Digite um valor numerico na caixa de texto!")
    }else{        
        let res = document.getElementById('resp')
        res.innerHTML = `O numero ${num} tem o dobro ${dobro}, triplo ${triplo} e raiz quadrada ${raizQ.toFixed(3)}!`
    }

}