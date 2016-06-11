	

    /* --------- Main slider ------------ */

		imgArray = new Array();
        for(i = 0; i < 3; i++){
            imgArray[i] = 'assets/images/slide' + (i+1) + '.png';
            var img = new Image();
            img.src = imgArray[i];            
        }
                
        var index = 0;
        var interval;
        function changeSlider(){
            if(index >= 3){
                index = 0;
            }

            window.clearInterval(interval);

            $(".fade").hide().fadeIn(800);
            document.images[0].src = imgArray[index];
            index++;

            interval = window.setInterval("changeSlider()", 4000);

        }


 	
		$(function(){
			changeSlider();
		});
