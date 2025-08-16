document.addEventListener('DOMContentLoaded', function () {
    const drawerIcon = document.getElementById('js-drawer-icon');
    const drawerContent = document.getElementById('js-drawer-content');

    drawerIcon.addEventListener('click', function () {
        // Toggle active class on the drawer icon
        drawerIcon.classList.toggle('active');
        // Toggle active class on the drawer content
        drawerContent.classList.toggle('active');
    });

    // Close the drawer when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!drawerContent.contains(event.target) && !drawerIcon.contains(event.target)) {
            drawerIcon.classList.remove('active');
            drawerContent.classList.remove('active');
        }
    });
});


