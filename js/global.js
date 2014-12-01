// globals

// Checkboxes
$('input[type="checkbox"]').click(function(){
	if(this.checked){
		$(this).parent().siblings('.date').children('.date_wrapper').css({'visibility':'visible'})
	}else{
		$(this).parent().siblings('.date').children('.date_wrapper').css({'visibility':'hidden'})
	}
});