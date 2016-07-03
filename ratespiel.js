randomNumber = Math.floor(Math.random() * 100 + 1);


function initialise()
{
	rounds = 7;
	$("#roundCount").text(rounds);
	$("#result").empty();
	won = false;
	//randomNumber = Math.floor(Math.random() * 100 + 1);
	$("#checkglyph").attr("class", "glyphicon glyphicon-play-circle");
	$("#check").attr("class", "btn btn-success");
};

initialise();


$("#start").on("click", initialise);


function game(){
	let input = $("#user-input").val();
	$("#user-input").val('');
	if(rounds && input && !won && Boolean(String(input).match('^[1-9][0-9]{0,2}$')) && input <= 100 )
	{
	--rounds;
	$("#roundCount").text(rounds);
		switch(Math.sign(randomNumber-input)){
			case 0:
				//korrekt
				//Listeneintrag einfuegen
				$("#result").append(
						'<li class="list-group-item list-group-item-success">\
						<span class="badge">'+
						input +
						'</span> Die Zahl ist Korrekt\
						</li>');

				//Button Anpassen
				$("#checkglyph").attr("class", "glyphicon glyphicon-ok");
				$("#check").attr("class", "btn btn-success");
				won = true;
				break;
			case -1:
				//to high
				//Listeneintrag einfuegen
				$("#result").append(
						'<li class="list-group-item list-group-item-danger">\
							<span class="badge">'+
						       	input +
							'</span>Die Zahl ist zu hoch\
						</li>');

				//Button Anpassen
				$("#checkglyph").attr("class", "glyphicon glyphicon-remove");
				$("#check").attr("class", "btn btn-danger");
				break;
			case 1:
				//to low
				//Listeneintrag einfuegen
				$("#result").append(
						'<li class="list-group-item list-group-item-info"> \
							<span class="badge">'+
							input +
							'</span> Die Zahl ist zu niedrig \
						</li>');
				//Button Anpassen
				$("#checkglyph").attr("class", "glyphicon glyphicon-remove");
				$("#check").attr("class", "btn btn-danger");
				break;
		}
	if(!rounds && !won){
		$("#result").append("<li class=\"list-group-item list-group-item-warning\">Leider verloren</li>");
	}
	}
}


$("#check").on("click", game);

$(document).on("keypress", function(key) {
	if(key.which == 13){
		game();
	}
});
