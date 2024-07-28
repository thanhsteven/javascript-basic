1. Block Scope

- Block Scope : là các dòng code nằm trong cặp dấu {} và chúng ta chỉ có thể truy xuất được những gì bên trong cặp {} này thôi.
- Và truy xuất thì cũng phải truy xuất bên trong cặp {} đó luôn chứ nếu ra ngoài rùi thì không còn truy xuất được gì nữa. --> Không thể truy xuất ra ngoài

Ví dụ
if (2 > 1) {
let number = 100;
const number2 = 999;
console.log(number) --> Đúng
consol.log(number2) --> Đúng
}
console.log(number) --> Sai
console.log(number2) --> Sai

2. Global Scope

- Là từ khoá var
- Đối với var thì nó là global scope và để nó ở đâu cũng có thể truy xuất vào được vì nó bị hoisting
- Hoisting là đưa cái biến đó lên trước tiên rồi mới chạy tiếp các chương trình khác.
