function calcularTabuada(){
    
    // Variavel referente ao numero digitado na caixa de texto
    let numero = Number(document.getElementById('num').value)

    // Variavel referente a lista em que os resultados da tabuada serão anexados
    let tabuada = document.getElementById('tabuada')

    // Limpando lista ao acionamento do botão de calcular
    tabuada.innerHTML = ''
    
    // LOOP FOR para o calculo da tabuada
    for (let c = 1; c <= 10;){
        
        // Criando um novo elemento 'option' para cada resultado da tabuada
        let tabLista = document.createElement('option')
        tabLista.innerHTML += `${numero} x ${c} = ${numero*c}`        
        tabuada.appendChild(tabLista)
        c++
    }

}