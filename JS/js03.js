// js03.js
function thongKe() {
    let str = document.getElementById('chuoi-nhap').value;
    
    // 1. Đếm tổng số ký tự (bao gồm cả khoảng trắng)
    let totalChars = str.length;

    // 2. Đếm số từ (cắt chuỗi bằng regex các khoảng trắng)
    let words = str.trim() === "" ? 0 : str.trim().split(/\s+/).length;

    // 3. Đếm tần suất xuất hiện của các chữ cái và số
    let charMap = {};
    let upperStr = str.toUpperCase();

    for (let char of upperStr) {
        if (/[A-Z0-9]/.test(char)) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
    }

    // Sắp xếp các ký tự theo thứ tự tăng dần
    let sortedKeys = Object.keys(charMap).sort();

    // 4. In kết quả ra HTML
    let htmlContent = `Characters: ${totalChars} <br> Words: ${words} <br>`;
    
    sortedKeys.forEach(key => {
        htmlContent += `Character '${key}': ${charMap[key]} <br>`;
    });

    document.getElementById('ket-qua').innerHTML = htmlContent;
}