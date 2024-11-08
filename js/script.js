// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});


var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}

$(document).ready(function () {
  $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

// // Khi người dùng nhấn nút "Tìm kiếm"
// document.getElementById('searchBtn').addEventListener('click', function () {
//   $('#searchModal').modal('show');
// });

// // Khi người dùng nhấn nút "Đóng" trong hộp thoại modal
// document.querySelector('#dong').addEventListener('click', function () {
//   $('#searchModal').modal('hide');
// });


document.addEventListener('DOMContentLoaded', function () {
  // Xử lý sự kiện khi nút tìm kiếm được click
  document.getElementById('searchSubmit').addEventListener('click', function () {
      // Lấy giá trị từ ô input
      var keyword = document.getElementById('searchInput').value;
      // Thực hiện tìm kiếm với từ khóa keyword...
      // Sau khi tìm kiếm xong, bạn có thể hiển thị kết quả ở đây
      alert("Đang tìm kiếm với từ khóa: " + keyword);
  });
});





