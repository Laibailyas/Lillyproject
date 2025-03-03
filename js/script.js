// Balloon animation
const balloons = document.querySelectorAll('.show-balloons img');
const balloonContainer = document.querySelector('.show-balloons');

function animateBalloons() {
    const bounds = {
        width: balloonContainer.clientWidth,
        height: balloonContainer.clientHeight
    };

    balloons.forEach(balloon => {
        function moveBalloon() {
            gsap.set(balloon, {
                y: -150, // Start above the container
                x: () => Math.random() * (balloonContainer.clientWidth * 0.2), // Random horizontal position
                opacity: 1,
            });

            gsap.to(balloon, {
                y: bounds.height, // Move to the bottom
                duration: Math.random() * 5 + 3, // Random duration (3 to 5 seconds)
                delay: Math.random() * 2, // Random delay (0 to 2 seconds)
                ease: 'linear',
            });
        }

        moveBalloon();
    });
}

const selectingContainer = document.querySelector(".selecting-balloons");
const popUpBalloons = document.querySelectorAll(".selecting-balloons > img");
const arrowWrapper = document.querySelector(".arrow-wrapper");
const targetDiv = document.querySelector(".target-div");


// // Reset animations
// function resetAnimations() {
//     // Stop all GSAP animations
//     gsap.killTweensOf(popUpBalloons);
//     gsap.killTweensOf(arrowWrapper);

//     // Reset balloon position
//     popUpBalloons.forEach(balloon => {
//         gsap.set(balloon, { y: "-100%", opacity: 1 });
//         balloon.classList.add("hidden-selection");
//     });

//     // Reset arrow position
//     arrowWrapper.style.transform = "translate(0, 0)";

// }

// // Collision Detection Function
// function isCollision(rect1, rect2) {
//     return !(
//         rect1.right < rect2.left ||
//         rect1.left > rect2.right ||
//         rect1.bottom < rect2.top ||
//         rect1.top > rect2.bottom
//     );
// }

// // Function to animate a random balloon and trigger arrow chase
// function popContainer() {
//     if (popUpBalloons.length === 0) return;

//     const randomBalloon = popUpBalloons[Math.floor(Math.random() * popUpBalloons.length)];
//     console.log('Random balloon is: ', randomBalloon);

//     randomBalloon.classList.remove("hidden-selection");

//     gsap.set(randomBalloon, { y: "-150px" });


//     setTimeout(() => {
//         gsap.to(randomBalloon, {
//             y: "100vh",
//             duration: 5,
//             ease: "power1.inOut",
//             onUpdate: () => {
//                 const balloonRect = randomBalloon.getBoundingClientRect();
//                 const targetRect = targetDiv.getBoundingClientRect();

//                 // Start arrow chase when balloon reaches target div
//                 if (isCollision(balloonRect, targetRect)) {
//                     chaseBalloon(randomBalloon, arrowWrapper);
//                 }
//             }
//         });
//     }, 1360);
// }

// // Arrow Chasing Function
// function chaseBalloon(selectedBalloon, arrowImage) {
//     const arrowRectInitial = arrowImage.getBoundingClientRect();
//     let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
//     const chaseFactor = 0.04;

//     function update() {
//         const balloonRect = selectedBalloon.getBoundingClientRect();
//         const balloonCenter = {
//             x: balloonRect.left + balloonRect.width / 2,
//             y: balloonRect.top + balloonRect.height / 2 + 40,
//         };

//         arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
//         arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

//         const translateX = arrowPos.x - arrowRectInitial.left;
//         const translateY = arrowPos.y - arrowRectInitial.top;
//         arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

//         const arrowRect = arrowImage.getBoundingClientRect();
//         if (isCollision(arrowRect, balloonRect)) {
//             // selectedBalloon.style.backgroundColor = 'red';
//             selectingContainer.classList.remove('enable-selection')
//             console.log('Collision detected! Balloon is red.');

//             arrowImage.classList.add('hide-arrow');
//             // setTimeout(() => {
//             //     selectingContainer.classList.add('hide-balloon');
//             // }, 500);
//             // return;
//         }

//         requestAnimationFrame(update);
//     }

//     update();
// }

// // // Reset animations
// // function resetAnimations() {
// //     // Stop all GSAP animations
// //     gsap.killTweensOf(popUpBalloons);
// //     gsap.killTweensOf(arrowImage);

