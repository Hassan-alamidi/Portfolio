
var scrollController = new ScrollMagic.Controller();


$(window).on('load',function(){
    //start up scripts
    resumeAnimations();
    setupSkillsAnimation();

    //wait 500ms to ensure all animations are properly set up before allowing script to call
    setTimeout(function(){
        var resume = new ScrollMagic.Scene({
            triggerElement: "#resume",
            offset:200
        })
        .addTo(scrollController)
        .on("enter", playResume)
        .addIndicators();

        var careerPlan = new ScrollMagic.Scene({
            triggerElement: "#lifeGoals",
            offset:200
        })
        .addTo(scrollController)
        .on("enter", playTimelineAnimation)
        .addIndicators();

        var skills = new ScrollMagic.Scene({
            triggerElement: "#skillSet",
            offset:100
        })
        .addTo(scrollController)
        .on("enter", playSkillsAnimation)
        .addIndicators();
    }, 500);
});




