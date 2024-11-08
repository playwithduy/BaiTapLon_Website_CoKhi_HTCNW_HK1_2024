document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var agreeTerms = document.getElementById("formCheck2").checked;

    if (!/^0\d{9}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ, vui lòng nhập số điện thoại bắt đầu bằng số 0 và có đúng 10 số!");
        return;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Mật khẩu phải có ít nhất 8 ký tự và không quá 16 ký tự!");
        return;
    }

    if (!agreeTerms) {
        alert("Bạn phải đồng ý với các điều khoản và điều kiện trước khi đăng ký!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp, vui lòng nhập lại!");
        return;
    }
    var user = {
        fullname: fullname,
        phone: phone,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Đăng ký thành công!");
    window.location.href = "../html/login.html";
});


// Lấy dữ liệu người dùng đã nhập
const fullname = document.getElementById("fullname").value;
const phone = document.getElementById("phone").value;
const password = document.getElementById("password").value;
const date = new Date().toLocaleString(); // Lấy thời gian đăng ký hiện tại

// Lấy danh sách các đăng ký hiện có từ localStorage
let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

// Thêm thông tin đăng ký mới vào danh sách
registrations.push({ fullname, phone, password, date });

// Lưu danh sách đăng ký vào localStorage
localStorage.setItem("registrations", JSON.stringify(registrations));



