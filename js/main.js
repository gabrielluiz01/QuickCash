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
    $('.closejs').click(function(){
        $('.faleConosco').css('display','none');
    });
    $('.closejs').click(function(){
        $('.buttomContact').css('display','flex');
    });
    $('.buttomContact').click(function(){
        $('.buttomContact').css('display','none');
    });   
});

$(document).ready(function(){
    $(".mostrar").hide();
    $(".ocultar").click(function(){
        $(this).next(".mostrar").slideToggle(600);
    });
}); 
$('.arrow').on('click', function() {
    $(this).toggleClass('active');
});
$('.arrow--l-r').on('click', function() {
    $(this).toggleClass('left right');
});

var slidesIncentivadores = 1;
showIncentivadores(slidesIncentivadores);

function plusIncentivadores(n){
  showIncentivadores(slidesIncentivadores += n);
}

function showIncentivadores(n){
  var i;
  var x = document.getElementsByClassName("contEncouraging-container");
  if (n > x.length) {slidesIncentivadores = 1}
  if (n < 1 ) {slidesIncentivadores = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesIncentivadores-1].style.display = "flex";
};

var slidesProjects = 1;
showProjects(slidesProjects);

function plusProjects(n){
  showProjects(slidesProjects += n);
}

function showProjects(n){
  var i;
  var x = document.getElementsByClassName("contProject-container");
  if (n > x.length) {slidesProjects = 1}
  if (n < 1 ) {slidesProjects = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesProjects-1].style.display = "flex";
};