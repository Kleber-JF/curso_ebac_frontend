$(document).ready(function() {
    $('li').click(function() {
        if($(this).hasClass('tarefa-nao-feita')) {
         $(this).removeClass('tarefa-nao-feita').addClass('tarefa-feita');
        } else {
         $(this).removeClass('tarefa-feita').addClass('tarefa-nao-feita');
        }
     })

     $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        let novaTarefa = $(`<li class="tarefa-nao-feita">${nomeTarefa}</li>`);
    
        $(novaTarefa).appendTo('ul');
        
        $('#nome-tarefa').val('');
    })  
})