// //     // Reset balloon position
// //     popUpBalloons.forEach(balloon => {
// //         gsap.set(balloon, { y: "-150px", opacity: 1 });
// //         balloon.classList.add("hidden-selection");
// //     });

// //     // Reset arrow position
// //     arrowImage.style.transform = "translate(50%, -100%)";
// //     arrowImage.style.top = "50%";
// //     arrowImage.style.left = "-100%";

// // }

// Reset animations
function resetAnimations() {
    // Stop all GSAP animations
    gsap.killTweensOf(popUpBalloons);
    gsap.killTweensOf(arrowWrapper);

    // Reset balloon position
    popUpBalloons.forEach(balloon => {
        gsap.set(balloon, { y: "-100%", opacity: 1 });
        balloon.classList.add("hidden-selection");
    });

    // Reset arrow position
    arrowWrapper.style.transform = "translate(0, 0)";
    arrowWrapper.classList.remove('hide-arrow');

    // Clear any ongoing arrow chase
    if (arrowChaseFrame) {
        cancelAnimationFrame(arrowChaseFrame);
        arrowChaseFrame = null;
    }
}

// Collision Detection Function
function isCollision(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

// Function to animate a random balloon and trigger arrow chase
function popContainer() {
    if (popUpBalloons.length === 0) return;

    const randomBalloon = popUpBalloons[Math.floor(Math.random() * popUpBalloons.length)];
    console.log('Random balloon is: ', randomBalloon);

    randomBalloon.classList.remove("hidden-selection");

    gsap.set(randomBalloon, { y: "-150px" });

    setTimeout(() => {
        gsap.to(randomBalloon, {
            y: "100vh",
            duration: 5,
            ease: "power1.inOut",
            onUpdate: () => {
                const balloonRect = randomBalloon.getBoundingClientRect();
                const targetRect = targetDiv.getBoundingClientRect();

                // Start arrow chase when balloon reaches target div
                if (isCollision(balloonRect, targetRect)) {
                    chaseBalloon(randomBalloon, arrowWrapper);
                }
            }
        });
    }, 1360);
}

// Global variable to store animation frame ID
let arrowChaseFrame = null;

// Arrow Chasing Function
function chaseBalloon(selectedBalloon, arrowImage) {
    // Recalculate initial arrow position
    const arrowRectInitial = arrowImage.getBoundingClientRect();
    let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
    const chaseFactor = 0.04;

    function update() {
        const balloonRect = selectedBalloon.getBoundingClientRect();
        const balloonCenter = {
            x: balloonRect.left + balloonRect.width / 2,
            y: balloonRect.top + balloonRect.height / 2 + 40,
        };

        arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
        arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

        const translateX = arrowPos.x - arrowRectInitial.left;
        const translateY = arrowPos.y - arrowRectInitial.top;
        arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

        const arrowRect = arrowImage.getBoundingClientRect();
        if (isCollision(arrowRect, balloonRect)) {
            selectingContainer.classList.remove('enable-selection');
            console.log('Collision detected! Balloon is caught.');

            arrowImage.classList.add('hide-arrow');

            // Stop the chase after collision
            if (arrowChaseFrame) {
                cancelAnimationFrame(arrowChaseFrame);
                arrowChaseFrame = null;
            }
            return;
        }

        arrowChaseFrame = requestAnimationFrame(update);
    }

    // Ensure only one chase loop runs at a time
    if (!arrowChaseFrame) {
        update();
    }
}

// Observe changes in the container class
const observer2 = new MutationObserver(() => {
    if (selectingContainer.classList.contains('enable-selection')) {
        popContainer();
    } else {
        resetAnimations();
    }
});

observer2.observe(selectingContainer, { attributes: true, attributeFilter: ['class'] });




const observer = new MutationObserver(() => {
    if (balloonContainer.classList.contains('hide-balloon')) {
        // Stop animations and reset balloon positions
        gsap.killTweensOf(balloons);
        balloons.forEach(balloon => {
            gsap.set(balloon, { y: -150, opacity: 0 });
        });
    } else {
        // Restart animation
        animateBalloons();
    }
});

// const observer2 = new MutationObserver(() => {
//     if (selectingContainer.classList.contains('enable-selection')) {
//         popContainer();
//     } else {
//         resetAnimations();
//     }
// });

// Observe both elements separately
observer.observe(balloonContainer, { attributes: true, attributeFilter: ['class'] });
// observer2.observe(selectingContainer, { attributes: true, attributeFilter: ['class'] });
