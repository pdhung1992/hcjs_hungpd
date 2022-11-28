// code JS
var x = 10; // > du lieu kieu number
// let x = 10;
x = "hello"; //dynamic datatype > chuyen sang kieu string
var t = true; // > kieu boolean

console.log(x); //tuong duong print

var y = 20;

var z = y+10; // =30 -> number+number=number

var k = x+y; // =hello20 -> string=number=string > noi chuoi giong strcat() trong C++
// cong theo thu tu truoc sau

console.log(k);
console.log(y);

//dieu kien re nhanh
if (y>10){

}else{

}

//vong lap
for (var j=0; j<10; j++){
    console.log("j="+j)
}

console.log("gia tri cua y= "+y+", gia tri dep");
//in chuoi kem gia tri cua bien vao, su dung cap dau ` `
console.log(`gia tri cua y= ${y}, gia tri dep`);

//function

//khai bao

function tinhtong(a,b){
    //return a + b;
    console.log(a+b);
}
var kq = tinhtong(4,5);
console.log(kq);

// mang
var arr = [];
//uu diem
//1.khong bi gioi han so luong phan tu
//2. cac phan tu khong can co kieu du lieu giong nhau
arr[1] = 15;
arr[2] = "abc";
arr[3] = true;
arr.push(17); // tuong duong arr[3] = 17;
arr.push("xyz"); // arr[4] = xyz;

//print
for (var i=0; i< arr.length; i++){
    console.log(arr[i]);
}

//alert("alert");// hien thong bao

// var rs = confirm("Bạn chắc chắn muốn nộp bài?"); // xác nhận, trả về kiểu boolean
// if (rs == true){
//     console.log("oke");
// }else {
//     console.log("cancel");
// }

// var s = prompt("Vui lòng nhập họ tên:");// return string
// console.log(s);
// nếu nhập + OK > string
// nếu không nhập + OK > string rỗng
// nếu ấn cancel > null

// setTimeout(function () { //tạo độ trễ - delay
//     alert("hello");
// }, 3000);

// var i = 0;
// setInterval(function () {
//     console.log("i="+i);
//     i++;
// }, 3000);// cứ 3s chạy 1 lần, không dừng.

var min = 10;
var sec = 0;
var timer = setInterval(function () {
    // var m = min;
    // if(m < 10){
    //     m = "0"+min;
    // }
//     var m = min<10?"0"+min:min;
//     var s = sec<10?"0"+sec:sec; //toán tử 3 ngôi
//     console.log(m+":"+s);
//     sec--;
//     if(sec < 0){
//         min--;
//         sec = 59;
//     }
//     if(min < 0){
//         alert("het gio");
//         clearInterval(timer);
//     }
// }, 1000);

var span_min = document.getElementById("minutes");
var span_sec = document.getElementById("seconds");
    var m = min<10?"0"+min:min;
    var s = sec<10?"0"+sec:sec; //toán tử 3 ngôi
    span_min.innerText = m;
    span_sec.innerText = s;
    sec--;
    if(sec < 0){
        min--;
        sec = 59;
    }
    if(min < 0){
        clearInterval(timer);
    }
}, 1000);
