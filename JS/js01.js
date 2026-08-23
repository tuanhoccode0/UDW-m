
let htmlContent = '<table>';


htmlContent += '<tr><th colspan="4">BẢNG CỬU CHƯƠNG</th></tr>';

for (let row = 0; row < 2; row++) {
    htmlContent += '<tr>';

    for (let col = 2; col <= 5; col++) {

        let num = row * 4 + col; 
        
        htmlContent += '<td>';
        

        for (let i = 2; i <= 9; i++) {
            htmlContent += `${num} x ${i} = ${num * i} <br>`;
        }
        
        htmlContent += '</td>';
    }
    htmlContent += '</tr>';
}

htmlContent += '</table>';


document.getElementById('bang-cuu-chuong').innerHTML = htmlContent;