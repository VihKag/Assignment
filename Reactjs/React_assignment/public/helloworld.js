// var message:string = "Hello world!!!"
// var bool:boolean = true;
// console.log(bool);
// const myMap = new Map();
// myMap.set("MSSV123", "Nguyen A");
// myMap.set("MSSV111","Nguyen B");
// console.log(myMap.size);
// console.log(myMap.get("MSSV123"));
// function displayInput() {
//     const userInput:any = document.getElementById("inputString1")?.textContent;
//     const userInput2:any = document.getElementById("inputString2")?.textContent;
//     // console.log("Bạn đã nhập: " + userInput2);
// }
function countChar() {
    var str = document.getElementById("inputString1");
    var result = str.value.replace(/\s+/g, '').length;
    console.log(result);
    var countString = document.getElementById("countString");
    // countString.innerHTML = `Số lượng kí tự: ${result}`;
    displayResult(countString, "Số lượng kí tự: ", result);
}
function displayResult(element, text, result) {
    element.innerHTML = text + result;
    console.log(text + result);
}
function upperName() {
    var uppername = document.querySelector("#inputString1").value;
    var result = (uppername === null || uppername === void 0 ? void 0 : uppername.charAt(0).toUpperCase()) + (uppername === null || uppername === void 0 ? void 0 : uppername.slice(1));
    var upperstring = document.getElementById("upperString");
    displayResult(upperstring, "Chỉnh sửa tên viết hoa chữ cái đầu: ", result);
}
function concateString() {
    var concatchar = document.getElementById("concatChar");
    var string1 = document.querySelector("#inputString1").value;
    var string2 = document.querySelector("#inputString2").value;
    var result = string1 === null || string1 === void 0 ? void 0 : string1.concat(" ", string2); //string1=string1+" "+string2
    displayResult(concatchar, "Nối hai chuỗi s1 và s2: ", result);
}
