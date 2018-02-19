// Clicking anywhere in the li focuses the child <input>
$('html').removeClass('nojs').addClass('js');

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

$('#contactForm').on('submit', function(e) {
  var email = {
    val: $('#email').val(),
    pat: /^[^\s@]+@[^\s@]+$/
  };

  if (email.pat.test(email.val)) {
    e.preventDefault();
    console.log('Valid Email');
    email.pat = true;
    $(this).remove();
    $('#AboutUs').empty();
    $('form').append('<h2>Thank You for signing up for ESW!</h2>');
  }
});
