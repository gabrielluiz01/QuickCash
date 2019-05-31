$(function(){
    $('.mobileButton').click(function(){
        $('.menumobile__block').css('display','block');
    });
    $('.buttonexit').click(function(){
        $('.menumobile__block').css('display','none');
    });
    $('.contact').click(function(){
        $('.menumobile__block').css('display','none');
    });
});


$( document ).ready(function() {
    console.log( "ready!" );

    var moedaDe = $( "#from option:selected" ).val()
    var moedaPara = $( "#to option:selected" ).val()

    $('#from').on('change', function (){
        moedaDe = $(this).val()    
    })

    $('#to').on('change', function (){
        moedaPara = $(this).val() 
    })

    $('#coin').on('change', function (){
        $.get( "https://free.currconv.com/api/v7/convert?q=" + moedaDe + "_" + moedaPara + "&compact=y&apiKey=87199215beb65d0ded9c").done(function( data ) {
          $('#result').val('.....')
           var moedaDePara =  moedaDe + "_" + moedaPara;
    var valorAtualMoeda = data[moedaDePara].val.toFixed(2);
    var valorConvertido = $('#coin').val() * valorAtualMoeda
	  $('#result').val(valorConvertido)
        });
    })

});

$(function(){
	
	$('.navbarMobile-text').click(function(){
		$('.navbarMobile-menu').css('display','flex');
	});
	$('.botaoSair').click(function(){
		$('.navbarMobile-menu').css('display','none');
	});
	$('.contatos').click(function(){
		$('.navbarMobile-menu').css('display','none');
	});
});


$(function(){
    $('#mostrar').click(function(){
        $('.containerCash').css('display','flex');
        $('.containerCard').css('display','none');
        $('.containerAccount').css('display','none');
    });
    $('#card').click(function(){
        $('.containerCard').css('display','flex');
        $('.containerCash').css('display','none');
        $('.containerAccount').css('display','none');
    });
    $('#account').click(function(){
        $('.containerAccount').css('display','flex');
        $('.containerCard').css('display','none');
        $('.containerCash').css('display','none');
    });
});

$(function(){
    $('.faleConosco-titulo-sair').click(function(){
        $('.faleConosco').css('display','none');
    });
    $('.buttomContact').click(function(){
        $('.faleConosco').css('display','block');
    });
    $('.cancel').click(function(){
        $('.faleConosco').css('display','none');
    });
    $('.cancel').click(function(){
        $('.buttomContact').css('display','flex');
    });
    $('.buttomContact').click(function(){
        $('.buttomContact').css('display','none');
    });
});