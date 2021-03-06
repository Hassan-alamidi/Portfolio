html {
  font-size: 16px; }

body {
  margin: 0 auto; }

#navbar {
  position: absolute;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; }

nav {
  display: block;
  align-self: center;
  width: 95%;
  max-width: 1500px;
  padding-left: 15px;
  padding-right: 15px; }

#title {
  color: beige;
  display: flex;
  align-self: center;
  list-style-type: none; }

nav ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style-type: none; }

nav ul li {
  text-align: center;
  flex: 1 1 0;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px; }

#navbar ul li a {
  text-decoration: none;
  color: beige;
  font-weight: bold;
  font-size: 1.2em; }

#topNav {
  display: flex;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px; }

#navButton {
  align-self: center;
  display: none; }

.hamburger {
  width: 35px;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: black;
  margin: 5px 0; }

#header {
  position: relative;
  background-image: url("../images/pcb.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 600px;
  box-shadow: 2px 5px 15px 4px #00000059; }

#headContainer {
  background-color: #71757152;
  width: 100%;
  height: 100%; }

#mainContent {
  padding-top: 200px;
  color: #585957;
  width: 100%;
  background-color: #f3f3f2;
  display: flex;
  flex-direction: column; }

#mainContent h3 {
  font-size: 2em;
  text-align: center; }

#aboutme, #resume {
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap; }

#resume {
  overflow: hidden;
  background-color: #585957;
  color: #d8d8d8;
  text-shadow: 1px 1px black; }

.information {
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 40px;
  padding-bottom: 20px;
  flex: 1; }

#tidbitsAboutMe {
  font-size: 1.3em;
  font-weight: bold;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px; }
  #tidbitsAboutMe div {
    flex: 1;
    text-align: center;
    min-width: 230px;
    padding: 40px 0 40px 0; }

.infoContainer {
  display: flex; }

.description {
  padding-top: 12px;
  padding-left: 30px;
  padding-right: 5px;
  padding-bottom: 30px;
  flex: 3; }

.dateContainer {
  display: flex;
  min-width: 117px;
  position: relative;
  top: 29px;
  flex: 1; }

.date {
  min-width: 88%;
  max-width: 88%;
  min-height: 70px;
  max-height: 135px;
  display: table;
  background: #d93b39;
  padding: 5px;
  flex: 1; }
  .date h1 {
    font-size: 1rem;
    text-align: center; }

.itemHighlightIcon {
  min-width: 30px;
  padding-left: 15px;
  align-items: center;
  display: flex;
  flex-direction: column; }

.topLine {
  /* flex: 1; */
  height: 33px; }

.bottomLine {
  flex: 5; }

.circleIcon {
  background: #575957;
  min-height: 24px;
  max-height: 24px;
  min-width: 24px;
  max-width: 24px;
  /* position: relative; */
  /* top: 30px; */
  /* left: -13px; */
  border-radius: 50%;
  border-color: #cccccc;
  border-style: solid;
  flex: 1; }

.verticalLine {
  background: #cccccc;
  /* min-height: 100%; */
  /* max-height: 100%; */
  min-width: 3px;
  max-width: 3px;
  /* margin-left: 20px; */
  overflow: visible; }

.horizontalLine {
  background: #cccccc;
  /* min-height: 100%; */
  /* max-height: 100%; */
  min-height: 3px;
  max-height: 3px;
  /* margin-left: 20px; */
  overflow: visible; }

.arrow-right {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid #d93b39;
  margin-top: 10px; }

#profileIntro, #education {
  padding-right: 25px; }

#skillSet {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; }

#experience {
  padding-left: 25px; }

#skills, #hobbies {
  background-color: #f3f3f2;
  padding-bottom: 150px; }
  #skills div, #hobbies div {
    flex-direction: column;
    border-radius: 50%; }
    #skills div p1, #hobbies div p1 {
      padding-top: 10px; }
  #skills ul, #hobbies ul {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    display: flex;
    margin: 0;
    padding: 5px;
    list-style-type: none; }
    #skills ul li, #hobbies ul li {
      flex-basis: 100%;
      max-width: 1000px; }
      #skills ul li ul > li, #hobbies ul li ul > li {
        padding: 15px 15px 0px 15px;
        text-align: center;
        flex: 1;
        color: #d8d8d8;
        min-height: 170px;
        max-height: 170px;
        min-width: 170px;
        max-width: 170px;
        padding-top: 15px;
        padding-left: 15px; }

#profilePic {
  margin: 0 auto;
  position: relative;
  top: 450px;
  width: 300px;
  height: 300px;
  display: flex;
  border-radius: 100%;
  box-shadow: 0px 9px 15px 4px #00000059;
  border: 5px solid #f3f3f2; }

#projects {
  background-color: #575857;
  min-height: 600px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 60px;
  padding-bottom: 60px; }
  #projects h2 {
    color: #d8d8d8;
    margin: 0;
    padding-top: 15px;
    padding-bottom: 25px;
    text-align: center;
    font-size: 4rem; }
  #projects ul {
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    margin: 0;
    padding: 5px;
    list-style-type: none; }
    #projects ul li {
      text-align: center;
      flex: 1;
      color: aliceblue;
      background: crimson;
      margin: 10px;
      min-width: 250px;
      max-width: 600px;
      min-height: 300px;
      max-height: 600px; }

