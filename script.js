const mainTimeline = gsap.timeline({ repeat: -1 });

// Play the audio when the timeline starts
const audio = document.getElementById('background-audio');

document.querySelector('.page1').classList.remove('hidden');
const playButton = document.querySelector('.play-btn');


// const audioDuration = 1800; // 5000 milliseconds (5 seconds)

// function playAudioAndStop() {
//     audio.play();
//     setTimeout(() => {
//         audio.pause();
//         audio.currentTime = 0; // Reset audio to the beginning
//     }, audioDuration);
// }

// playButton.addEventListener('click', playAudioAndStop);


mainTimeline.addLabel('start')
    .fromTo('.loading-text', { opacity: 1, rotation: 0 }, { opacity: 0, rotation: 0, duration: 8 })
    .to('.page1', { opacity: 1, duration: 1 })
    .to('.page1', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {

        // Remove 'hidden' class and animate opacity to reveal page 2
        document.querySelector('.page2').classList.remove('hidden');
        gsap.to('.page2', { x: 0, duration: 2, ease: "bounce.out" });

        // gsap.to('.page2', { opacity: 1, duration: 2 });


    })
    .to('.page2', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {
        // Remove 'hidden' class and animate opacity to reveal page 3
        document.querySelector('.page3').classList.remove('hidden');
        gsap.to('.page3', { opacity: 1, duration: 1 });
    })
    .to('.page3', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {
        // Remove 'hidden' class and animate opacity to reveal page 4
        document.querySelector('.page4').classList.remove('hidden');
        gsap.to('.page4', { opacity: 1, duration: 1 });
    })
    .to('.page4', { opacity: 0, duration: 1, delay: 7 })
    .add(() => {
        // Remove 'hidden' class and animate opacity to reveal page 4
        document.querySelector('.page5').classList.remove('hidden');
        gsap.to('.page5', { opacity: 1, duration: 2 });
    })
    .to('.page5', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {
        // Remove 'hidden' class and animate opacity to reveal page 1
        document.querySelector('.page1').classList.remove('hidden');
        gsap.to('.page1', { opacity: 1, duration: 1 });
    })
    .add(() => {
        // Hide the spinner after all animations are done
        gsap.set('.page5', { display: 'none' });
        gsap.set('.page3', { display: 'none' });
        gsap.set('.page4', { display: 'none' });
        gsap.set('.page2', { display: 'none' });
        gsap.set('.page1', { display: 'none' });
        gsap.set('.page6', { display: 'block' });
        gsap.set('.loading-text', { display: 'none' });


        mainTimeline.seek('start'); // Go back to the 'start' label after the last page animation
        mainTimeline.pause(); // Pause the animation at the start

        gsap.to('.page6', { opacity: 1, duration: 1 }); // Make sure page 1 is visible after the animation stops
        // document.querySelector('.page1 video').play(); // Start playing video on page 1
    });


gsap.from('.we', {
    autoAlpha: 0,
    x: 500,
    duration: 6,
    onComplete: () => {
        console.log('Animation for "we" completed on page load');
        // Add your specific actions for the "we" animation here
    }
});

gsap.from('.s', {
    autoAlpha: 0,
    x: -500,
    duration: 7,
    onComplete: () => {
        console.log('Animation for "s" completed on page load');
        // Add your specific actions for the "s" animation here
    }
});


function gotoSection1() {
    gsap.set('.page6', { display: 'none' });
    gsap.set('.page5', { display: 'none' });
    gsap.set('.page3', { display: 'none' });
    gsap.set('.page4', { display: 'none' });
    gsap.set('.page2', { display: 'block', opacity: 1 });
    gsap.set('.page1', { display: 'none' });
    gsap.set('.loading-text', { display: 'none' });
}
function gotoSection2() {
    gsap.set('.page6', { display: 'none' });
    gsap.set('.page5', { display: 'none' });
    gsap.set('.page3', { display: 'block', opacity: 1 });
    gsap.set('.page4', { display: 'none' });
    gsap.set('.page2', { display: 'none' });
    gsap.set('.page1', { display: 'none' });
    gsap.set('.loading-text', { display: 'none' });
}
function gotoSection3() {
    gsap.set('.page6', { display: 'none' });
    gsap.set('.page5', { display: 'none' });
    gsap.set('.page3', { display: 'none' });
    gsap.set('.page4', { display: 'block', opacity: 1 });
    gsap.set('.page2', { display: 'none' });
    gsap.set('.page1', { display: 'none' });
    gsap.set('.loading-text', { display: 'none' });
}
function gotoSection4() {
    gsap.set('.page6', { display: 'none' });
    gsap.set('.page5', { display: 'block', opacity: 1 });
    gsap.set('.page3', { display: 'none' });
    gsap.set('.page4', { display: 'none' });
    gsap.set('.page2', { display: 'none' });
    gsap.set('.page1', { display: 'none' });
    gsap.set('.loading-text', { display: 'none' });


}




function gotoSection() {
    // mainTimeline.pause();
    gsap.set('.page6', { display: 'block', opacity: 1 });
    gsap.set('.page5', { display: 'none' });
    gsap.set('.page3', { display: 'none' });
    gsap.set('.page4', { display: 'none' });
    gsap.set('.page2', { display: 'none' });
    gsap.set('.page1', { display: 'none' });
    gsap.set('.loading-text', { display: 'none' });
    mainTimeline.pause();
}

// ... (Your animation timeline code)

// Function to handle the skip button click
function handleSkipButtonClick() {
    mainTimeline.pause(); // Pause the main timeline
}

// Add a click event listener to the skip button
document.getElementById('skipButton').addEventListener('click', handleSkipButtonClick);






