function calcularMedia(){    
    // Variaveis que irão receber os numeros inseridos nas caixas de texto no documento
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    // Calculando a media dos numeros acima
    let media = (n1+n2)/2

    // Anexando a resposta do calculo acima a uma parte do documento HTML
    if (n1 < 0 || n2 < 0){
        alert("Erro! Digite valores numericos em ambas as caixas de texto!")
    }else{
        
        let resp = document.getElementById('res')
        resp.innerHTML = `A media de notas é ${media}.`
    }

}