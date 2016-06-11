
	/* --------- Canvas ------------- */


	function draw() {
		var canvas = $$("canvas-logo");
		if(canvas.getContext) {
			var ctx = canvas.getContext("2d");

			ctx.font = "36px Arial";
			ctx.fillText("Músicas & Filmes", 2, 80);
		}
	}
    

	window.onload = function() {
		$$("canvas-logo").addEventListener("load", draw());
	}

    
    