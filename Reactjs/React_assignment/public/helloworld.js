// var message:string = "Hello world!!!"
// var bool:boolean = true;
// console.log(bool);
// const myMap = new Map();
// myMap.set("MSSV123", "Nguyen A");
// myMap.set("MSSV111","Nguyen B");
// console.log(myMap.size);
// console.log(myMap.get("MSSV123"));
function displayInput() {
    var _a, _b;
    var userInput = (_a = document.getElementById("inputString1")) === null || _a === void 0 ? void 0 : _a.textContent;
    console.log("Bạn đã nhập: " + userInput);
    var userInput2 = (_b = document.getElementById("inputString2")) === null || _b === void 0 ? void 0 : _b.textContent;
    console.log("Bạn đã nhập: " + userInput2);
}
function countChar() {
    var str = document.getElementById("inputString1");
    var result = str.value.replace(/\s+/g, '').length;
    console.log(result);
    var countString = document.getElementById("countString");
    countString.innerHTML = "S\u1ED1 l\u01B0\u1EE3ng k\u00ED t\u1EF1: ".concat(result);
}
