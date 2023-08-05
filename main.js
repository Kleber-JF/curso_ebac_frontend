$(document).ready(function() {
 
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        let novaTarefa = $(`<li>${nomeTarefa}</li>`);
    
        $(novaTarefa).appendTo('.lista-tarefas ul');
        
        $('#nome-tarefa').val('');
    }) 
        
        $('.lista-tarefas').on('click', 'li', function() {
            $(this).toggleClass('tarefa-feita');
    })
})
