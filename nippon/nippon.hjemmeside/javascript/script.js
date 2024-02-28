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
  document.addEventListener('DOMContentLoaded', function () {
    const personButtons = document.querySelectorAll('.antal-personer .person-knap');
    const dageButtons = document.querySelectorAll('.antal-dage .person-knap');
    const næsteButton = document.querySelector('.choose');
    const fejlmeddelelse = document.querySelector('.fejlmeddelelse');

    let selectedPersonButton = null;
    let selectedDageButton = null;

    function velgAntallPersoner(valg) {
        handleButtonClick(this, 'selected', valg, 'antal-personer', 'person-knap', selectedPersonButton);
        selectedPersonButton = this;
        checkForValidSelection();
    }

    function velgAntallDage(valg) {
        handleButtonClick(this, 'selected', valg, 'antal-dage', 'person-knap', selectedDageButton);
        selectedDageButton = this;
        checkForValidSelection();
    }

    function handleButtonClick(clickedButton, selectedClass, valg, categoryClass, buttonClass, selectedButton) {
        const categoryButtons = document.querySelectorAll(`.${categoryClass} .${buttonClass}`);

        // Hvis den allerede er valgt, fjern markeringen
        if (selectedButton === clickedButton) {
            clickedButton.classList.remove(selectedClass);
            selectedButton = null;
        } else {
            // Fjern markering fra alle knapper i kategorien
            categoryButtons.forEach(button => {
                button.classList.remove(selectedClass);
            });

            // Markér den valgte knap
            clickedButton.classList.add(selectedClass);

            // Opdater her, hvad du vil gøre med valget (fx sende det til serveren eller gemme det lokalt)
            console.log(`Valgt ${categoryClass}: ${valg}`);
        }
    }

    function checkForValidSelection() {
        const personValgt = selectedPersonButton !== null;
        const dageValgt = selectedDageButton !== null;

        // Aktivér Næste-knappen, hvis mindst én knap er valgt i både antal personer og antal dage
        næsteButton.disabled = !(personValgt && dageValgt);

        // Vis fejlmeddelelse, hvis ingen knapper er valgt
        if (!personValgt && !dageValgt) {
            fejlmeddelelse.textContent = 'Vælg mindst én knap for både antal personer og antal dage';
        } else {
            fejlmeddelelse.textContent = '';
        }
    }

    // Lyt efter klik på hver knap i antal personer
    personButtons.forEach(button => {
        button.addEventListener('click', function () {
            const valg = this.value;
            velgAntallPersoner.call(this, valg);
        });
    });

    // Lyt efter klik på hver knap i antal dage
    dageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const valg = this.value;
            velgAntallDage.call(this, valg);
        });
    });

    // Tjek for gyldigt valg ved siden af indlæsning
    checkForValidSelection();
});

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

  
 

  
  
  
