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
// console.log(sum(12, 32));

function add(a = 0, b = 0) {
  const total = a + b;
  return total;
}
add(9, 10);

// ! Hoặc có thể làm như sau
// ! Gán function cho 1 biến "add" nhưng chưa gọi nó ra.
const sum2 = add;
console.log(`Kết quả của sum2 = ${sum2(9, 8)}`);

// * Cách gọi như sau:
sum2(300, 400);

// Todo: Tính trung bình của 2 số a và b
function average(a, b, fn) {
  const total2 = fn(a, b);
  return total2 / 2;
}

let c = average(300, 200, sum2);
console.log(`Kết quả tính trung bình = ${c}`);

// ! Anonymous Functions
