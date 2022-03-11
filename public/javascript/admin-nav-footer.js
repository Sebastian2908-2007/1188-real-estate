// this file will render the nav and footer according to whether or not we are the admin or public side of the app
// this gets the path of current page and spits it so later its indexes can be compared for conditional rendering in list elements 
const path = window.location.pathname.split('/');
// get dropdown container element
const dropdown =  document.getElementById('dropdown');
const dropDownContent = document.querySelector('#dropdown-content');


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
    
    // change #dropdown to margin-right 20% when on admin side
   dropdown.style.margin = '0 18% 0 0';
   dropDownContent.style.padding = '0%';
   navList.style.alignItems = 'center';
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