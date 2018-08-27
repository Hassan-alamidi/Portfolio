//TODO make a set offset function and set all scene offsets in there
//that way on resize we can alter the offsets to better accomidate the new screen size
var scrollController = new ScrollMagic.Controller();
var multiplier = 0;
var navOverMain, navOverResume, navOverSkills, navOverProjects, navOverHobbies;
var positions;


$(window).resize(function() {
    //set and update trigger offsets when window height is altered
    //it may be best to update every 100 pixels in height
    setTriggerMultiplier();
    updateOffset();
    getTriggerPositions();
    setOffsetPoints(positions);
});

function setTriggerMultiplier(){

    if(window.innerHeight < 400){
        multiplier = 1;
    }else if(window.innerHeight < 600){
        multiplier = 2;
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
        navOverMain = new ScrollMagic.Scene({
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

        navOverResume = new ScrollMagic.Scene({
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

        navOverSkills = new ScrollMagic.Scene({
            triggerElement: "#skills",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

        //change nav color when projects section is under nav
        navOverProjects = new ScrollMagic.Scene({
            triggerElement:"#projects",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", lightNav)
        .on("leave", darkNav)
        .addIndicators();

        //change nav color when hobbies section is under nav
        navOverHobbies = new ScrollMagic.Scene({
            triggerElement:"#hobbies",
            offset:(100 * multiplier)
        })
        .addTo(scrollController)
        .on("enter", darkNav)
        .on("leave", lightNav)
        .addIndicators();

        getTriggerPositions();
        setOffsetPoints(positions);
    }, 500);
});

function updateOffset(){
    //update trigger offsets
    navOverMain.offset(100 * multiplier);
    navOverResume.offset(100 * multiplier);
    navOverProjects.offset(100 * multiplier);
    navOverSkills.offset(100 * multiplier);
    navOverHobbies.offset(100 * multiplier);
}

function getTriggerPositions(){
    //this gets the tigger positions that will be most used and the offset incase needed
    positions = {
        home: 0,
        main: navOverMain.triggerPosition(),
        resume: navOverResume.triggerPosition(),
        projects: navOverProjects.triggerPosition(),
        skills: navOverSkills.triggerPosition(),
        hobbies: navOverHobbies.triggerPosition(),
        sceneOffset: (100 * multiplier)
    };

    //the return is not really needed but I will leave in just incase its needed
    return positions;
}


