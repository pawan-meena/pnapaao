// Scroll.js

$(window).on('popstate',function(e){
	e.preventDefault();
	var target = window.location.href.split("#")[1];
	if(target != "" && target!=undefined && document.getElementById(target)!=null){
		$('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
			window.location.hash = target;
		});
	}
});

$(document).ready(function() {
	SF_scripts();
});

function SF_scripts(){

	$(window).resize(function(){
		showMenuBtn();
	});

	$(window).trigger("resize");

	function showMenuBtn(){
		if($(window).width()<1199.98){
			$(".open_menu").addClass("d-block");
			$("header nav").addClass("d-none");
			$(".navigation_mobile").removeClass("opened");
		}else{
			$(".open_menu").removeClass("d-block");
			$("header nav").removeClass("d-none");
			$(".navigation_mobile").removeClass("opened");
		}
	}

	$(".open_menu").click(function(event){
		event.preventDefault();
		$(".navigation_mobile").addClass("opened");
	});

	$(".close_menu, header, section, footer, .navigation_mobile .inner a").click(function(event){
		$(".navigation_mobile").removeClass("opened");
	});
	
}; 

$(document).ready(function(){
	$(".form1").on("submit", function(e){
       e.preventDefault();
	     $('input[type="submit"]').addClass('disabled');
	      let email=$('#Email').val();
          let x = 'Customer Email id is ' + email;
	$(this).html("plz wait...");
	Email.send({
        SecureToken :	"fe8e684a-4208-431f-80fd-0b0f9e59bac7",
    To : 'dj884092@gmail.com',
    From : "pawanmeenagi@gmail.com",
    Subject : "From pnapaao customer",
    Body : x,
}).then(
  message => {

	if (message=='OK') {
		$(this).trigger("reset");
		  $('input[type="submit"]').removeClass('disabled');
		$(this).html("<span style='color:green;font-size:2rem;font-family:bold;'>THANK YOU </span><br><br> We will get back to you shortly");
	}else{
		alert('Message Not Send ! server Problem');
	}
  }
); 
})


$(".form2").on("submit", function(e){
       e.preventDefault();
	     $('input[type="submit"]').addClass('disabled');
	      let email=$('#Email-1').val();
		  let name=$('#Name-1').val();
          let x = 'Customer Email id is ' + email+'<br> Customer Name is ' + name;
	$(this).html("plz wait...");
	Email.send({
        SecureToken :	"fe8e684a-4208-431f-80fd-0b0f9e59bac7",
    To : 'dj884092@gmail.com',
    From : "pawanmeenagi@gmail.com",
    Subject : "From pnapaao customer",
    Body : x,
}).then(
  message => {

	if (message=='OK') {
		$(this).trigger("reset");
		  $('input[type="submit"]').removeClass('disabled');
		$(this).html("<span style='color:green;font-size:2rem;font-family:bold;'>THANK YOU </span><br><br> We will get back to you shortly");
	}else{
		alert('Message Not Send ! server Problem');
	}
  }
); 
})

$(".form3").on("submit", function(e){
       e.preventDefault();
	     $('input[type="submit"]').addClass('disabled');
	      let email=$('#Email-2').val();
		  let msg=$('#Message').val();
          let x = 'Customer Email id is ' + email+'<br> Customer Message is ' + msg;
	$(this).html("plz wait...");
	Email.send({
        SecureToken :	"fe8e684a-4208-431f-80fd-0b0f9e59bac7",
    To : 'dj884092@gmail.com',
    From : "pawanmeenagi@gmail.com",
    Subject : "From pnapaao customer",
    Body : x,
}).then(
  message => {

	if (message=='OK') {
		$(this).trigger("reset");
		  $('input[type="submit"]').removeClass('disabled');
		$(this).html("<span style='color:green;font-size:2rem;font-family:bold;'>THANK YOU </span><br><br> We will get back to you shortly");
	}else{
		alert('Message Not Send ! server Problem');
	}
  }
); 
})

  });