// var message:string = "Hello world!!!"
// var bool:boolean = true;
// console.log(bool);
// const myMap = new Map();
// myMap.set("MSSV123", "Nguyen A");
// myMap.set("MSSV111","Nguyen B");

// console.log(myMap.size);
// console.log(myMap.get("MSSV123"));

function displayInput() {
    const userInput:any = document.getElementById("inputString1")?.textContent;
    console.log("Bạn đã nhập: " + userInput);
    const userInput2:any = document.getElementById("inputString2")?.textContent;
    console.log("Bạn đã nhập: " + userInput2);
}

function countChar(){
    const str:any = document.getElementById("inputString1");
    const result:any = str.value.replace(/\s+/g,'').length;
    console.log(result);
    const countString:any = document.getElementById("countString");
    // countString.innerHTML = `Số lượng kí tự: ${result}`;
    displayResult(countString, countString?.textContent,result);
}

function displayResult(element:any, text:string, result:any){
    element.innerHTML = text + result;
}
