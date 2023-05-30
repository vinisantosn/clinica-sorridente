$(document).ready(function(){    
    
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: "(00) 00000-0000"
    });
    

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: false
            },
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: 'Insira seu nome',
            email: 'Informe seu email',
            telefone: 'Por favor, digite seu número',
            mensagem: 'Insira sua mensagem'
        },
        submitHandler: function (form) {
            console.log(form);
            
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })

    $('form').on('submit', function(e){
        
        e.preventDefault();
        
        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#mensagem').val('');


    });
})