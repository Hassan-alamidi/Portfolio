var skillsContainer;
const skillAnimTimeline = new TimelineMax({paused:true});

function setupSkillsAnimation(){
    //get elements
    skillsContainer = document.getElementsByClassName('progress-background');
    //get elements ready for animation
    shrinkElements(skillsContainer);

    [].forEach.call(skillsContainer, function(skillCont){
        removeClass(skillCont.getElementsByClassName('progress-bar'));
    });

    //create animation
    generateTimeline(skillsContainer);
}

function playSkillsAnimation(){
    skillAnimTimeline.play();
}

function addClass(element){
        skillAnimTimeline.set(element, {className:'+=animate-bar'});
}

function generateTimeline(elements){
    [].forEach.call(elements, function(element){
        skillAnimTimeline.to(element,0.4, {scale:1, transformOrigin:"center", ease:Back.easeOut.config(3)});

        [].forEach.call(element.getElementsByClassName('progress-bar'), function(progressBar){
            addClass(progressBar);
        });

    });
}

function removeClass(elements){
    [].forEach.call(elements, function(element){
        $(element).removeClass('animate-bar');
    });

}

function shrinkElements(elements){
    [].forEach.call(elements, function(element){
        TweenMax.set(element, {scale:0, transformOrigin:"center",display:"block"});           
    });
}