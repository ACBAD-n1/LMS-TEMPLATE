// Hero Section animation - corrected version
document.addEventListener('DOMContentLoaded', function() {
  //
  // Animation for Hero
  //
  const heroTitle = document.querySelector('.hero-title');
  const heroText = document.querySelector('.hero-text');
  const heroBtn = document.querySelector('.hero-btn'); 
  
  // Add animated class after a small delay to ensure transition works
  setTimeout(() => {
    heroTitle.classList.add('animated');
  }, 100);

  setTimeout(() => {
    heroText.classList.add('animated');
  }, 400);

  setTimeout(() => {
    heroBtn.classList.add('animated');
  }, 600);
  
  //
  //End Of hero animation
  //

});


// Create a reusable animation function
function setupCoursesAnimation() {
  const coursesTitle = document.querySelector('.courses__title');
  const coursesContent = document.querySelector('.courses__content');
  
  if (!coursesTitle || !coursesContent) return;

  // Configuration
  const observerOptions = {
    threshold: 0.3, // Trigger when 30% visible
    rootMargin: '0px 0px -50px 0px' // Adjust trigger point
  };

  // Title Observer
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('animated', entry.isIntersecting);
    });
  }, observerOptions);

  // Content Observer (with delay)
  const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Delay content animation until title is mostly animated
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, 200); // Match this with your title's transition duration
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }, observerOptions);

  // Start observing
  titleObserver.observe(coursesTitle);
  contentObserver.observe(coursesContent);
}

// Initialize on load and route changes
document.addEventListener('DOMContentLoaded', setupCoursesAnimation);


// Animations For Why section

// function setupWhyAnimation() {
//   const contentHead = document.querySelector('.why__content-head');
//   const card1 = document.querySelector('.why__content-grids--items-1');
//   const card2 = document.querySelector('.why__content-grids--items-2');
//   const card3 = document.querySelector('.why__content-grids--items-3');
//   const card4 = document.querySelector('.why__content-grids--items-4');

//   const observerOptions = {
//     threshold: 0.3, // Trigger when 30% visible
//     rootMargin: '0px 0px -50px 0px' // Adjust trigger point
//   };

//   const headObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       entry.target.classList.toggle('animated', entry.isIntersecting)
//     });
//   }, observerOptions);

//   // Card 1
//   const card1Observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry =>{
//       entry.target.classList.toggle('animated', entry.isIntersecting)
//     });
//   }, observerOptions);

//   // Card 2 with delay
//   const card2Observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting) {
//         setTimeout(() => {
//           entry.target.classList.toggle('animated');
//         }, 500)
//       } else {
//         entry.target.classList.remove('animated')
//       }
//     })
//   }, observerOptions);

//   // Card 3 with delay
//   const card3Observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting) {
//         setTimeout(() => {
//           entry.target.classList.toggle('animated');
//         }, 1000)
//       } else {
//         entry.target.classList.remove('animated')
//       }
//     })
//   }, observerOptions);

//   // Card 4 with delay
//   const card4Observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting) {
//         setTimeout(() => {
//           entry.target.classList.toggle('animated');
//         }, 1500)
//       } else {
//         entry.target.classList.remove('animated')
//       }
//     })
//   }, observerOptions);


//   headObserver.observe(contentHead);
//   card1Observer.observe(card1);
//   card2Observer.observe(card2);
//   card3Observer.observe(card3);
//   card4Observer.observe(card4);
// }
// document.addEventListener('DOMContentLoaded', setupWhyAnimation);

function setupWhyAnimation() {
  // Get all elements
  const contentHead = document.querySelector('.why__content-head');
  const cards = [
    document.querySelector('.why__content-grids--items-1'),
    document.querySelector('.why__content-grids--items-2'),
    document.querySelector('.why__content-grids--items-3'),
    document.querySelector('.why__content-grids--items-4')
  ];

  // Safety check
  if (!contentHead || cards.some(card => !card)) return;

  // Configuration
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  // Head Observer
  const headObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('animated', entry.isIntersecting);
    });
  }, observerOptions);

  // Card Observer (handles all cards)
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = cards.indexOf(entry.target);
        const delay = cardIndex * 250; // 0ms, 500ms, 1000ms, 1500ms
        
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, delay);
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }, observerOptions);

  // Start observing
  headObserver.observe(contentHead);
  cards.forEach(card => cardObserver.observe(card));
}
document.addEventListener('DOMContentLoaded', setupWhyAnimation);


