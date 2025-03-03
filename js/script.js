// // Balloon animation
// const balloons = document.querySelectorAll('.show-balloons img');
// const balloonContainer = document.querySelector('.show-balloons');
// const arrowWrapper = document.querySelector('.arrow-wrapper');

// function animateBalloons() {
//     const bounds = {
//         width: balloonContainer.clientWidth,
//         height: balloonContainer.clientHeight
//     };

//     balloons.forEach(balloon => {
//         function moveBalloon() {
//             gsap.set(balloon, {
//                 y: -150, // Start above the container
//                 x: () => Math.random() * (balloonContainer.clientWidth * 0.2), // Random horizontal position
//                 opacity: 1,
//             });

//             gsap.to(balloon, {
//                 y: bounds.height, // Move to the bottom
//                 duration: Math.random() * 5 + 3, // Random duration (3 to 5 seconds)
//                 delay: Math.random() * 2, // Random delay (0 to 2 seconds)
//                 onComplete: moveBalloon, // Restart the animation on completion
//                 ease: 'linear',
//             });
//         }

//         moveBalloon();
//     });
// }

// // // Check if a balloon is visible within the container.
// // function isBalloonVisible(balloon) {
// //     const containerRect = balloonContainer.getBoundingClientRect();
// //     const balloonRect = balloon.getBoundingClientRect();
// //     return (
// //         balloonRect.bottom > containerRect.top &&
// //         balloonRect.top < containerRect.bottom &&
// //         balloonRect.right > containerRect.left &&
// //         balloonRect.left < containerRect.right
// //     ); 
// // }

// // // Collision detection between two elements based on their bounding rectangles.
// // function isCollision(rect1, rect2) {
// //     return !(
// //         rect1.right < rect2.left ||
// //         rect1.left > rect2.right ||
// //         rect1.bottom < rect2.top ||
// //         rect1.top > rect2.bottom
// //     );
// // }

// // // Function to continuously update the arrow's position to chase the selected balloon.
// // function chaseBalloon(selectedBalloon, arrowImage) {
// //     // Get arrow's initial position relative to the viewport.
// //     const arrowRectInitial = arrowImage.getBoundingClientRect();
// //     let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
// //     const chaseFactor = 0.03; // Adjust this factor to control chasing speed.

// //     function update() {
// //         // Get the balloon's current center position.
// //         const balloonRect = selectedBalloon.getBoundingClientRect();
// //         const balloonCenter = {
// //             x: balloonRect.left + balloonRect.width / 2,
// //             y: balloonRect.top + balloonRect.height / 2
// //         };

// //         // Move the arrow's position a fraction of the distance towards the balloon's center.
// //         arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
// //         arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

// //         // Calculate the translation offset from the arrow's initial position.
// //         const translateX = arrowPos.x - arrowRectInitial.left;
// //         const translateY = arrowPos.y - arrowRectInitial.top;
// //         arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

// //         // Check for collision between the arrow and the balloon.
// //         const arrowRect = arrowImage.getBoundingClientRect();
// //         if (isCollision(arrowRect, balloonRect)) {
// //             selectedBalloon.style.backgroundColor = 'red';
// //             // selectedBalloon.src = 'path/to/new-image.png';
// //             console.log('Collision detected. Balloon is now red.');
// //             arrowWrapper.classList.add('hide-arrow')
// //             setTimeout(() => {
// //                 balloonContainer.classList.add('hide-balloon')
// //             }, 500);
// //             return; // Stop updating once collision is detected.
// //         }

// //         // Continue updating on the next animation frame.
// //         requestAnimationFrame(update);
// //     }

// //     update();
// // }

// // // Function to select a visible balloon and start the arrow chase.
// // function launchArrowChasingBalloon() {
// //     const visibleBalloons = Array.from(balloons).filter(isBalloonVisible);

// //     if (visibleBalloons.length > 0) {
// //         const randomIndex = Math.floor(Math.random() * visibleBalloons.length);
// //         const selectedBalloon = visibleBalloons[randomIndex];

// //         // Initially set the selected balloon's background color to blue.
// //         selectedBalloon.style.backgroundColor = 'blue';

// //         const arrowImage = document.querySelector('.arrow-wrapper img');
// //         chaseBalloon(selectedBalloon, arrowImage);
// //     } else {
// //         console.log('No visible balloons at the moment.');
// //     }
// // }

// const observer = new MutationObserver(() => {
//     if (!balloonContainer.classList.contains('hide-balloon')) {
//         animateBalloons();
//     }
// });

// // const observer2 = new MutationObserver(() => {
// //     if(!arrowWrapper.classList.contains('hide-arrow')){
// //         launchArrowChasingBalloon()
// //     }
// // });

// observer.observe(balloonContainer, { attributes: true, attributeFilter: ['class'] });
// // observer2.observe(arrowWrapper, { attributes: true, attributeFilter: ['class'] });


// // --------------------------------------------------------


// Balloon animation
const balloons = document.querySelectorAll('.show-balloons img');
const balloonContainer = document.querySelector('.show-balloons');
// const arrowWrapper = document.querySelector('.arrow-wrapper');

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
// const selectingContainer = document.querySelector(".selecting-balloons");
// const popUpBalloon = document.querySelectorAll(".selecting-balloons>img");

