// ! Function là để thực hiện 1 chức năng nào đó và chúng ta sẽ chia nhỏ nó ra để sử dụng đi sử dụng lại ở nhiều nơi.
// ! Cách khai báo 1 function
// Todo: Cú pháp
// function functionName(parameters) {}

let a = 10;
let b = 90;
function tinhTong() {
  console.log(a + b);
}
tinhTong();

// Cách viết 1 hàm function
function sum(a, b) {
  return a + b;
}
// Cách gọi 1 function
console.log(sum(12, 32));

function sum2(a = 0, b = 0) {
  const total = a + b;
  return total;
}
// console.log(sum2(9, 8));
sum2(9, 10);
// ! Gán function cho 1 biến add nhưng chưa được gọi ra
const add = sum2;
// * Cách gọi như sau:
sum2(300, 400);