// Function for Animated the top course section
function setupTopcoursesAnimation() {
  const topTitle = document.querySelector('.topcourses__title');
  const cards = [
    document.querySelector('.topcourses__cards-item--1'),
    document.querySelector('.topcourses__cards-item--2'),
    document.querySelector('.topcourses__cards-item--3'),
    document.querySelector('.topcourses__cards-item--4'),
    document.querySelector('.topcourses__cards-item--5'),
    document.querySelector('.topcourses__cards-item--6'),
    document.querySelector('.topcourses__cards-item--7'),
    document.querySelector('.topcourses__cards-item--8')
  ];

  // Safety check
  if (!topTitle || cards.some(card => !card)) return;

  const observerOptions = {
    threshold: 0.1, // More sensitive trigger
    rootMargin: '0px 0px -100px 0px'
  };

  // Title Observer
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('animated', entry.isIntersecting);
    });
  }, observerOptions);

  // Cards Observer with staggered animation
  const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = cards.indexOf(entry.target);
        const delay = cardIndex * 150; // 150ms between each card
        
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, delay);
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }, observerOptions);

  // Start observing
  titleObserver.observe(topTitle);
  cards.forEach(card => {
    // Set initial transform based on odd/even position
    const index = cards.indexOf(card);
    card.style.transform = index % 2 === 0 ? 'translateX(100%)' : 'translateX(-100%)';
    cardsObserver.observe(card);
  });
}
document.addEventListener('DOMContentLoaded', setupTopcoursesAnimation);


// Plan Animation
function setupPlansAnimation() {
  const plansTitle = document.querySelector('.plans__title');
  if (!plansTitle) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate spans first
        const spans = entry.target.querySelectorAll('h3 span');
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('animated');
          }, index * 300); // Stagger span animations
        });
        
        // Then animate headings
        setTimeout(() => {
          entry.target.querySelector('h3').classList.add('animated');
          entry.target.querySelector('h2').classList.add('animated');
        }, 600);
      } else {
        // Reset animations when out of view
        entry.target.querySelectorAll('h3 span, h3, h2').forEach(el => {
          el.classList.remove('animated');
        });
      }
    });
  }, observerOptions);

  titleObserver.observe(plansTitle);
}
document.addEventListener('DOMContentLoaded', setupPlansAnimation);

// Categories Animation
function setupCategoriesAnimation() {
  const categoriesTitle = document.querySelector('.categories__title');
  if (!categoriesTitle) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate spans first
        const spans = entry.target.querySelectorAll('h3 span');
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('animated');
          }, index * 300); // Stagger span animations
        });
        
        // Then animate headings
        setTimeout(() => {
          entry.target.querySelector('h3').classList.add('animated');
          entry.target.querySelector('h2').classList.add('animated');
        }, 600);
      } else {
        // Reset animations when out of view
        entry.target.querySelectorAll('h3 span, h3, h2').forEach(el => {
          el.classList.remove('animated');
        });
      }
    });
  }, observerOptions);

  titleObserver.observe(categoriesTitle);
}
document.addEventListener('DOMContentLoaded', setupCategoriesAnimation);


//Blog animation
function setupBlogTitleAnimation() {
  const blogTitle = document.querySelector('.blog__title');
  if (!blogTitle) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const h3 = entry.target.querySelector('h3');
      const h2 = entry.target.querySelector('h2');
      const p = entry.target.querySelector('p');
      const spans = entry.target.querySelectorAll('h3 span');

      if (entry.isIntersecting) {
        // Animate spans with stagger
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('animated');
          }, index * 300);
        });

        // Animate headings and paragraph
        setTimeout(() => {
          h3.classList.add('animated');
          h2.classList.add('animated');
          p.classList.add('animated');
        }, 600);
      } else {
        // Reset all animations when leaving view
        spans.forEach(span => span.classList.remove('animated'));
        h3.classList.remove('animated');
        h2.classList.remove('animated');
        p.classList.remove('animated');
      }
    });
  }, observerOptions);

  observer.observe(blogTitle);
}
document.addEventListener('DOMContentLoaded', setupBlogTitleAnimation);




// Mobile menu

const menuToggle = document.querySelector('.mobile__menu-toggle');
const menu = document.querySelector('.mobile__menu');
const menuClose = document.querySelector('.mobile__menu-close');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});



menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });
  