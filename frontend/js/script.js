//Inicializar o Jquery
$(document).ready(function () { 


    var alturaTopo = $('#topo').outerHeight();
    //console.log(alturaTopo);

    //ao usar o scroll
    $(window).scroll(function () {

      var qtdScroll = $(window).scrollTop();

      if (qtdScroll > alturaTopo + 100) {
        $('#topo').addClass('topo-fixo');
      } else {
        $('#topo').removeClass('topo-fixo');
      }

    });

    $('#formCadastro').hide();

    $('#formCadastro').validate();
    $('#formLogin').validate();

    $('#data').mask('99/99/9999');
    $('#cpf').mask('999.999.999-99');

    //ao clicar no botão de cadastrar
    $('#btnCad').click(function () {

      $('#formCadastro').delay(200).slideDown();
      $('#formLogin').slideUp();

    });

    $('#btnLogin').click(function () {
      $('#formCadastro').hide();
      $('#formLogin').show();
    })

    $('#btnOk').click(function () {
      $('#info').hide();
      localStorage.setItem('fechouMsg', 'sim');

    });

    if (localStorage.getItem('fechouMsg') == 'sim') {
      $('#info').hide();
    }


  });