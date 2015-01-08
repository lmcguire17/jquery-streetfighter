$(document).ready(function() {

    //"X" Keydown/Key Up Function - Cool
    $('body').keydown(function(e) {
      if (e.keyCode == 88 ) {
        $('.ryu-action').hide();
        $('.ryu-cool').show();
      }
      })

      .keyup(function(e) {
        if (e.keyCode == 88 ) {
          $('.ryu-action').hide();
          $('.ryu-still').show();  
        }
    });

    //MouseEnter/MouseLeave - Ready
    $('.ryu').mouseenter(function() {
  		$('.ryu-action').hide();
      $('.ryu-ready').show();
      
  	})

  	.mouseleave(function() {
    	$('.ryu-action').hide();
      $('.ryu-still').show();
    	
})
    //MouseDown/Mouseup - Throwing
  	.mousedown(function() {
  		playHadouken();
  		$('.ryu-action').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  		.animate (
  			{'left': '300px'},
  			500, 
  			function () {
  				$(this).hide();
  				$(this).css('left','-180px');
  			}
  		);
  	})
  	.mouseup(function() {
  		$('.ryu-action').hide();
  		$('.ryu-ready').show();
  	});

    //Throwing Sound Effects
  	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

})