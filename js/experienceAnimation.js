
const resumeTimeline = new TimelineMax({paused:true});
var eduDate, eduDescription, eduSelector, eduTitle;
var expDate, expDescription, expSelector, expTitle;

function resumeAnimations(){
        setupAnimaton();
        setupTimeline();
}

function playResume(){
        resumeTimeline.play();
        
}

//this function will be used to hide and store elements used in animations
function setupAnimaton(){
        //get the ancestors of needed items
        var education = document.getElementById('education');
        var experience = document.getElementById('experience');
        //get needed items from ancestors
        //title will be the first elements to enter the screen space
        eduTitle = education.getElementsByTagName("h1");
        expTitle = experience.getElementsByTagName("h1");
        //date containers will be the last elements to move onto screen with a small wobble
        eduDate = education.getElementsByClassName('dateContainer');
        expDate = experience.getElementsByClassName('dateContainer');
        //both selector and description will slide onto screen at the same time with no special animation
        eduSelector = education.getElementsByClassName('itemHighlightIcon');
        expSelector = experience.getElementsByClassName('itemHighlightIcon');

        eduDescription = education.getElementsByClassName('description');
        expDescription = experience.getElementsByClassName('description');

        //hide all elements off screen
        hideElements(eduTitle, "left");
        hideElements(expTitle, "right");
        hideElements(eduDate, "left");
        hideElements(expDate, "right");
        hideElements(eduSelector, "left");
        hideElements(expSelector, "right");
        hideElements(eduDescription, "left");
        hideElements(expDescription, "right");
        //make sure the date appears above the description before we slide them in
        TweenMax.set(eduDate, {zIndex:1});
        TweenMax.set(expDate, {zIndex:1});


}

function hideElements(objArr, direction){
        [].forEach.call(objArr, function(obj){
                if(direction === "left"){
                        TweenMax.set(obj, {position:"relative", left:"-130%" });
                }else if(direction === "right"){
                        TweenMax.set(obj, {position:"relative", left:"130%"});
                }else{
                        Log.w("experienceAnimation.js, hideElements: direction not setup");
                }
        });

}

function setupTimeline(){
        //slide Title into view
        slideInAndWobble(eduTitle, "Title");
        slideInAndWobble(expTitle, "Title");
        //slide description into view
        slideIn(eduDescription, "Description");
        slideIn(expDescription, "Description");
        //slide highlight Icon in with description
        slideIn(eduSelector, "Description");
        slideIn(expSelector, "Description");
        //slide date into view
        slideInAndWobble(eduDate, "Date");
        slideInAndWobble(expDate, "Date");
        
}

function slideInAndWobble(objArr, lable){
        var datePos = 0;
        [].forEach.call(objArr, function(obj){
                if(typeof obj !== undefined && typeof obj !== "undefined"){
                        if(lable === "Date"){
                                //each date is to appear one by one but in sync with left and right
                                //TODO less delay for first two dates
                                if(datePos === 0){
                                        resumeTimeline.to(obj, 1.2, {left:"0%", ease:Elastic.easeOut.config(0.5, 0.4)}, lable + datePos + "-=0.2");
                                }else{
                                        resumeTimeline.to(obj, 1.2, {left:"0%", ease:Elastic.easeOut.config(0.5, 0.4)}, lable + datePos + "-=1");
                                }
                                ++datePos;
                        }else{
                                resumeTimeline.to(obj, 0.8, {left:"0%", ease:Back.easeOut.config(1)}, lable + datePos); 
                        }
                }
        });
}

function slideIn(objArr, lable){
        [].forEach.call(objArr, function(obj){
                resumeTimeline.to(obj, 1, {left:"0%", ease:Back.easeOut.config(1)}, lable);
        });
}