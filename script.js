// Register the ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

// When the window finishes loading, execute the provided function
window.onload = function () {
  // Find the element with class 'dark-background'
  const darkBackground = document.querySelector('.dark-background');

  // Fade out the dark background gradually
  gsap.to(darkBackground, {
    opacity: 0,
    duration: 2, // Adjust the duration as needed
    onComplete: function () {
      // Once the fade-out is complete, hide the dark background
      darkBackground.style.display = 'none';
    }
  });

  // Set default ScrollTrigger behavior
  ScrollTrigger.defaults({
    toggleActions: "play none none reverse"
  });

  // Animate the scaling of '.img-container' element
  gsap.to('.img-container', {
    scale: 52,
    ease: "ease",
    opacity: 0,
    scrollTrigger: {
      trigger: '.video-section',
      scrub: 1,
      start: "top top",
      end: "bottom",
      pin: true
    }
  });

  // Animate '.right' element to fade out and move to the right
  gsap.to('.right', {
    autoAlpha: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
      start: 1
    }
  });

  // Animate '.left' element to fade out and move to the left
  gsap.to('.left', {
    autoAlpha: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
      start: 1
    }
  });

  // Animate '.txt-bottom' element to fade out and adjust letter spacing
  // gsap.to('.txt-bottom', {
  //   autoAlpha: 0,
  //   letterSpacing: -10,
  //   duration: 2,
  //   scrollTrigger: {
  //     start: 2
  //   }
  // });

  // Create a timeline for animations
  const tl = gsap.timeline();

  // Animate elements with class '.left-side div'
  tl.from('.left-side div', {
    y: 150,
    opacity: 0,
    stagger: {
      amount: .4
    },
    delay: .5
  }).from('.right-side', { opacity: 0, duration: 2 }, .5)
    .to('.wrapper', { x: -window.innerWidth });

  // Create a ScrollTrigger animation for the timeline
  ScrollTrigger.create({
    animation: tl,
    trigger: '.wrapper',
    start: "top top",
    end: "+=200",
    scrub: 1,
    pin: true,
    ease: "ease"
  });

  // // Apply animations to elements with class '.col'
  // gsap.utils.toArray('.col').forEach(image => {
  //   gsap.fromTo(image, {
  //     opacity: .3,
  //     x: 0
  //   }, {
  //     opacity: 1,
  //     x: -50,
  //     scrollTrigger: {
  //       trigger: image,
  //       start: "10%",
  //       stagger: {
  //         amount: .4
  //       }
  //     }
  //   });
  // });

  // // Create a timeline for further animations
  // const timeline = gsap.timeline();

  // // Animate '.title span' elements with skewY and position changes
  // timeline.from('.title span', {
  //   y: 150,
  //   skewY: 7,
  //   duration: 3
  // }).from('.txt-bottom', {
  //   letterSpacing: -10,
  //   opacity: 0,
  //   duration: 3
  // });


  // ... (your existing code)

  // Create a timeline for animations for the new section
  // const newSectionTimeline = gsap.timeline();

  // newSectionTimeline.from('.new-section .left-side div', {
  //   y: 150,
  //   opacity: 0,
  //   stagger: {
  //     amount: 0.4
  //   },
  //   delay: 0.5
  // }).from('.new-section .right-side', { opacity: 0, duration: 2 }, 0.5)
  //   .to('.new-section-wrapper', { x: -window.innerWidth });

  // // Create a ScrollTrigger animation for the new section timeline
  // ScrollTrigger.create({
  //   animation: newSectionTimeline,
  //   trigger: '.new-section-wrapper',
  //   start: "top top",
  //   end: "+=200",
  //   scrub: 1,
  //   pin: true,
  //   ease: "ease"
  // });

  // ... (your existing code)


};
