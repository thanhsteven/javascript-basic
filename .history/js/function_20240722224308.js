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
  // console.log("is it working ?");
  // console.log(a + b);
  return a + b;
}
// Cách gọi 1 function
console.log(sum());
