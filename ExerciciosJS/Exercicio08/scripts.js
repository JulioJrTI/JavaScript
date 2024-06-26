function converterMetros(){
    
    // Variavel referente ao numero (em metros) digitando em uma caixa de texto no documento HTML
    var metros = Number(document.getElementById('metros').value)

    // Convertendo metros para centimetros e milimetros    
    var metros_paraCentimetros = metros * 100;
    var metros_paraMilimetros = metros * 1000;
    
    // Anexando as conversões ao documento HTML
    if (metros > 0){        
        var res_Cent = document.getElementById('respCent').innerHTML = `${metros_paraCentimetros} (cm)`

        var res_MM = document.getElementById('respMM').innerHTML = `${metros_paraMilimetros} (mm)`
    }else{
        alert('Erro! Digite um valor numerico acima de 0!')
    }
    
}