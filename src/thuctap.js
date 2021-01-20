//In ra các phần tử âm của mảng

function negative(array) {
  for (let i = 0; i < array.length; i++) {
    const soAm = array[i];
    if (soAm < 0) console.log(soAm);
  }
}
negative([2, 1, -2, 4, -3]);

//Tách 1 mảng thành 2 mảng chăn và lẻ

function chanLe(mang) {
  let ketQua = {
    mangChan: [],
    mangLe: []
  };
  mang.forEach(function (item, index) {
    if (item % 2 == 0) ketQua.mangChan.push(item);
    else ketQua.mangLe.push(item);
  });
  return ketQua;
}
console.log(chanLe([1, 2, 3, 4, 5]));
// Chèn X vào vị trí đầu của mảng 1 chiều
function chenx(mang) {
  mang.unshift("x");
  return mang;
}
console.log(chenx([1, 2, 4, 6]));

//Lấy ra các phần tử chẵn và nhỏ hơn 20
function layMangChan(mang) {
  let ketQua = [];
  mang.forEach(function (item, index) {
    if (item % 2 == 0 && item < 20) ketQua.push(item);
  });
  return ketQua;
}
console.log(layMangChan([1, 2, 3, 4, 5, 6]));
//Nối 2 mảng số nguyên
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function chain(array1, array2) {
  return array1.concat(array1, array2);
}
console.log("" + array1.concat(array2));

//- Tính tổng các phần tử ở vị trí chẵn trong mảng 1 chiều
function total_array(array) {
  let total = 0;
  array.forEach(function (item, index) {
    if (index % 2 == 0) {
      total += item;
    }
  });
  return total;
}
console.log(total_array([1, 2, 3, 4, 5, 6, 7]));
//Tìm vị trí của phần tử nhỏ nhất trong mảng 1 chiều
function smallest(array) {
  let min = array[0];
  let vitri = 0;
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      vitri = i;
    }
  }
  return vitri;
}
console.log(smallest([1, 2, 3, 4, 5, 6]));
//Xóa phần tử có giá trị lớn nhất trong mảng
function biggest(array8) {
  let max = array8[0];
  for (let i = 1; i < array8.length; i++) {
    if (max < array8[i]) {
      max = array8[i];
    }
  }
  let location = array8.indexOf(max);
  array8.splice(location, 1);

  return array8;
}
console.log(biggest([1, 2, 3, 4, 5, 6, 7, 8, 8]));
// Sắp xếp mảng theo thứ tự giảm dần
