document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const sidebarHeader = document.querySelector('.sidebar-header');
    const sidebar = document.querySelector('.sidebar');

    sidebarHeader.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
            sidebar.classList.toggle('expanded');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            sidebar.classList.remove('expanded');
        }
    });

    setInterval(function() {
        const statValues = document.querySelectorAll('.stat-info h2');
        statValues.forEach(stat => {
            const currentValue = parseInt(stat.textContent);
            const change = Math.floor(Math.random() * 3) - 1;
            const newValue = currentValue + change;
            if (newValue >= 0) {
                stat.textContent = newValue;
            }
        });
    }, 5000);
});