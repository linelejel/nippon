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

  // javascript til valg side
  // function velgAntall(num) {
    const buttons = document.getElementsByClassName('person-knap');
  
  function changeColor(event) {
    event.target.style.backgroundColor = "red"; 
  }

    buttons.addEventListener("click", changeColor); 
  

  //   var selectedButton = document.querySelector('.person-knapper .person-knap:nth-child(' + num + ')');
  //   selectedButton.classList.add('person-knap-selected');
  // }
  
  

  /*Næste knap betalingsmetode */
  function submitForm() {
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (selectedPaymentMethod) {
      // Brugeren har valgt en betalingsmetode, fortsæt med at sende formularen
      document.querySelector('form.betalingsmetode').submit();
    } else {
      // Brugeren har ikke valgt en betalingsmetode, vis en fejlmeddelelse eller tag andre handlinger
      alert('Vælg venligst en betalingsmetode.');
    }
  }

  
  
  
