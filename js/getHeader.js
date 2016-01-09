// this will format the hero image for the project pages.  will also format position of return link

// get the height and width of a background image:
var projectBackgroundHeight = 0;
var projectBackgroundWidth = 0;
var displayWidth = 0;
var leftSide = 0; // left point of the container

var homeLinkHeight = 0;

// http://stackoverflow.com/questions/5106243/how-do-i-get-background-image-size-in-jquery
var image_url = $('.projectBackground').css('background-image'),
	image;

console.log("in getHeadera the top.  got the image_url at: " + image_url);

getImageSize($("#quickSizer"), function(width, height) {
	//alert('size is: ' + width + 'x' + height);
	projectBackgroundHeight = height;
	jumboHeight = height;
	projectBackgroundWidth = width;
	parallax();
});


// Remove url() or in case of Chrome url("")
image_url = image_url.match(/^url\("?(.+?)"?\)$/);

if (image_url[1]) {
	image_url = image_url[1];
	image = new Image();

	// just in case it is not already loaded
	$(image).load(function() {
		//alert(image.width + 'x' + image.height);
		console.log("in getHeader.  height of projectBackground div is: " + $(".projectBackground").height());
		//projectBackgroundHeight = image.height;
		//projectBackgroundWidth = image.width;
		displayWidth = $(window).width();
		console.log("projectBackground is: " + projectBackgroundHeight);
		console.log("dims of the background image as: " + projectBackgroundHeight + " high by " + projectBackgroundWidth + " wide");
		console.log("displayWidth is: " + displayWidth);

		// new ratio should be...
		var newPercent = displayWidth / projectBackgroundWidth;
		//console.log("the percent as: " + newPercent);
		var newWidth = projectBackgroundWidth * newPercent;
		var newHeight = projectBackgroundHeight * newPercent;

		//var jumboHeight = $('.jumbotron').outerHeight();
		jumboHeight = projectBackgroundHeight;
		jumboHeight = Math.ceil(newHeight);
		//console.log("jumboHeight is: " + jumboHeight);

		// set the initial height of the projectBackground
		$('.projectBackground').height(jumboHeight);
		$('.jumbotron').height(jumboHeight);

		homeLinkHeight = $('.homeLink').height();
		//console.log("home link height as: " + homeLinkHeight);



		$(window).scroll(function(e) {
			parallax();
		});


		// run the first time through
		parallax();

	});
image.src = image_url;
}


function parallax() {
	var scrolled = $(window).scrollTop();
	var newHeight = jumboHeight - scrolled; // used to calculate the home link top
	//console.log(newHeight);
	leftSide = $('.projectTitle').offset().left;

	var newTop = -scrolled * .85; // controls the speed that it goes up


	if (newTop < (-scrolled)) newTop = -scrolled;
	$('.projectBackground').css('top', newTop + 'px');

	var homeLinkTop = 10;
	if (newHeight < homeLinkTop + homeLinkHeight) {
		homeLinkTop = newHeight - 0 * homeLinkTop - homeLinkHeight;
	}
	$('.homeLink').css({
		top: homeLinkTop + 'px',
		left: leftSide + 'px'
	});
}



// from http://stackoverflow.com/questions/23390393/get-image-height-before-its-fully-loaded
function getImageSize(img, callback) {
	img = $(img);

	var wait = setInterval(function() {
		var w = img.width(),
			h = img.height();

		if (w && h) {
			done(w, h);
		}
	}, 0);

	var onLoad;
	img.on('load', onLoad = function() {
		done(img.width(), img.height());
	});


	var isDone = false;

	function done() {
		if (isDone) {
			return;
		}
		isDone = true;

		clearInterval(wait);
		img.off('load', onLoad);

		callback.apply(this, arguments);
	}
}