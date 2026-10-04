'use strict';
// Content and navigation work without JavaScript. Printing is an enhancement.
const printButton = document.querySelector('.print-button');
const education = document.querySelector('.earlier-education');
let educationWasOpen;
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
window.addEventListener('beforeprint', () => {
  if (education && typeof educationWasOpen !== 'boolean') {
    educationWasOpen = education.open;
    education.open = true;
  }
});
window.addEventListener('afterprint', () => {
  if (education && typeof educationWasOpen === 'boolean') {
    education.open = educationWasOpen;
    educationWasOpen = undefined;
  }
});
const year = document.getElementById('copyright-year');
if (year) year.textContent = String(new Date().getFullYear());
