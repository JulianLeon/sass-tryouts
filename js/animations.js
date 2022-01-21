
const fadeInAnimation = [
    'fade-in-right',
    'fade-in-left'
  ]

// Index Animations

function indexAnimation() {

    
    
      
      // Getting the images
      const images = document.querySelectorAll('.fade-in-image');
      
      
      const sectionOneOptions = {}
      
      // Section Observer
      const sectionOneObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach((entry) => {
            // Get the Index of current image
          const currentIndex = Array.from(images).indexOf(entry.target);
          
          if(entry.isIntersecting) {
              // Add class from array either 0 or 1
            images[currentIndex].classList.add(fadeInAnimation[(currentIndex % 2)])
            
          } else {
              // Remove class to animate again on scroll
            images[currentIndex].classList.remove(fadeInAnimation[currentIndex])
          }
          
        })
      },
      sectionOneOptions)
      
      images.forEach(image => {
      
        sectionOneObserver.observe(image)
      })
      


}


// Solawi Animations

function solawiAnimations() {
    const solawiSections = document.querySelectorAll('section.solawi')

    const sectionSolawiOptions = {
        root: null,
        rootMargin: '00px',
        threshold: 0.5
  
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