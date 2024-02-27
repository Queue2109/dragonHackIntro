document.addEventListener('DOMContentLoaded', function() {
    const dragon1 = document.getElementById('dragon');
    const dragon2 = document.getElementById('dragon2')
    const documentHeight = document.body.scrollHeight;
    const dragonHeight = dragon1.offsetHeight;
    const animationDuration = 5; 

    dragon1.style.animation = `dragonFloat ${animationDuration}s linear infinite`;
    dragon1.style.animationDelay = '-5s'; 
    dragon2.style.animation = `dragonFloat ${animationDuration}s linear infinite`;
    dragon2.style.animationDelay = '-2.5s';
    
    const keyframes = `
        @keyframes dragonFloat {
            0% {
                top: 100px;
            }
            50% {
                top: ${documentHeight - dragonHeight}px; /* Move to the bottom of the screen */
            }
            100% {
                top: 100px;
            }
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
});