// // Function to animate a random balloon
// function popContainer() {
//     // Randomly select one balloon
//     const randomBalloon = popUpBalloon[Math.floor(Math.random() * popUpBalloon.length)];
//     console.log('random balloon is ', randomBalloon)

//     // Remove hidden-selection class
//     randomBalloon.classList.remove("hidden-selection");

//     // Set initial position
//     gsap.set(randomBalloon, { y: "-150px" });

//     // Animate balloon from top to bottom
//     gsap.to(randomBalloon, {
//         y: "100vh",
//         duration: 5,
//         ease: "power1.inOut"
//     });
// }


// const selectingContainer = document.querySelector(".selecting-balloons");
// const popUpBalloons = document.querySelectorAll(".selecting-balloons > img");
// const arrowWrapper = document.querySelector(".arrow-wrapper img");

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

//     // Randomly select a balloon
//     const randomBalloon = popUpBalloons[Math.floor(Math.random() * popUpBalloons.length)];
//     console.log('Random balloon is: ', randomBalloon);

//     // Remove hidden-selection class
//     randomBalloon.classList.remove("hidden-selection");

//     // Set initial position for the balloon
//     gsap.set(randomBalloon, { y: "-150px" });

//     // Animate balloon from top to bottom
//     gsap.to(randomBalloon, {
//         y: "100vh",
//         duration: 4,
//         ease: "power1.inOut",
//         onStart: () => {
//             // Start the arrow chase when the balloon starts moving
//             chaseBalloon(randomBalloon, arrowWrapper);
//         }
//     });
// }

// // Arrow Chasing Function
// function chaseBalloon(selectedBalloon, arrowImage) {
//     // Get arrow's initial position
//     const arrowRectInitial = arrowImage.getBoundingClientRect();
//     let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
//     const chaseFactor = 0.03; // Control arrow speed

//     function update() {
//         // Get the balloon's current position
//         const balloonRect = selectedBalloon.getBoundingClientRect();
//         const balloonCenter = {
//             x: balloonRect.left + balloonRect.width / 2,
//             // y: balloonRect.top + balloonRect.height / 2
//             y: balloonRect.top + balloonRect.height / 2 + 40, // Aim even lower

//         };

//         // Move the arrow toward the balloon
//         arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
//         arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

//         // Apply the new arrow position
//         const translateX = arrowPos.x - arrowRectInitial.left;
//         const translateY = arrowPos.y - arrowRectInitial.top;
//         arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

//         // Collision detection between arrow and balloon
//         const arrowRect = arrowImage.getBoundingClientRect();
//         if (isCollision(arrowRect, balloonRect)) {
//             selectedBalloon.style.backgroundColor = 'red';
//             console.log('Collision detected! Balloon is red.');

//             // Hide arrow and balloon after collision
//             arrowImage.classList.add('hide-arrow');
//             setTimeout(() => {
//                 selectingContainer.classList.add('hide-balloon');
//             }, 500);
//             return; // Stop the chase
//         }

//         // Continue updating on the next frame
//         requestAnimationFrame(update);
//     }

//     update(); // Start the chase
// }

const selectingContainer = document.querySelector(".selecting-balloons");
const popUpBalloons = document.querySelectorAll(".selecting-balloons > img");
const arrowWrapper = document.querySelector(".arrow-wrapper img");
const targetDiv = document.querySelector(".target-div"); // Target div

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

    // const circle = document.querySelector('#wheelCanvas');
    // const circleCenter = circle.getBoundingClientRect().top + circle.offsetHeight / 2;
    // const distance = circleCenter;
    // const speed = distance / 3.5;
    // console.log('speed is',Math.max(3.5, distance / speed))

    // const circle = document.querySelector('#wheelCanvas');
    // const circleCenter = circle.getBoundingClientRect().top + circle.offsetHeight / 2;

    // // Assume a fixed speed (e.g., 100 pixels per second)
    // const speed = 100;
    // const timeToCenter = circleCenter / speed;

    // const popupDelay = Math.max(3.5, timeToCenter);
    // console.log('Popup delay is:', popupDelay);

    const circle = document.querySelector('#wheelCanvas');

    // Calculate the center of the circle
    const circleCenter = circle.getBoundingClientRect().top + circle.offsetHeight / 2;

    // Fixed balloon speed (adjust for desired animation speed)
    const speed = 100; // pixels/second

    // Calculate how much time the balloon takes to reach the circle
    const timeToCenter = circleCenter / speed;

    // Ensure popupDelay is at least 3.5 seconds
    const popupDelay = Math.max(1.4, timeToCenter)* 1000;

    console.log('Circle Center:', circleCenter);
    console.log('Time to Center:', timeToCenter);
    console.log('Popup Delay:', popupDelay);


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
    }, popupDelay); // 1.4-second delay
}

