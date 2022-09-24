document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');

    background.addEventListener('click', event => {
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
    });

});

// document.addEventListener('DOMContentLoaded', function () {
//     const background = document.querySelector('.background');

//     background.addEventListener('click', event => {
//         const bubble = document.createElement("div");
//         bubble.className = 'bubble';
//         bubble.style.top = event.clientY+"px";
//         bubble.style.left = event.clientX+"px";
//         bubble.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
//         bubble.style.transitionDuration = Math.floor((Math.random() * 120)+1)+"s";
//         bubble.style.transform = "skew("+Math.floor((Math.random() * 10)-5)+"deg)";
    
//         setTimeout(function () {
//             bubble.classList.add("bubble-grow");
//             let bubbleSize = Math.floor((Math.random() * 10000)+10);
//             bubble.style.height = bubbleSize+"px";
//             bubble.style.width = bubbleSize+"px";
//             bubble.style.marginTop = "-"+(bubbleSize/2)+"px";
//             bubble.style.marginLeft = "-"+(bubbleSize/2)+"px";
//             bubble.style.borderRadius = Math.floor((Math.random() * bubbleSize))+"px";
//         }, 1000);

//         background.appendChild(bubble);
//     });

// });