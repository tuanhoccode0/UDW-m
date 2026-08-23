// js04.js

// Biến toàn cục để lưu trữ mảng đang thao tác
let mangHienTai = [];

function taoMang() {
    let n = parseInt(document.getElementById('so-phan-tu').value);
    
    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập số phần tử lớn hơn 0!");
        return;
    }

    // Làm mới mảng
    mangHienTai = [];
    
    // Khởi tạo mảng ngẫu nhiên với các giá trị < 50
    for (let i = 0; i < n; i++) {
        mangHienTai.push(Math.floor(Math.random() * 50));
    }

    // In mảng ban đầu
    document.getElementById('mang-ban-dau').innerText = "Mảng ban đầu:  " + mangHienTai.join("  ");
    
    // Xóa rỗng các kết quả sắp xếp trước đó (nếu có)
    document.getElementById('mang-tang').innerText = "Mảng tăng dần: ";
    document.getElementById('mang-giam').innerText = "Mảng giảm dần: ";
}

function sapXepTang() {
    if (mangHienTai.length === 0) return;
    
    // Clone mảng để không làm thay đổi mảng gốc
    let mangClone = [...mangHienTai];
    mangClone.sort((a, b) => a - b);
    
    document.getElementById('mang-tang').innerText = "Mảng tăng dần:  " + mangClone.join("  ");
}

function sapXepGiam() {
    if (mangHienTai.length === 0) return;
    
    let mangClone = [...mangHienTai];
    mangClone.sort((a, b) => b - a);
    
    document.getElementById('mang-giam').innerText = "Mảng giảm dần:  " + mangClone.join("  ");
}