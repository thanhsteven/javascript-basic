// ! Array : Mảng - là một danh sách chứa nhiều giá trị hoặc phần tử trong đó
// * Có 2 cách tạo mảng cần biết:
// Array Literal
const student01 = ["kim thanh", 1200, null, true];
// Array Constructor
const student02 = new Array();
// Ví dụ về mảng
// Mảng đơn giản [null, 0, "kim thanh", flase]
// Mảng phức tạp [null, 0, "kim thanh", flase, ["kim thanh 2", 100, null, true]]
console.log(student01);
// * index: vị trí của phần tử (giá trị) trong mảng và bắt đầu từ 0 --> index chạy từ 0.
// * length: độ dài của mảng, bắt đầu đếm từ 1 --> số lượng các phần tử.

// Để truy xuất mảng thì dựa vào index --> student01[index]
console.log(student01.length);
console.log(student01[1]); // 1200
console.log(student01[5]); // undefine
// * Để lấy được phần tử cuối cùng trong mảng, thì ta dùng length
console.log(student01[student01.length - 1]);

// Phương thức hay dùng của mảng nên biết
// length : trả về số lượng phần tử trong mảng
console.log(student01.length);
// * reverse -> đảo ngược lại giá trị trong mảng
console.log("----array.reverse----");
console.log(student01.reverse());

// * join -> nối các phần tử trong mảng thành string
console.log("----array.join-----");
console.log(student01.join("-"));
