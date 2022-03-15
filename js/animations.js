
const fadeInAnimation = [
    'fade-in-right',
    'fade-in-left'
  ]

// Index Animations

function indexAnimation() {

    
    
      // * IMAGES ANIMATION *
      // Getting the images
      const images = document.querySelectorAll('.fade-in-image');
      
      if(!images) return;
      const imageOptions = {}
      
      // Section Observer
      const imageObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach((entry) => {
            // Get the Index of current image
          const currentIndex = Array.from(images).indexOf(entry.target);
          
          if(entry.isIntersecting) {
              // Add class from array either 0 or 1
            images[currentIndex].classList.add(fadeInAnimation[(currentIndex % 2)])
            
          } 
          // else {
          //     // Remove class to animate again on scroll
          //   images[currentIndex].classList.remove(fadeInAnimation[currentIndex])
          // }
          
        })
      },
      imageOptions)
      
      images.forEach(image => {
      
        imageObserver.observe(image)
      })
      
      // * TEXT ANIMATION
      const factsText = document.querySelector('#main-section-c div');
      const cardText = document.querySelectorAll('div.card-content');

      const texts = Array.from(cardText)
      texts.push(factsText)
      
      if(!texts) return;

      const textOptions = {
        root: null,
        rootMargin: '100px'
      };

      const textObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach((entry) => {          
          
          if(entry.isIntersecting) {
              // Add class from array either 0 or 1
            entry.target.classList.add('rotate-in-x')
            
          } else {
              // Remove class to animate again on scroll
            entry.target.classList.remove('rotate-in-x')
          }
          
        })
      },
      textOptions)

      texts.forEach(text => {

        textObserver.observe(text)
      })
}


// Solawi Animations

function solawiAnimations() {
    const solawiSections = document.querySelectorAll('section.solawi')

    const sectionSolawiOptions = {
        root: null,
        rootMargin: '-10px',
        // threshold: 
  
    }
      
      // Section Observer
      const sectionSolawiObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach((entry) => {
            // Get the Index of current image
          const currentIndex = Array.from(solawiSections    ).indexOf(entry.target);
          
          if(entry.isIntersecting) {
              // Add class from array either 0 or 1
            solawiSections[currentIndex].classList.add(fadeInAnimation[(currentIndex % 2)])
            
          } else {
              // Remove class to animate again on scroll
            solawiSections[currentIndex].classList.remove(fadeInAnimation[currentIndex % 2])
          }
          
        })
      },
      sectionSolawiOptions)
      
      solawiSections.forEach(solawiSection => {
      
        sectionSolawiObserver.observe(solawiSection)
      })
      

    
}

document.addEventListener('DOMContentLoaded', indexAnimation)
document.addEventListener('DOMContentLoaded', solawiAnimations)