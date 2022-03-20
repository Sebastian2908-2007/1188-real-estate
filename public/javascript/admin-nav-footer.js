// this file will render the nav and footer according to whether or not we are the admin or public side of the app
// this gets the path of current page and spits it so later its indexes can be compared for conditional rendering in list elements 
const path = window.location.pathname.split('/');
// get dropdown container element
const dropdown =  document.getElementById('dropdown');
const dropDownContent = document.querySelector('#dropdown-content');
// media query variables start
const minWidth768 = window.matchMedia('(min-width: 768px)');
const minWidth1024 = window.matchMedia('(min-width: 1024px)');
const minWidth1280 = window.matchMedia('(min-width: 1280px)');
const minWidth1366 = window.matchMedia('(min-width: 1366px)');
const minWidth1920 = window.matchMedia('(min-width: 1920px)');


function navList() {
    // getting the nav ul by it's id
    const navList = document.querySelector('#nav-list');
    const headerTitle = document.querySelector('#header-title');
  if(path[1] === 'admin') {
    navList.innerHTML = "<li><a href='/admin/users'>Users</a></li>";
    headerTitle.setAttribute('href', '/admin/dashboard');
    headerTitle.textContent = 'Admin Dashboard';
    headerTitle.style.fontSize = '90%';
    
    
      // padding that will work on dropdown content '18% 111% 1% 11%';
    
    // change #dropdown to margin-right 20% when on admin side 18
   dropdown.style.margin = '0 18% 0 0';
   dropDownContent.style.padding = '0%';
   navList.style.alignItems = 'center';

     // media query nested if else if block starts

  if(minWidth768.matches) {
    dropdown.style.margin = '0 44% 0 0';
  }

   if (minWidth1024.matches) {
    dropdown.style.margin = '0 55% 0 0';
  }

   if (minWidth1280.matches) {
    dropdown.style.margin = '0 65% 0 0';
  }

   if (minWidth1366.matches) {
    dropdown.style.margin = '0 67% 0 0';
  }

   if (minWidth1920.matches) {
    dropdown.style.margin = '0 72% 0 0';
  }


  }

    
   
};

function footerList() {
    const footerList = document.querySelector('#footer-list');
    if(path[1] === 'admin') {
        footerList.innerHTML = " ";
      }

};




navList();
footerList();