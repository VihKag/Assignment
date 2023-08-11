// var message:string = "Hello world!!!"
// var bool:boolean = true;
// console.log(bool);
// const userInput = prompt("Nhập vào một chuỗi:");
// console.log("Bạn đã nhập: " + userInput);
function displayInput() {
    const userInput = document.getElementById("inputString1").value;
    console.log("Bạn đã nhập: " + userInput);
    const userInput2 = document.getElementById("inputString2").value;
    console.log("Bạn đã nhập: " + userInput2);
}

function countChar(){
    const str = document.getElementById("inputString1");
    const result = str.value.replace(/\s+/g,'').length;
    console.log(result);
    const countString = document.getElementById("countString");
    countString.innerHTML = `Số lượng kí tự: ${result}`;
}
