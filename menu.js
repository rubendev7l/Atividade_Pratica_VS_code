// Adiciona um evento de rolagem à janela
window.addEventListener("scroll", function(){
    // Seleciona o elemento com o ID 'header' e o armazena na variável 'header'
    let header = document.querySelector('#header')
    // Adiciona ou remove a classe 'rolagem' com base na posição de rolagem da janela
    // A classe 'rolagem' é adicionada quando a posição de rolagem da janela é maior que 100 pixels e pode ser alterada de acordo com a quantidade desejada de rolagem.
    header.classList.toggle('rolagem',window.scrollY > 100)
})
