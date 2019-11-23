(function() {

    if($ === undefined) { console.error("jQuery not loaded."); }

    $(() => {
        $("#loading-mask").addClass("invisible");
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,

        onLeave: (origin, destination, direction) => {

            if(origin.index === 1 && direction === "down") {
                var bg = $("#bg-dartmouth");
                bg.removeClass("invisible");
            }
            if(origin.index === 1 && direction === "up") {
                var bg = $("#bg-dartmouth");
                bg.addClass("invisible");
            }

            if(origin.index === 4 && direction === "down") {
                var bg = $("#bg-deep-blue");
                bg.removeClass("invisible");
            }
            if(origin.index === 4 && direction === "up") {
                var bg = $("#bg-deep-blue");
                bg.addClass("invisible");
            }

            if(origin.index === 6 && direction === "down") {
                var bg = $("#bg-whu-ai");
                bg.removeClass("invisible");
            }
            if(origin.index === 6 && direction === "up") {
                var bg = $("#bg-whu-ai");
                bg.addClass("invisible");
            }
            console.log(typeof origin);
            console.log(origin);
            console.log(typeof destination);
            console.log(destination);
            console.log(typeof direction);
            console.log(direction);
        }
    });

    var controller = new ScrollMagic.Controller();
    var revealElements = document.getElementsByClassName("reveal");
	for (var i=0; i<revealElements.length; ++i) {
		new ScrollMagic.Scene({
			triggerElement: revealElements[i],
			offset: 80,
			triggerHook: 0.9,
        })
		.setClassToggle(revealElements[i], "visible")
        .addTo(controller);

	}

}());
