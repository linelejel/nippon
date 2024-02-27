"use strict";
// javascript til måltidskasser filtrerigns side

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filter-buttonss img');
    const imageItems = document.querySelectorAll('.image-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
  
        // Skjul alle billeder
        imageItems.forEach(item => {
          item.style.display = 'none';
        });
  
        // Vis kun billeder med mindst ét matchende filter
        if (filterValue === 'all') {
          imageItems.forEach(item => {
            item.style.display = 'flex';
          });
        } else {
          imageItems.forEach(item => {
            const filters = item.getAttribute('data-filter').split(' ');
  
            if (filters.includes(filterValue)) {
              item.style.display = 'flex';
            }
          });
        }
      });
    });
  });



<<<<<<< Updated upstream
  
  
  
=======

>>>>>>> Stashed changes
