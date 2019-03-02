var btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click",  toggleMenu);

function toggleMenu(e){

    var divOverlaay = document.getElementsByClassName("overly")[0];
    var speed = 10;
    var eventTarget = e.target;

    if (eventTarget.className == "btn-open") {
        eventTarget.className = "btn-close";
        fadein(divOverlaay,speed);

        

    } else if (eventTarget.className == "btn-close"){
        eventTarget.className = "btn-open";
        fadeout(divOverlaay,speed);     
    }
    function fadein(elem,speed){

        var interval = setInterval(function(){
            elem.style.opacity = Number(elem.style.opacity) + 0.02;

            if (elem.style.opacity>=1) {
                elem.style.opacity = 1;
                clearInterval(interval);
            }
        },speed)

    }

    function fadeout(elem,speed){

        var outinterval = setInterval(function(){
            elem.style.opacity = Number(elem.style.opacity) - 0.02;

            if (elem.style.opacity<=0) {
                elem.style.opacity = 0;
                clearInterval(outinterval);
            }
        },speed)

    }

}