function changelogoutBtnId() {
    // get logout button in nav
    const adminLogoutBtn = document.querySelector('#logout');
    adminLogoutBtn.setAttribute('id',"admin-logout");
};

changelogoutBtnId();