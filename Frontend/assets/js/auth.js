// assets/js/auth.js
// Hàm kiểm tra đăng nhập (sẽ được dùng ở các trang khác)
function checkAuth() {
    if (!localStorage.getItem('hrm_token')) {
      window.location.href = 'auth/login.html';
    }
  }
  
  // Hàm xử lý đăng nhập (dùng cho trang login.html)
  async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      // Giả lập API đăng nhập
      const response = { token: 'fake_token', user: { name: 'Admin' } };
      
      localStorage.setItem('hrm_token', response.token);
      localStorage.setItem('hrm_user', JSON.stringify(response.user));
      
      window.location.href = 'index.html';
    } catch (error) {
      alert("Đăng nhập thất bại: " + error.message);
    }
  }