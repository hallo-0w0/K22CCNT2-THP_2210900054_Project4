// Kiểm tra đăng nhập
document.addEventListener('DOMContentLoaded', () => {
    // Giả lập kiểm tra đăng nhập (thay bằng logic thực tế)
    if (!localStorage.getItem('hrm_token')) {
      window.location.href = 'auth/login.html';
      return;
    }
  
    // Load dữ liệu dashboard
    loadDashboardData();
  
    // Xử lý đăng xuất
    document.getElementById('logout-btn').addEventListener('click', () => {
      localStorage.removeItem('hrm_token');
      window.location.href = 'auth/login.html';
    });
  });
  
  // Hàm load dữ liệu thống kê
  async function loadDashboardData() {
    try {
      // Giả lập API (thay bằng API thật khi có backend)
      const mockData = {
        totalEmployees: 42,
        totalDepartments: 6,
        attendanceToday: 38,
        activities: [
          {
            type: "new",
            message: "Nguyễn Văn A đã được thêm vào hệ thống",
            time: "10 phút trước"
          },
          {
            type: "update",
            message: "Phòng IT cập nhật chính sách",
            time: "1 giờ trước"
          }
        ]
      };
  
      // Hiển thị dữ liệu
      document.getElementById('total-employees').textContent = mockData.totalEmployees;
      document.getElementById('total-departments').textContent = mockData.totalDepartments;
      document.getElementById('attendance-today').textContent = mockData.attendanceToday;
  
      // Hiển thị hoạt động
      const activityList = document.getElementById('activity-list');
      activityList.innerHTML = mockData.activities.map(activity => `
        <li>
          <i class="fas fa-${activity.type === 'new' ? 'user-plus' : 'file-signature'} activity-icon ${activity.type}"></i>
          <div class="activity-content">
            <p>${activity.message}</p>
            <small>${activity.time}</small>
          </div>
        </li>
      `).join('');
  
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      alert("Có lỗi khi tải dữ liệu dashboard");
    }
  }