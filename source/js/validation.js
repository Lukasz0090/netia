$(document).ready(function () {
  Placeholdem( document.querySelectorAll( '[placeholder]' ) );
    $(".button-scroll").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".usluga").offset().top
        }, 2000, function() {
            $("#number-tel").focus();
        });
    });

 $('#number-tel').on('change keyup', function() {
      // Remove invalid characters
      var sanitized = $(this).val().replace(/[^0-9]/g, '');
      // Update value
    $(this).val(sanitized);
  });

	$('.button-wrapper').click(function(){
    $("#number-tel").focus();
   
   		if(validation()){
   			if($('#number-tel').hasClass("input-large-error")){
   				$('#number-tel').removeClass("input-large-error");
   				$('#number-tel').addClass("input-large");
   				$(".error-info").html("&nbsp");
   			}
   			alert("Przeszło walidacje");
   		}else{
   			$('#number-tel').removeClass("input-large");
   			$('#number-tel').addClass("input-large-error");
   			$(".error-info").html("Proszę podać poprawny numer telefonu!");
   			$("#number-tel").focus();
   			return false;
   		}

});

});
function validation(){
	var a= $("#number-tel").val();
	var filtr =/[0-9]{8,13}/;
	if(filtr.test(a)){
		return true
	}else{
		return false;
	}
}