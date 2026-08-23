// js05.js

// Biến toàn cục để lưu lại giá trị gốc của S1 ngay khi trang vừa load xong
let originalS1 = "";

window.onload = function() {
    originalS1 = document.getElementById('s1').value;
};

// Hàm hỗ trợ lấy và gán giá trị cho nhanh
function getS1() { return document.getElementById('s1').value; }
function setS1(val) { document.getElementById('s1').value = val; }
function getS2() { return document.getElementById('s2').value; }
function getS3() { return document.getElementById('s3').value; }

// 1. Nút Chuẩn hóa chuỗi
function chuanHoa() {
    let str = getS1();
    
    // Xóa khoảng trắng 2 đầu và thay các khoảng trắng dư thừa ở giữa bằng 1 khoảng trắng
    str = str.trim().replace(/\s+/g, ' ');
    
    // Tách thành mảng các từ, viết hoa chữ cái đầu và viết thường các chữ cái sau
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    setS1(words.join(' '));
}

// 2. Nút Đảo chuỗi
function daoChuoi() {
    let str = getS1();
    // Xử lý khoảng trắng thừa trước khi đảo để chuỗi đẹp hơn
    let words = str.trim().replace(/\s+/g, ' ').split(' ');
    setS1(words.reverse().join(' '));
}

// 3. Nút Khôi phục
function khoiPhuc() {
    setS1(originalS1);
}

// 4. Nút Thay thế S2 bằng S3 (Không phân biệt hoa thường)
function thayThe() {
    let s1 = getS1();
    let s2 = getS2();
    let s3 = getS3();
    
    if (s2 === "") return; // Tránh lỗi regex khi chuỗi rỗng
    
    // RegExp với cờ 'gi' (g: global - toàn cục, i: ignore case - không phân biệt hoa thường)
    let regex = new RegExp(s2, 'gi');
    setS1(s1.replace(regex, s3));
}

// 5. Nút Chèn S2 vào S1
function chenChuoi() {
    let s1 = getS1();
    let s2 = getS2();
    let pos = parseInt(document.getElementById('pos').value);
    
    // Kiểm tra giá trị nhập vào của vị trí chèn
    if (isNaN(pos) || pos < 0 || pos > s1.length) {
        alert("Vị trí chèn không hợp lệ! Vui lòng nhập số từ 0 đến " + s1.length);
        return;
    }
    
    // Cắt và ghép chuỗi tại index 'pos'
    let result = s1.slice(0, pos) + s2 + s1.slice(pos);
    setS1(result);
}

// 6. Nút Xóa S2 trong S1 (Không phân biệt hoa thường)
function xoaChuoi() {
    let s1 = getS1();
    let s2 = getS2();
    
    if (s2 === "") return;
    
    // Dùng Regex thay thế S2 bằng chuỗi rỗng '' để xóa
    let regex = new RegExp(s2, 'gi');
    setS1(s1.replace(regex, ''));
}