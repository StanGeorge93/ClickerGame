var project = {};
var dmg = 1 ;


project.hpCalculator = function() {
	var hp = parseInt($('.max-hp').text());
	var currentHp = hp;
	var monster = 1 ;
	$('.click-area').on('click', function() {
		currentHp = currentHp - dmg;
		$('.current-hp').text(currentHp);
		if(currentHp <= 0 ) {
			hp = hp + parseInt(hp/5);
			console.log('monster dieded!');
			currentHp = hp;
			if(monster <= 10)
			{
				monster++;
			} else {
				monster = 1;
			}
			console.log(monster);
			$('.click-area').css('background-image','url(' + "img/monster" + monster + ".png" + ')');

			$('.current-hp').text(currentHp);
			$('.max-hp').text(hp);
		}
	});
};

project.dmgCalculator = function() {
	dmg = 15;
	$('.add-dmg').on('click', function() {
		dmg = dmg + parseInt(dmg/15);
		console.log(dmg);
	});
}


$(document).ready(function () {
	project.dmgCalculator();
	project.hpCalculator();
});

