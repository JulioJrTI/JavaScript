function HoraDoDia(){
    
    // Descobrindo a hora atual
    var data = new Date()
    var hora = data.getHours()    

    // Variavel referente a 'div' com tag 'msg' que irá receber uma mensagem referente a hora do dia
    var msg = document.getElementById('msg')
    msg.innerHTML = `Agora são ${hora} horas.`

    // Variavel que irá receber alterações ao 'body' do documento
    var bg = document.body

    // Variavel referente a imagem a ser adicionada/alterada pela condição abaixo
    var img = document.getElementById('foto') 
    
    // Condição referente a hora do dia em que dependendo da hora, iremos mudar a cor de background e imagem na section
    if (hora >= 6 && hora < 12){
        //Dia
        bg.style.backgroundColor = '#eaab00'
        img.src = 'imagens/fotoManha.png'
    }else if (hora > 12 && hora < 18){
        //Tarde
        bg.style.backgroundColor = '#7297b4'
        img.src = 'imagens/fotoTarde.png'
    }else{
        //Noite
        bg.style.backgroundColor = '#032e56'
        img.src = 'imagens/fotoNoite.png'
    }
}