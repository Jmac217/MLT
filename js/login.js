$(document).ready(function(){

	// focus function
	$('input[type="text"],input[type="password"]').focus(function(){
		$(this).attr('value', '').css({'color':'black'}).select();
	}).blur(function(){
		var alt = $(this).attr('alt');
		$(this).attr('value', alt);
		if($(this).val()==alt){
			$(this).css({'color':'gray'});
		}
	});
	
	// submit function
	$('#submit').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		/*
		$.post('php/login_request.php', {user:user,pass:pass}, function(data){
			alert(data);
		});
		*/
		$.post('php/login_request.php', {user:user,pass:pass}, function(data){
			if(data=='0'){
				window.location.href='index.php';
			}
		});
	});
	
	// user registration
	/*
	$('#user_check_img').css({'background-image':'url("res/x.png")',});
	$('#pass_check_img').css({'background-image':'url("res/check.png")'});
	*/
	
});
