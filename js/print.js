$(document).ready(function(){
	$('#print').click(function(){
		$(this).css({'visibility':'hidden'});
		window.print();
		});
});