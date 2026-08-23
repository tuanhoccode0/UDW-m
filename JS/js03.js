
function thongKe() {
    let str = document.getElementById('chuoi-nhap').value;
    
   
    let totalChars = str.length;


    let words = str.trim() === "" ? 0 : str.trim().split(/\s+/).length;


    let charMap = {};
    let upperStr = str.toUpperCase();

    for (let char of upperStr) {
        if (/[A-Z0-9]/.test(char)) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
    }

   
    let sortedKeys = Object.keys(charMap).sort();
   
    let htmlContent = `Characters: ${totalChars} <br> Words: ${words} <br>`;
    
    sortedKeys.forEach(key => {
        htmlContent += `Character '${key}': ${charMap[key]} <br>`;
    });

    document.getElementById('ket-qua').innerHTML = htmlContent;
}