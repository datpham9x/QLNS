$(document).ready(function () {
    $('#datepicker').datepicker({
        format: 'yyyy-mm-dd', // Định dạng ngày
        autoclose: true, // Tự đóng Datepicker sau khi chọn ngày
        startView: 'months', // Hiển thị ban đầu là tháng
        minViewMode: 'months', // Cho phép chọn tháng
    });
});

$('#datepicker').datepicker().on('changeDate', function (e) {
    const selectedDate = new Date(e.date);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    // Tính toán và hiển thị tất cả các ngày trong tháng
    displayAllDaysInMonth(year, month);
});

function displayAllDaysInMonth(year, month) {
    // Lấy số ngày trong tháng
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Hiển thị các ngày trong tháng
    let daysHtml = '';
    for (let day = 1; day <= daysInMonth; day++) {
        daysHtml += `<div>${year}-${month + 1}-${day}</div>`;
    }

    // Hiển thị danh sách các ngày trong tháng
    $('#days-in-month').html(daysHtml);
}