// Arrow Chasing Function
function chaseBalloon(selectedBalloon, arrowImage) {
    const arrowRectInitial = arrowImage.getBoundingClientRect();
    let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
    const chaseFactor = 0.04;

    function update() {
        const balloonRect = selectedBalloon.getBoundingClientRect();
        const balloonCenter = {
            x: balloonRect.left + balloonRect.width / 2,
            y: balloonRect.top + balloonRect.height / 2 + 80,
        };

        arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
        arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

        const translateX = arrowPos.x - arrowRectInitial.left;
        const translateY = arrowPos.y - arrowRectInitial.top;
        arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

        const arrowRect = arrowImage.getBoundingClientRect();
        if (isCollision(arrowRect, balloonRect)) {
            // selectedBalloon.style.backgroundColor = 'red';
            console.log('Collision detected! Balloon is red.');

            arrowImage.classList.add('hide-arrow');
            setTimeout(() => {
                selectingContainer.classList.add('hide-balloon');
            }, 500);
            return;
        }

        requestAnimationFrame(update);
    }

    update();
}







// // Check if a balloon is visible within the container.
// function isBalloonVisible(balloon) {
//     const containerRect = balloonContainer.getBoundingClientRect();
//     const balloonRect = balloon.getBoundingClientRect();
//     return (
//         balloonRect.bottom > containerRect.top &&
//         balloonRect.top < containerRect.bottom &&
//         balloonRect.right > containerRect.left &&
//         balloonRect.left < containerRect.right
//     ); 
// }

// // Collision detection between two elements based on their bounding rectangles.
// function isCollision(rect1, rect2) {
//     return !(
//         rect1.right < rect2.left ||
//         rect1.left > rect2.right ||
//         rect1.bottom < rect2.top ||
//         rect1.top > rect2.bottom
//     );
// }

// // Function to continuously update the arrow's position to chase the selected balloon.
// function chaseBalloon(selectedBalloon, arrowImage) {
//     // Get arrow's initial position relative to the viewport.
//     const arrowRectInitial = arrowImage.getBoundingClientRect();
//     let arrowPos = { x: arrowRectInitial.left, y: arrowRectInitial.top };
//     const chaseFactor = 0.03; // Adjust this factor to control chasing speed.

//     function update() {
//         // Get the balloon's current center position.
//         const balloonRect = selectedBalloon.getBoundingClientRect();
//         const balloonCenter = {
//             x: balloonRect.left + balloonRect.width / 2,
//             y: balloonRect.top + balloonRect.height / 2
//         };

//         // Move the arrow's position a fraction of the distance towards the balloon's center.
//         arrowPos.x += (balloonCenter.x - arrowPos.x) * chaseFactor;
//         arrowPos.y += (balloonCenter.y - arrowPos.y) * chaseFactor;

//         // Calculate the translation offset from the arrow's initial position.
//         const translateX = arrowPos.x - arrowRectInitial.left;
//         const translateY = arrowPos.y - arrowRectInitial.top;
//         arrowImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

//         // Check for collision between the arrow and the balloon.
//         const arrowRect = arrowImage.getBoundingClientRect();
//         if (isCollision(arrowRect, balloonRect)) {
//             selectedBalloon.style.backgroundColor = 'red';
//             // selectedBalloon.src = 'path/to/new-image.png';
//             console.log('Collision detected. Balloon is now red.');
//             arrowWrapper.classList.add('hide-arrow')
//             setTimeout(() => {
//                 balloonContainer.classList.add('hide-balloon')
//             }, 500);
//             return; // Stop updating once collision is detected.
//         }

//         // Continue updating on the next animation frame.
//         requestAnimationFrame(update);
//     }

//     update();
// }

// // Function to select a visible balloon and start the arrow chase.
// function launchArrowChasingBalloon() {
//     const visibleBalloons = Array.from(balloons).filter(isBalloonVisible);

//     if (visibleBalloons.length > 0) {
//         const randomIndex = Math.floor(Math.random() * visibleBalloons.length);
//         const selectedBalloon = visibleBalloons[randomIndex];

//         // Initially set the selected balloon's background color to blue.
//         selectedBalloon.style.backgroundColor = 'blue';

//         const arrowImage = document.querySelector('.arrow-wrapper img');
//         chaseBalloon(selectedBalloon, arrowImage);
//     } else {
//         console.log('No visible balloons at the moment.');
//     }
// }


// const observer3 = new MutationObserver(() => {
//     const circle = document.querySelector('#wheelCanvas');
//     // console.log(circle.innerWidth)
//     if (circle) {
//       observer3.disconnect(); // Stop observing once the wheel is found
//     //   startBalloonAnimation(circle);
//     }
//   });

//   observer3.observe(document.body, { childList: true, subtree: true });





const observer = new MutationObserver(() => {
    if (!balloonContainer.classList.contains('hide-balloon')) {
        animateBalloons();
    }
});

const observer2 = new MutationObserver(() => {
    if (selectingContainer.classList.contains('enable-selection')) {
        popContainer();
    }
});

// Observe both elements separately
observer.observe(balloonContainer, { attributes: true, attributeFilter: ['class'] });
observer2.observe(selectingContainer, { attributes: true, attributeFilter: ['class'] });

// --------------------------------------------------------
