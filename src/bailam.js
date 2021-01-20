// function passedarray(array){
//   array.push(2,3)
//   array.unshift(7,8)
//   array.splice(2,2)
//   console.log(array.length);
//   return array;
// }
// console.log(passedarray([1,2,3,4,5,6]));
// //Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
// function tongGiaTriAm(array){
//   let negative = 0;
//   // array.forEach(function (item, index) {
//   //     if (item < 0) {
//   //         negative += item;
//   //     }
//   // });
//   // return negative;
//   for(let i = 0; i < array.length; i++){
//       if (array[i] < 0){
//           negative += array[i]
//       }
//   }
//   return negative;
// }
// console.log(tongGiaTriAm([1, 2,3,4,-5,-6,7]));
// //Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] truyền vào
// //Ví dụ [1,2,4,5,5], mảng truyền vào [1,3,5] => kết quả [1,5]
// function mang1chieu(array,array2){
//   let tuanpro = []
//   for(let i=0; i < array.length; i++){
//       if (array2.indexOf(array[i]) >-1) tuanpro.push(array[i]);

//   }
//   return tuanpro;
// }
// console.log(mang1chieu([1,2,3,4,5,6,7,8,9],[2,3,4,5]));
//Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên
// function tinhtrungbinh(array){
//   for (let i=0; i < array.length; i++){
//     if
//   }
// }
// - Một cửa hàng có danh sách các sản phẩm có thuộc tính sau
// + Tên
// + Giá
// + Số lượng đã bán

// Đề bài:
// - Tìm ra mặt hàng bán chạy nhất và doanh thu mặt hàng
// - Tính tổng doanh thu của cửa hàng
// - Tìm ra mặt hàng bán chậm nhất và xóa mặt hàng này đi
let sshop = [
  {
    name: "iphone12promax",
    price: 2000,
    quantitysold: 100
  },
  {
    name: "iphone12",
    price: 1000,
    quantitysold: 40
  },
  {
    name: "iphone22pro",
    price: 4000,
    quantitysold: 200
  }
];
// let bánchạynhất = [];
//  function mathang(){
//    let tong = 0;
//    for(let i=0; i< sshop.length;i++){
//       if (bánchạynhất < sshop[i].quantitysold){
//         bánchạynhất = sshop[i].quantitysold;
//           tong = bánchạynhất * sshop[i].price;
//         }
//       }
//       return tong;
//    }
//    console.log(
//     "mặt hàng bán chạy nhất là = " +
//     mathang((mathang = sshop[0].sold_quantity))
//     );
function total() {
  let big_Total = 0;
  for (let i = 0; i < sshop.length; i++) {
    big_Total += sshop[i].price * sshop[i].quantitysold;
  }
  return big_Total;
}
console.log(total());
