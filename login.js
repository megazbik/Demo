//hasło

$('input[type=password]').keyup(function() {
  var pswd = $(this).val();

  //sprawdź długość
  if (pswd.length < 8) {
    $('#length').removeClass('valid').addClass('invalid');
  } else {
    $('#length').removeClass('invalid').addClass('valid');
  }

  //sprawdź małą literę
  if (pswd.match(/[a-z]/)) {
    $('#letter').removeClass('invalid').addClass('valid');
  } else {
    $('#letter').removeClass('valid').addClass('invalid');
  }

  //sprawdź dużą literę
  if (pswd.match(/[A-Z]/)) {
    $('#capital').removeClass('invalid').addClass('valid');
  } else {
    $('#capital').removeClass('valid').addClass('invalid');
  }

  //sprawdź znak specjalny
  if (pswd.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
    $('#character').removeClass('invalid').addClass('valid');
  } else {
    $('#character').removeClass('valid').addClass('invalid');
  }

  //sprawdź cyfrę
  if (pswd.match(/\d/)) {
    $('#number').removeClass('invalid').addClass('valid');
  } else {
    $('#number').removeClass('valid').addClass('invalid');
  }
}).focus(function() {
  $('#pswd_info').show();
}).blur(function() {
  $('#pswd_info').hide();
});