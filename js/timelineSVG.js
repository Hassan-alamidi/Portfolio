var ajax = new XMLHttpRequest();
ajax.open('GET', "images/careerTimelinetest3.svg", false);

const milestoneIcons = new Array();
const careerPath = new Array();
const timeline = new Array();
const milestoneDescription = new Array();
const t1 = new TimelineMax({paused:true, ease:Linear.easeNone});
const t2 = new TimelineMax({paused:true,ease:Linear.easeNone, paused:true, onComplete:finalAnimation});
const t3 = new TimelineMax({paused:true, ease:Linear.easeNone});
const ending = new TimelineMax({paused:true});
var isHoveredOver = false;

ajax.onload = function(e){
	var div = document.createElement('object');
	//div.setAttribute('data', "images/careerTimelinetest3.svg");
	//div.setAttribute('type', "image/svg+xml");
	div.style.width = "100%";
	div.addEventListener("load", timeLineAnimation());
	//dont forget to remove the svg width and height params
	var reference = document.getElementById('lifeGoals');
	div.innerHTML = ajax.responseText;
	//child node 4 should be null therefore the svg will be placed last
	reference.insertBefore(div,reference.childNodes[4]);
}

function playTimelineAnimation(){
	t1.play();
	t2.play();
	t3.play();
}

function finalAnimation(){
	ending.play();
}

function timeLineAnimation(){
	//setTimeout to ensure object has been fully loaded
	//may need to mess around with timings when live but I think 100ms (I think less would work too) coupled with onload event should do the job
	setTimeout(function(){
		//do any setup that maybe required before animations begin
		//get, setup and store all svg elements
		manageSvgElements();
		//setup the timeline animations
		setupAnimTL();
		setupHoverAnim();
	
	},100);
}

function manageSvgElements(){

	//get all needed elements and store in array
	var circles = document.getElementsByClassName('milestoneIcons');
	var descriptions = document.getElementsByClassName('milestoneHeadings');
	var lines = document.getElementsByClassName('careerPath');
	var numbers = document.getElementsByClassName('number');
	numbers = Array.from(numbers);
	numbers.unshift(document.getElementById("timeline"));
	numbers.unshift(document.getElementById("originalPlantxt"));
	numbers.unshift(document.getElementById("currentProgressTxt"));
	numbers.unshift(document.getElementById("yearTxt"));
	//setup all objects individually
	setupAndStoreObj(descriptions, "milestoneDescription");
	setupAndStoreObj(circles, "milestoneIcon");
	setupAndStoreObj(lines, "path");
	setupAndStoreObj(numbers,"timeline");

}

function setupAnimTL(){

	var milestoneIcon = null;
	var milestoneDesc = null;
	var path = null;
	var time = null;
	var pathSpeed = 0;
	var maxlen = Math.max(milestoneIcons.length, milestoneDescription.length, careerPath.length, timeline.length);
	var pastCirc4 = false;
	var secondIndex = 0;

	for(var i = 0; i < maxlen; i++){
		if(pastCirc4){
			secondIndex = i + 1;
		}else{
			secondIndex = i;
		}
		//get the first elements of each array
		milestoneIcon = milestoneIcons[secondIndex];
		milestoneDesc = milestoneDescription[secondIndex];
		path = careerPath[i];
		time = timeline[i];
		
		

		//setup animation for circles
		if(typeof milestoneIcon !== undefined && typeof milestoneIcon !== 'undefined'){
			if(milestoneIcon.key === "OPCircle1"){
				//if id is OPCircle1 then add to timeline without offsetting position
				t1.to(milestoneIcon.physicalObject, 0.6,{strokeDashoffset:0});
			}else if(milestoneIcon.key === "CPCircle4"){
				//if id is CPCircle4 then add to timeline without offsetting position
				t2.to(milestoneIcon.physicalObject, 0.6,{strokeDashoffset:0,ease:Linear.easeNone});
			}else{
			
				//if id is unspecified and timelineNo is equal to 1 then add to t1 with offset else add to t2 with offset
      			milestoneIcon.timelineNo === 1 ? t1.to(milestoneIcon.physicalObject, 0.6,{strokeDashoffset:0, ease:Linear.easeNone},"-=0.5") : t2.to(milestoneIcon.physicalObject, 0.6,{strokeDashoffset:0,ease:Linear.easeNone},"-=0.5");
			
				//the if for OPCircle is here inorder to get another life event from the array
				if(milestoneIcon.key === "OPCircle4"){
					pastCirc4 = true;
					//if id is OPCircle4 then take another from the array, add to second timeline but do not add offset
					milestoneIcon = milestoneIcons[i+1];
					t1.to(milestoneDesc.physicalObject, 0.8,{scale:1, transformOrigin:"center", ease: Back.easeOut.config(2)});
					t2.to(milestoneIcon.physicalObject, 0.6,{strokeDashoffset:0});
					ending.to(milestoneDesc.physicalObject, 0.8, {scale:0, transformOrigin:"center", ease:Back.easeIn.config(3)},"+5");
					milestoneDesc = milestoneDescription[i + 1];
					

				}
			}
		}

		if(typeof milestoneDesc !== undefined && typeof milestoneDesc !== 'undefined'){
			milestoneDesc.timelineNo === 1 ? t1.to(milestoneDesc.physicalObject, 0.8,{scale:1, transformOrigin:"center",ease: Back.easeOut.config(2)}) : t2.to(milestoneDesc.physicalObject, 0.8,{scale:1, transformOrigin:"center", ease: Back.easeOut.config(2)});
			ending.to(milestoneDesc.physicalObject, 0.8, {scale:0, transformOrigin:"center", ease:Back.easeIn.config(3)},"+5");
		}
		//setup animation for lines connecting to the circles
		if(typeof path !== undefined && typeof path !== 'undefined'){
			//if id is unspecified and timelineNo is equal to 1 then add to t1 else add to t2
			pathSpeed = path.length * 0.0068;
      		path.timelineNo === 1 ? t1.to(path.physicalObject, pathSpeed,{strokeDashoffset:0,ease:Linear.easeNone}, "-=0.8") : t2.to(path.physicalObject, pathSpeed,{strokeDashoffset:0, ease:Linear.easeNone}, "-=0.8");
		}

		if(typeof time !== undefined && typeof time !== 'undefined'){
			if(time.key === "timeline"){
				t3.to(time.physicalObject, 1.2, {opacity:1, ease:Linear.easeNone});
			}else if(time.key === "originalPlantxt" || time.key === "currentProgressTxt" || time.key === "yearTxt"){
				t3.to(time.physicalObject, 1.2, {opacity:1, ease:Linear.easeNone}, 1);
			}else{

				t3.to(time.physicalObject, 1.2, {opacity:1, ease:Linear.easeNone}, "-=1");
			}
		}

	}

}

