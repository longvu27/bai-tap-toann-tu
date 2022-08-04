let inputLy;
let inputHoa;
let inputSinh;

inputLy = prompt('Điểm lý');
inputHoa = prompt('Điểm Hóa');
inputSinh = prompt('Điểm Sinh');

let Ly = parseFloat(inputLy);
let Hoa = parseFloat(inputHoa);
let Sinh =parseFloat(inputSinh);


let area = (Ly + Hoa + Sinh)/3;
document.write('Điểm trung bình cộng là' + area);
let area1 = (Ly + Hoa + Sinh);
document.write('Tổng' + area1);