#hobbies div {
  width: 100%;
  height: 100%;
  display: flex;
  background: #575957; }
  #hobbies div p1 {
    padding-top: 10px; }

.hobbyIcons {
  margin-top: 15px;
  height: 70px; }

#lifeGoals {
  background: #585957;
  color: #d8d8d8;
  text-shadow: 1px 1px black;
  padding-bottom: 100px; }

.lifeEvents {
  stroke-dasharray: 100; }

p1 {
  font-size: 1.3em;
  font-weight: bold; }

.progress-background {
  margin-top: 15px;
  color: white;
  min-height: 150px;
  max-height: 150px;
  min-width: 150px;
  max-width: 150px;
  padding: 10px;
  border-radius: 50%;
  background: #585957;
  flex: 1; }

.progress {
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative; }
  .progress:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 7px solid #a9a9a9;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box; }
  .progress > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1; }
  .progress .progress-left {
    left: 0; }
  .progress .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: 7px;
    border-style: solid;
    position: absolute;
    top: 0;
    border-color: #ffb43e;
    box-sizing: border-box; }
  .progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 75px;
    border-bottom-right-radius: 75px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left; }
  .progress .progress-right {
    right: 0; }
    .progress .progress-right .progress-bar {
      left: -100%;
      border-top-left-radius: 75px;
      border-bottom-left-radius: 75px;
      border-right: 0;
      -webkit-transform-origin: center right;
      transform-origin: center right; }
  .progress .progress-value {
    background: radial-gradient(#a5a2a2, #797b79, #575957 60%);
    background: -webkit-radial-gradient(#a5a2a2, #797b79, #575957 60%);
    background: -moz-radial-gradient(#a5a2a2, #797b79, #575957 60%);
    background: -o-radial-gradient(#a5a2a2, #797b79, #575957 60%);
    display: flex;
    border-radius: 50%;
    font-size: 36px;
    text-align: center;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 300; }
    .progress .progress-value div {
      margin-top: 10px; }
    .progress .progress-value span {
      font-size: 12px;
      text-transform: uppercase; }

/* This for look creates the 	necessary css animation names 
Due to the split circle of progress-left and progress right, we must use the animations on each side. 
*/
.progress[data-percentage="10"] .progress-right .animate-bar {
  animation: loading-1 1.5s linear forwards; }
.progress[data-percentage="10"] .progress-left .animate-bar {
  animation: 0; }

.progress[data-percentage="20"] .progress-right .animate-bar {
  animation: loading-2 1.5s linear forwards; }
.progress[data-percentage="20"] .progress-left .animate-bar {
  animation: 0; }

.progress[data-percentage="30"] .progress-right .animate-bar {
  animation: loading-3 1.5s linear forwards; }
.progress[data-percentage="30"] .progress-left .animate-bar {
  animation: 0; }

.progress[data-percentage="40"] .progress-right .animate-bar {
  animation: loading-4 1.5s linear forwards; }
.progress[data-percentage="40"] .progress-left .animate-bar {
  animation: 0; }

.progress[data-percentage="50"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="50"] .progress-left .animate-bar {
  animation: 0; }

.progress[data-percentage="60"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="60"] .progress-left .animate-bar {
  animation: loading-1 1.5s linear forwards 1.5s; }

.progress[data-percentage="70"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="70"] .progress-left .animate-bar {
  animation: loading-2 1.5s linear forwards 1.5s; }

.progress[data-percentage="80"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="80"] .progress-left .animate-bar {
  animation: loading-3 1.5s linear forwards 1.5s; }

.progress[data-percentage="90"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="90"] .progress-left .animate-bar {
  animation: loading-4 1.5s linear forwards 1.5s; }

.progress[data-percentage="100"] .progress-right .animate-bar {
  animation: loading-5 1.5s linear forwards; }
.progress[data-percentage="100"] .progress-left .animate-bar {
  animation: loading-5 1.5s linear forwards 1.5s; }

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(36);
    transform: rotate(36deg); } }
@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(72);
    transform: rotate(72deg); } }
@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(108);
    transform: rotate(108deg); } }
@keyframes loading-4 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(144);
    transform: rotate(144deg); } }
@keyframes loading-5 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(180);
    transform: rotate(180deg); } }
@media only screen and (max-width: 770px) {
  #navbar ul {
    flex-direction: column;
    align-items: center; }

  #navButton {
    display: block; }

  #topNav {
    justify-content: space-between; }

  nav {
    display: none;
    width: 90%; } }
@media only screen and (min-width: 771px) {
  nav {
    display: block; } }
@media only screen and (max-width: 771px) {
  #resume {
    font-size: 10px;
    flex-direction: column; }

  .date h1 {
    font-size: 0.7rem; } }
@media only screen and (max-width: 500px) {
  .information {
    min-width: unset; }

  #education, #experience {
    padding-right: 10px;
    padding-left: 10px; }
    #education .dateContainer, #experience .dateContainer {
      min-width: 70px; }
    #education .description, #experience .description {
      padding-right: 0px;
      padding-left: 10px; }

  #projects ul li {
    min-width: 250px; } }

/*# sourceMappingURL=style.cs.map */