function setupHoverAnim(){
	//TODO fix scaling issue
	for(var i = 0; i < milestoneIcons.length; i++){
		
		var icon = milestoneIcons[i].physicalObject;
		var desc = milestoneDescription[i].physicalObject;

		icon.addEventListener("mouseover",function(desc){
			displayDescription(desc);
		}.bind(null,desc));

		desc.addEventListener("mouseleave", function(desc){
			hideDescription(desc);
		}.bind(null,desc));
		
	}
}

function displayDescription(obj){
	if(!t1.isActive() && !t2.isActive() && !t3.isActive() && !ending.isActive()){
	
		TweenMax.to(obj, 0.8,{scale:1.2, transformOrigin:"center", ease: Back.easeOut.config(2)});
	}
}

function hideDescription(obj){
	if(!t1.isActive() && !t2.isActive() && !t3.isActive() && !ending.isActive()){

		TweenMax.to(obj, 0.8, {scale:0, transformOrigin:"center", ease: Back.easeIn.config(3)});
	}
}

function setupAndStoreObj(objArr, type){
	let segregation = "";
	var objLength = 0;
	var objDetails = {};

	//loop through the array to configure and store the object
	[].forEach.call(objArr, function(obj){
		//get path length
		if(type !== "milestoneDescription" && type !== "timeline"){
			objLength = Math.round(obj.getTotalLength());
		}
		setupElements(obj, objLength, type);
		
		segregation = obj.id.substring(0,2);
		
		switch(segregation){
			case "OP":
			//create object based on objects details with the key value being the objects id
				objDetails = {
					key:obj.id,
					length:objLength,
					timelineNo:1,
					physicalObject:obj
					
				};
				break;
			case "CP":
				objDetails = {
					key:obj.id,
					length:objLength,
					physicalObject:obj,
					timelineNo:2
				};
				break;
			case "ti":
			case "no":
			case "or":
			case "cu":
			case "ye":
				objDetails = {
					key:obj.id,
					length:objLength,
					physicalObject:obj,
					timelineNo:3
				};
				break;
			
			default:
				console.log("could not segregate path into seperate timeline please ensure the string is setup")

		}
		
		
		//store in array
		//next find a nice way to figure out which array it must be stored in
		if(type === "milestoneIcon"){
			milestoneIcons.push(objDetails);
		}else if(type === "path"){
			careerPath.push(objDetails);
		}else if(type === "milestoneDescription"){
			milestoneDescription.push(objDetails);
		}else{
			timeline.push(objDetails);
		}
	});
}

function setupElements(obj, objLength, type){
		//we get javascript to hide the elements instead of css 
		//so that we can insure javascript is enabled/funcioning correctly
		//before attemting to animate
		//obj.style.strokeDasharray = objLength;
		//obj.style.strokeDashoffset = objLength;
		if(type === "timeline"){
			TweenMax.set(obj, {opacity:0});
		}else if(type === "milestoneDescription"){
			TweenMax.set(obj, {scale:0, transformOrigin:"center",display:"block"});
		}else{
			TweenMax.set(obj, {strokeDasharray:objLength + 1});
			TweenMax.set(obj, {strokeDashoffset:objLength + 1});
		}

}

function findByKey(arr,keyValue){
	//due to the fact javascript has not got a hashmap or anything similar we must search for the object manually
	//could use .find but I am hoping to make this website as backwards compatable as possible.
	[].forEach.call(arr, function(obj){
		if(obj.key === keyValue){
			return obj;
		}
	});
	return null;
}

ajax.send();