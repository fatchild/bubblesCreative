document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');

    const autoClicker = document.getElementById("autoClicker");
    autoClicker.addEventListener("click", () => {
        let checked = autoClicker.checked
        let lastStoredX = 0;
        let lastStoredY = 0;
        document.onmousemove = function(e){
            let moveDistanceLimit = 50
            if ((Math.abs(lastStoredX - e.clientX) > moveDistanceLimit || Math.abs(lastStoredY - e.clientY) > moveDistanceLimit) && checked){
                lastStoredX = e.clientX;
                lastStoredY = e.clientY;
                paintBubble(e)
            }
        }  
    })

    function paintBubble(event){
        const bubble = document.createElement("div");

        // Get the slider values
        const expandSpeed = document.getElementById("expandSpeed").value;
        const skewRange = document.getElementById("skewRange").value; 
        const delay = document.getElementById("delay").value;
        const growSize = document.getElementById("growSize").value;
        const shape = document.getElementById("shape").value;
        

        // Set style
        bubble.className = 'bubble';
        bubble.style.top = event.clientY+"px";
        bubble.style.left = event.clientX+"px";
        bubble.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        bubble.style.transitionDuration = (expandSpeed+1)+"s";
        bubble.style.transform = "skew("+Math.floor((Math.random() * skewRange)-(skewRange/2))+"deg)";
    
        setTimeout(function () {
            bubble.classList.add("bubble-grow");
            let bubbleSize = Math.floor((Math.random() * 10000)+10);
            bubble.style.height = growSize+"px";
            bubble.style.width = growSize+"px";
            bubble.style.marginTop = "-"+(growSize/2)+"px";
            bubble.style.marginLeft = "-"+(growSize/2)+"px";
            bubble.style.borderRadius = shape+"px";
        }, delay*100);

        background.appendChild(bubble);
    }

    background.addEventListener('click', event => {
        paintBubble(event)
    });

});
