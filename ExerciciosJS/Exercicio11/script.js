function calcularArea() {
    // Inserindo em variáveis os valores de largura e altura inseridos no documento HTML
    let larguraParede = Number(document.getElementById('largura').value);
    let alturaParede = Number(document.getElementById('altura').value);

    // Tratamento de erro
    if (larguraParede <= 0 || alturaParede <= 0) {
        window.alert('Erro! A largura e a altura precisam ser valores numéricos acima de 0!');
    } else {
        // Calculando a área
        let area = larguraParede * alturaParede;

        // Calculando a quantidade de tinta necessária
        let quantTinta = area / 2;

        // Anexando informações ao documento HTML
        let catchSection = document.getElementsByTagName('section')[0];
        let criarTag = document.createElement('p');
        criarTag.textContent = `Em uma área de ${area} m², será necessário ${quantTinta} litros de tinta!`;
        catchSection.appendChild(criarTag);
    }
}
