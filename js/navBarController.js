
var $navBar;
const titleVisibility = new TimelineMax({paused:true});

$(document).ready(()=>{

	$navBar = $('nav');
	$("#navButton").on("click", () => {
    	$navBar.slideToggle();
  	});

  	$(window).resize(function() {
		  //if window with is above 771px then show the full nav bar else hide it
  		if (window.innerWidth > 770) {
			$navBar.show();
  		}else{
			$navBar.hide();
		  }
	});

	//while just setting the animation without a const would have worked I wanted to ensure that calling show or hide title had no effect after the first call
	//so the title is now only toggle 
	titleVisibility.to($('#navbar'),1,{top:-56});
	
});

function hideTitle(){
	titleVisibility.play();
}

function showTitle(){
	titleVisibility.reverse();
}

function darkNav(){
	TweenMax.to($('#navbar'), 1.2 , {background:"rgba(88, 89, 87, 1)"});
	TweenMax.to($('.hamburger'), 1.2 , {"background-color":"rgba(255, 255, 255, 1)"});
	TweenMax.to($('nav ul li a'), 1.2 , { color:"rgba(255, 255, 255, 1)"});
}

function lightNav(){
	TweenMax.to($('#navbar'), 1.2 , {background:"rgba(243, 243, 242, 1)"});
	TweenMax.to($('.hamburger'), 1.2 , {"background-color":"rgba(0, 0,0, 1)"});
	TweenMax.to($('nav ul li a'), 1.2 , { color:"rgba(0, 0,0, 1)"});
}

function transparentNav(){
	TweenMax.to($('#navbar'), 1.2 , {background:"rgba(0, 0, 0, 0)"});
	TweenMax.to($('.hamburger'), 1.2 , {"backgroun-color":"rgba(255, 255, 255, 1)"});
	TweenMax.to($('nav ul li a'), 1.2 , { color:"rgba(255, 255, 255, 1)"});
}