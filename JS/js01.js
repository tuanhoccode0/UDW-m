
let htmlContent = '<table>';


htmlContent += '<tr><th colspan="4">BẢNG CỬU CHƯƠNG</th></tr>';

// Bảng được chia thành 2 hàng lớn
for (let row = 0; row < 2; row++) {
    htmlContent += '<tr>';
    
    // Mỗi hàng chứa 4 cột
    for (let col = 2; col <= 5; col++) {
        // Tính toán xem đang ở bảng nhân mấy
        let num = row * 4 + col; 
        
        htmlContent += '<td>';
        
        // Vòng lặp in các phép nhân từ 2 đến 9
        for (let i = 2; i <= 9; i++) {
            htmlContent += `${num} x ${i} = ${num * i} <br>`;
        }
        
        htmlContent += '</td>';
    }
    htmlContent += '</tr>';
}

htmlContent += '</table>';

// Đẩy chuỗi HTML vào thẻ div trên giao diện
document.getElementById('bang-cuu-chuong').innerHTML = htmlContent;