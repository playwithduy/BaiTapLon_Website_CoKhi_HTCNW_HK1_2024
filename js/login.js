document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginPhone = document.getElementById("loginPhone").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Lấy thông tin người dùng từ Local Storage
    var storedUser = localStorage.getItem("user");

    // Kiểm tra xem dữ liệu người dùng đã được lưu trong Local Storage hay chưa
    if (storedUser) {
        // Chuyển dữ liệu từ chuỗi JSON sang đối tượng JavaScript
        var user = JSON.parse(storedUser);

        // Kiểm tra xem số điện thoại và mật khẩu có khớp với dữ liệu đã lưu không
        if (loginPhone === user.phone && loginPassword === user.password) {
            alert("Đăng nhập thành công!");
            window.location.href = "../html/index.html";
        } else {
            alert("Sai số điện thoại hoặc mật khẩu!");
        }
    } else {
        alert("Tài khoản không tồn tại. Vui lòng đăng ký trước khi đăng nhập!");
    }
});
