// this will format the hero image for the project pages.  will also format position of return link

// get the height and width of a background image:
var projectBackgroundHeight = 0;
var projectBackgroundWidth = 0;
var displayWidth = 0;
var leftSide = 0; // left point of the container

var homeLinkHeight = 0;

// fade out home link to begin with...
		$(".homeLink").fadeOut(0, function(){
			//console.log("fading in");
		});

// http://stackoverflow.com/questions/5106243/how-do-i-get-background-image-size-in-jquery



var image_url = $('.projectBackground').css('background-image'),
image;
image_url = image_url.match(/^url\("?(.+?)"?\)$/);



if (image_url[1]) {
	image_url = image_url[1];
	image = new Image();

	// just in case it is not already loaded
	$(image).load(function() {
		//alert(image.width + 'x' + image.height);
		//console.log("in getHeader.  height of projectBackground div is: " + $(".projectBackground").height());
		projectBackgroundHeight = image.height;
		projectBackgroundWidth = image.width;
		displayWidth = $(window).width();
		//console.log("projectBackground is: " + projectBackgroundHeight);
		//console.log("dims of the background image as: " + projectBackgroundHeight + " high by " + projectBackgroundWidth + " wide");
		//console.log("displayWidth is: " + displayWidth);

		// new ratio should be...
		var newPercent = displayWidth / projectBackgroundWidth;
		//console.log("the percent as: " + newPercent);
		var newWidth = projectBackgroundWidth * newPercent;
		var newHeight = projectBackgroundHeight * newPercent;

		jumboHeight = projectBackgroundHeight;
		jumboHeight = Math.ceil(newHeight);
		//console.log("jumboHeight is: " + jumboHeight);

		// set the initial height of the projectBackground
		$('.projectBackground').height(jumboHeight);
		$('.jumbotron').height(jumboHeight);

		homeLinkHeight = $('.homeLink').height();
		//console.log("home link height as: " + homeLinkHeight);


		function parallax() {
			var scrolled = $(window).scrollTop();
			var newHeight = jumboHeight - scrolled; // used to calculate the home link top
			//console.log(newHeight);
			if ($('.projectTitle').offset() != undefined) leftSide = $('.projectTitle').offset().left;

			var newTop = -scrolled * .75; // controls the speed that it goes up


			if (newTop < (-scrolled)) newTop = -scrolled;
			$('.projectBackground').css('top', newTop + 'px');

			var homeLinkTop = 10;
			if (newHeight < 2 * homeLinkTop + homeLinkHeight) {
				homeLinkTop = newHeight - 1 * homeLinkTop - homeLinkHeight;
			}
			$('.homeLink').css({
				top: homeLinkTop + 'px',
				left: leftSide + 'px'
			});
		}

		$(window).scroll(function(e) {
			parallax();
		});

		// run the first time through
		parallax();

		// fade out the placeholder image
		$(".placeholderHeroImage").fadeOut(1000, function() {
			//
		});
		// fade in the homeLink
		$(".homeLink").fadeIn(1200, function(){
			//console.log("fading in");
		});
	});
image.src = image_url;
}