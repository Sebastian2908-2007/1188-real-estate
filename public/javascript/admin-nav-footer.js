// this file will render the nav and footer according to whether or not we are the admin or public side of the app
// this gets the path of current page and spits it so later its indexes can be compared for conditional rendering in list elements 
const path = window.location.pathname.split('/');

function navList() {
  // get logout button in nav
  const adminLogoutBtn = document.querySelector('#logout');
    // getting the nav ul by it's id
    const navList = document.querySelector('#nav-list');
  if(path[1] === 'admin') {
    navList.innerHTML = "<li><a>Users</a></li>";
    // change id of logout button on admin side
    adminLogoutBtn.setAttribute('id',"admin-logout");
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