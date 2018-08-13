
var scrollController = new ScrollMagic.Controller();


$(window).on('load',function(){
    //start up scripts
    resumeAnimations();
    setupSkillsAnimation();

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
            offset:200
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", transparentNav)
        .addIndicators();

        //play resume animation and change nav colour
        new ScrollMagic.Scene({
            triggerElement: "#resume",
            offset:230
        })
        .addTo(scrollController)
        .on("enter", playResume)
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
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

        //change nav color when projects section is under nav
        new ScrollMagic.Scene({
            triggerElement:"#projects",
            offset:230
        })
        .addTo(scrollController)
        .on("enter", lightNav)
        .on("leave", darkNav)
        .addIndicators();

        //change nav color when hobbies section is under nav
        new ScrollMagic.Scene({
            triggerElement:"#hobbies",
            offset:230
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

    }, 500);
});




