//TODO make a set offset function and set all scene offsets in there
//that way on resize we can alter the offsets to better accomidate the new screen size
var scrollController = new ScrollMagic.Controller();
var multiplier = 0;


$(window).resize(function() {
    setTriggerMultiplier();
});

function setTriggerMultiplier(){

    if(window.innerHeight < 400){
        multiplier = 1;
    }else if(window.innerHeight < 600){
        multiplier = 2.3;
    }else if(window.innerHeight < 800){
        multiplier = 3;
    }else{
        multiplier = 4;
    }

}

$(window).on('load',function(){
    //start up scripts
    resumeAnimations();
    setupSkillsAnimation();

    //check window height and adjust triggers accordingly
    setTriggerMultiplier();

    //wait 500ms to ensure all animations are properly set up before allowing script to call
    setTimeout(function(){

        //hide title when user scrolls down
        new ScrollMagic.Scene({
            offset:15
        })
        .addTo(scrollController)
        .on("enter", hideTitle)
        .on("leave", showTitle)
        .addIndicators();

        //change nav bar background colour
        new ScrollMagic.Scene({
            triggerElement:"#mainContent",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", transparentNav)
        .addIndicators();

        //play resume animation and change nav colour (these are done in seperate scenes inorder to better accomodate different screen sizes)
        new ScrollMagic.Scene({
            triggerElement: "#resume",
            offset:230
        })
        .addTo(scrollController)
        .on("enter", playResume)
        .addIndicators();

        new ScrollMagic.Scene({
            triggerElement: "#resume",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", lightNav)
        .on("leave", darkNav)
        .addIndicators();


        //play career plan svg animation
        new ScrollMagic.Scene({
            triggerElement: "#lifeGoals",
            offset:200
        })
        .addTo(scrollController)
        .on("enter", playTimelineAnimation)
        .addIndicators();

        //play skills animation and change nav colour
        new ScrollMagic.Scene({
            triggerElement: "#skillSet",
            offset:100
        })
        .addTo(scrollController)
        .on("enter", playSkillsAnimation)
        .addIndicators();

        new ScrollMagic.Scene({
            triggerElement: "#skills",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

        //change nav color when projects section is under nav
        new ScrollMagic.Scene({
            triggerElement:"#projects",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", lightNav)
        .on("leave", darkNav)
        .addIndicators();

        //change nav color when hobbies section is under nav
        new ScrollMagic.Scene({
            triggerElement:"#hobbies",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

    }, 500);
});




