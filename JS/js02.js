
let thang = prompt("Nhập tháng");
let nam = prompt("Nhập năm", "2000");


thang = parseInt(thang);
nam = parseInt(nam);

let soNgay = 0;

if (thang >= 1 && thang <= 12) {
    switch(thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
            
            if ((nam % 400 === 0) || (nam % 4 === 0 && nam % 100 !== 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
            break;
    }

    document.getElementById('ket-qua-ngay').innerText = `Tháng ${thang} năm ${nam} có ${soNgay} ngày`;
} else {
    document.getElementById('ket-qua-ngay').innerText = "Tháng bạn nhập không hợp lệ!";
}

document.getElementById('btn-xem-gio').addEventListener('click', function() {

    document.getElementById('khu-vuc-thoi-gian').style.display = 'block';

    function capNhatThoiGian() {
        let hienTai = new Date();
        
       
        let mangThu = ["Chủ nhật", "thứ 2", "thứ 3", "thứ 4", "thứ 5", "thứ 6", "thứ 7"];
        
        let thu = mangThu[hienTai.getDay()];
        let ngay = hienTai.getDate();
        let thangHT = hienTai.getMonth() + 1; 
        let namHT = hienTai.getFullYear();
        
        let gio = hienTai.getHours();
        let phut = hienTai.getMinutes();
        let giay = hienTai.getSeconds();

        gio = gio < 10 ? '0' + gio : gio;
        phut = phut < 10 ? '0' + phut : phut;
        giay = giay < 10 ? '0' + giay : giay;
        
       
        document.getElementById('ngay-thang-nam').innerText = `Hôm nay, ${thu} ngày ${ngay}/${thangHT}/${namHT}`;
        document.getElementById('dong-ho').innerText = `${gio}:${phut}:${giay}`;
    }

    capNhatThoiGian();
    

    setInterval(capNhatThoiGian, 1000);
});