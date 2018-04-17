$(document).ready(()=>{
	$("#navButton").on("click", () => {
    	$('nav').slideToggle();

  	});

  	$(window).resize(function() {
  		if ($(window).width() > 771) {
     		$('nav').show();
  		}
	});

	$(window).scroll(function(){

	});
});