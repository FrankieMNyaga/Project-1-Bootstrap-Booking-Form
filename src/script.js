let numAdults = $('#num-adults').val();

function update() {
  var checkIn = moment($('#datetimepicker1').val());
  var checkOut = moment($('#datetimepicker2').val());
  var diff = checkOut.diff(checkIn, 'days');
  var cost = 150 * $('#num-adults').val() * diff;
  if (diff) {
    document.getElementById('displayDays').value = diff; 
  }
  document.getElementById('displayCost').value = cost;
}
function clearAll() {
  document.getElementById('userInput').value = "";
  document.getElementById('firstInput').value = "";
  document.getElementById('lastInput').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('email').value = "";
  document.getElementById('fax').value = "";
  document.getElementById('datetimepicker1').value = "";
  document.getElementById('datetimepicker2').value = "";
  document.getElementById('messages').value = "";
  toastr["info"]("All inputs were successfully cleared!","" , {
    preventDuplicates: false,
    showDuration: "200" ,
    showEasing: "swing",
    positionClass: "toast-top-right"
  });
}
  function validate() {
    var positive = false;
    var calculated = false;
    var fax = false;
    var email = false;
    var phone = false;
    var user = false;
    var first = false;
    var last = false;
    if ($("#userInput").val() == '') {
     $("#userInput").css('border-color', 'red');
     toastr["error"]("Username is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      user = false;
    }
    else {
      $("#userInput").css('border-color', '');
      user = true;
    }
    if ($("#firstInput").val() == '') {
     $("#firstInput").css('border-color', 'red');
     toastr["error"]("First name is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      first = false;
    }
    else {
      $("#firstInput").css('border-color', '');
      first = true;
    }
    if ($("#lastInput").val() == '') {
     $("#lastInput").css('border-color', 'red');
     toastr["error"]("Last name is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      last = false;
    }
    else {
      $("#lastInput").css('border-color', '');
      last = true;
    }
    if ($("#phone").val() == '') {
     $("#phone").css('border-color', 'red');
     toastr["error"]("Phone number is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      phone = false
    }
    else {
      $("#phone").css('border-color', '');
      phone = true;
    }
    if ($("#email").val() == '') {
     $("#email").css('border-color', 'red');
     toastr["error"]("E-mail is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      email = false;
    }
    else {
      $("#email").css('border-color', '');
      email = true;
    }
    if ($("#fax").val() == '') {
     $("#fax").css('border-color', 'red');
     toastr["error"]("Fax is missing!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      fax = false;
    }
    else {
      $("#fax").css('border-color', '');
      fax = true;
    }
    if ($("#displayCost").val() == '') {
      toastr["error"]("Cost was not calculated!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      calculated = false;
    }
    else {
      calculated = true;
    }
    if ($("#displayDays").val() < 0) {
      toastr["error"]("Cost is negative!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
      positive = false;
    }
    else {
      positive = true;
    }
    if ((positive && calculated && fax && email && phone && user && first && last) == true) {
      toastr["success"]("Form was successfully submitted!","" , {
      preventDuplicates: false,
      showDuration: "200" ,
      showEasing: "swing",
      positionClass: "toast-top-right"
      });
    }
}