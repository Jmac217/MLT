<?php include 'connect.php';

	$maxQuery = mysql_query("SELECT id FROM customers");
	$maxRow = mysql_fetch_assoc($maxQuery);
	$max = mysql_num_rows($maxQuery);
	$cap = 40;// well for now I have hard-coded the amount of slots available for use. There is no limit on the db so if there is ever more than 40, which there shouldn't be, this is the thing to rewrite.
	$height = 20;
	
	$i=0;
	$t=0;
						
	while($i<=$cap){ // loop through all rows

		if(isset($_POST['search'])&&$_POST['search']!==''){
			$search=addslashes($_POST['search']);
			$row = mysql_fetch_assoc(mysql_query("SELECT id,first,last FROM customers WHERE id='$i' and last='$search'"));
		}else{
			$row = mysql_fetch_assoc(mysql_query("SELECT id,first,last FROM customers WHERE id='$i'")); // select only the rows where user exists and that are unread
		}
		if(isset($row['first'])&&isset($row['last'])){
			if($row['id']==$i){
				//if($t=0){$top=0;}else{
				$top = ($t*$height)/*.'px'*/; // this dynamically sets message top
				//}
				$id=$row['id']; // this message_id
						
						echo '
						<div class="customer_container" style="top:'.$top.'px">
							<div class="customer" id="'.$i.'">
								'.$row['first'].' '.$row['last'].'
							</div>
							<div class="options">
								<div class="remove" id="'.$i.'"><!--<img src="res/x_gray.png" />--></div>
							</div>
						</div>';

				$i++;
				$t++;
			
				// Message should start with the most recent date.
				// There should be spans on top:0px and bottom:0px for previous_message and next_message.
				// Add a link to display a send_message form 
				// 	or
				// If $_POST['id'] display a send_message form and auto-fill cc with users email.
			}
		}else{$i++;}
	} if($top=0){$dropHeight=0;}else{$dropHeight=($height*$t+10);};

	/*
	
		instead of a select.option menu, I'm going to create a set of divs with classes and dynamic tops to act as a dynamic and fuller featured list.
		psuedo
		--------
			dropdown -- container div with a set position.
				customer -- will have dynamic top set to accumulative height.
					options   -- on mouse.select customer contents populate the fields/checkboxes for editing. This means that instead of an 'upload', db contents must be 'updated'.
						remove -- on mouse.hover an x button will pop up over the name to remove from list. List then gets regenerated
	
	*/
	
?>
