document.addEventListener("DOMContentLoaded", function () {
    // Lấy ra input số lượng
    var quantityInput = document.getElementById('quantityInput');

    // Mặc định số lượng là 1
    var quantity = 1;
    quantityInput.value = quantity;

    // Xử lý sự kiện khi nhấn nút tăng
    document.getElementById('increaseButton').addEventListener('click', function () {
        quantity++;
        quantityInput.value = quantity;
    });

    // Xử lý sự kiện khi nhấn nút giảm
    document.getElementById('decreaseButton').addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });
});

function goBack() {
    window.history.back();
  }