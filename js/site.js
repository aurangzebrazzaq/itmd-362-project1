$('#contactForm').on('submit', function(e) {
  var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneNumber.value.match(phoneNo)) {
    console.log('working');
    submitted();
  } else {
    console.log("incorrect phone number")
    resubmit();
  }
});

function submitted() {
  console.log('The form was successfully submitted.');
  $(contactForm).remove();
  $('body').append('<h1>Thank You. Check Your Email </h1>');
}

function resubmit() {
  window.alert("Enter a correct phone number.");
}
