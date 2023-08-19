const mainTimeline = gsap.timeline({ repeat: -1 });

// Play the audio when the timeline starts
const audio = document.getElementById('background-audio');

document.querySelector('.page1').classList.remove('hidden');
mainTimeline
    .addLabel('start')
    .fromTo('.loading-spinner', { opacity: 1, rotation: 0 }, { opacity: 0, rotation: 360, duration: 2 })
    .to('.page1', { opacity: 1, duration: 1 })
    .to('.page1', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {
        // audio.play();

        // Remove 'hidden' class and animate opacity to reveal page 2
        document.querySelector('.page2').classList.remove('hidden');
        gsap.to('.page2', { opacity: 1, duration: 1 });


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
    .to('.page4', { opacity: 0, duration: 1, delay: 5 })
    .add(() => {
        // Remove 'hidden' class and animate opacity to reveal page 4
        document.querySelector('.page5').classList.remove('hidden');
        gsap.to('.page5', { opacity: 1, duration: 1 });
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
        gsap.set('.page1', { display: 'block' });
        gsap.set('.loading-spinner', { display: 'none' });


        mainTimeline.seek('start'); // Go back to the 'start' label after the last page animation
        mainTimeline.pause(); // Pause the animation at the start

        gsap.to('.page1', { opacity: 1, duration: 1 }); // Make sure page 1 is visible after the animation stops
        // document.querySelector('.page1 video').play(); // Start playing video on page 1
    });




// Keep track of the current active section
let activeSection = 'section1'; // Default to the first section

// Add click event listeners to pronoun elements
// const pronounElements = document.querySelectorAll('.p');
// pronounElements.forEach(pronoun => {
//     pronoun.addEventListener('click', () => {
//         const sectionId = pronoun.getAttribute('data-section');
//         showSection(sectionId);
//     });
// });

// function showSection(sectionId) {
//     // Pause the animation timeline
//     mainTimeline.pause();

//     // Hide the current active section
//     const currentSection = document.getElementById(activeSection);
//     currentSection.style.display = 'none';

//     // Show the selected section
//     const selectedSection = document.getElementById(sectionId);
//     selectedSection.style.display = 'block';

//     // Update the active section
//     activeSection = sectionId;

//     // Resume the animation timeline from the current label
//     // mainTimeline.play(activeSection);
// }

function showSection(sectionId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');

    // Pause the mainTimeline
    mainTimeline.pause();
}

// Get the elements for pronouns
const pronounElements = document.querySelectorAll('.p .pointer');

// Add click event listener to pronoun elements
pronounElements.forEach(pronoun => {
    pronoun.addEventListener('click', () => {
        const sectionId = pronoun.getAttribute('data-section');
        showSection(sectionId);
    });
});















let circle = document.querySelector('.circle');
let follow = document.querySelector('.circle-follow');
let links = document.querySelectorAll('a');

function moveCircle(e) {
    gsap.to(circle, { duration: 0.3, x: e.clientX, y: e.clientY });
    gsap.to(follow, { duration: 0.7, x: e.clientX, y: e.clientY });
}

function hoverFunc() {
    gsap.to(circle, { duration: 0.3, opacity: 1, scale: 0 });
    gsap.to(follow, { duration: 0.3, scale: 3 });
}

function unhoverFunc() {
    gsap.to(circle, { duration: 0.3, opacity: 1, scale: 1 });
    gsap.to(follow, { duration: 0.3, scale: 1 });
}

window.addEventListener('mousemove', moveCircle);

links.forEach(function (link) {
    link.addEventListener('mouseenter', hoverFunc);
    link.addEventListener('mouseleave', unhoverFunc);
});


// Get the elements for "s" and "he"
const sElement = document.querySelector('.she');
const heElement = document.querySelector('.he');

// Add hover event listener to "s" element
sElement.addEventListener('mouseover', () => {
    // Add the color-change class to "he" element
    heElement.classList.add('color-change');
});

sElement.addEventListener('mouseout', () => {
    // Remove the color-change class from "he" element
    heElement.classList.remove('color-change');
});