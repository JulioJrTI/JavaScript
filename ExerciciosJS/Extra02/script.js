function calcularIdade(){
    
    // Calculando idade do usuario pelo que foi digitado na caixa de texto
    var data = new Date().getFullYear()
    var anoNascimento = Number(document.getElementById('anoNascimento').value)    
    var idade = (data - anoNascimento)
    
    // Variavel referente aos Radio Buttons
    var botoes = document.getElementsByName('sexo')

    // Variavel referente a mensagem a ser inserida
    var msg = document.getElementById('msg')

    // Variavel referente a foto a ser inserida
    var fotoPessoa = document.getElementById('foto')
    
    // Condições para mostrando a idade e uma foto cosmetica a idade e sexo da pessoa    
    if (anoNascimento > data){
        alert("ERRO! Não digite uma data superior a data atual!")
    }else{
        if (botoes[0].checked){
            msg.innerHTML = `Detectamos Homem com ${idade} anos de idade.`

            if (idade < 12){
                fotoPessoa.src = 'imagens/bebeM.png'
            }else if (idade < 18){                        
                fotoPessoa.src = 'imagens/jovemM.png'
            }else if (idade < 60){            
                fotoPessoa.src = 'imagens/adultoM.png'
            }else{
                fotoPessoa.src = 'imagens/idosoM.png'
            }
        }else if (botoes[1].checked){
            msg.innerHTML = `Detectamos Mulher com ${idade} anos de idade.`
            
            if (idade < 12){
                fotoPessoa.src = 'imagens/bebeF.png'
            }else if (idade < 18){
                fotoPessoa.src = 'imagens/jovemF.png'
            }else if (idade < 60){
                fotoPessoa.src = 'imagens/adultoF.png'
            }else{
                fotoPessoa.src = 'imagens/idosoF.png'
            }        
        }
    }
}