
        var $$ = function(id) {
           return document.getElementById(id);
        }
    
    /* --------- Menu drop-down for mobile ------------ */

        function dropMenu(id) { 
            
           var submenuSelected = $$(id);

           var menu = $$("main-header").getElementsByTagName("ul"); 
           
           if(submenuSelected.style.display != "block"){
                if (menu.className == "nav")
                    menu.style.display = "none";      
               
               submenuSelected.style.display = "block";
           }
           else{
               submenuSelected.style.display = "none";             
           }
        }     
