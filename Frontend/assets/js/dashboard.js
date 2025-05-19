function initializeSidebarEvents() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Hàm để đặt trạng thái active dựa trên URL hiện tại
    function setActiveMenuItem() {
        const currentPath = window.location.pathname; // Lấy đường dẫn hiện tại (ví dụ: /index.html, /employees/list.html)
        menuItems.forEach(item => {
            const itemPath = item.getAttribute('onclick').match(/'([^']+)'/)[1]; // Lấy đường dẫn từ onclick
            // So sánh đường dẫn (bỏ qua gốc server nếu có)
            if (currentPath === itemPath || currentPath === itemPath.replace(/^\/+/, '')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Đặt trạng thái active khi tải trang
    setActiveMenuItem();

    // Xử lý sự kiện click
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active')); // Xóa class active khỏi tất cả
            this.classList.add('active'); // Thêm class active cho mục vừa nhấn
        });
    });

    // Xử lý responsive cho sidebar
    const sidebarHeader = document.querySelector('.sidebar-header');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarHeader && sidebar) {
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
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo sự kiện cho sidebar
    initializeSidebarEvents();

    // Cập nhật số liệu giả lập (giữ nguyên từ code cũ)
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