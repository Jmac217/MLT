function split_date(date, selection){
	var new_date = date.split("-");
	var year = new_date[0];
	var month = new_date[1];
	var day = new_date[2];
	switch(selection){
		case "year":
			return(year);
		break;
		case "month":
			return(month);
		break;
		case "day":
			return(day);
		break;
	}
}

function set_session(first,last){
	// send this first and last name to setSession.php
	$.post('php/setSession.php',{first:first,last:last},function(){
		$('#send_request').css({'left':'270px'});
		$('#print_preview').css({'visibility':'visible'});
	});
}
