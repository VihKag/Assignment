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

function countChar(){
    const str:any = document.getElementById("inputString1");
    const result:any = str.value.replace(/\s+/g,'').length;
    console.log(result);
    const countString:any = document.getElementById("countString");
    // countString.innerHTML = `Số lượng kí tự: ${result}`;
    displayResult(countString, "Số lượng kí tự: ",result);
}

function displayResult(element:any, text:string, result:any){
    element.innerHTML = text + result;
    console.log(text + result)
}

function upperName(){
    let uppername : any= (<HTMLInputElement>document.querySelector("#inputString1")).value;
    const result:string = uppername?.charAt(0).toUpperCase()+uppername?.slice(1);
    const upperstring:any = document.getElementById("upperString");
    displayResult(upperstring, "Chỉnh sửa tên viết hoa chữ cái đầu: ",result);
}
function concateString(){
    const concatchar :any = document.getElementById("concatChar");
    let string1 : any= (<HTMLInputElement>document.querySelector("#inputString1")).value;
    let string2 : any= (<HTMLInputElement>document.querySelector("#inputString2")).value;
    const result:any= string1?.concat(" ", string2);//string1=string1+" "+string2
    displayResult(concatchar, "Nối hai chuỗi s1 và s2: ",result)
}
function upperCaseChar(){
    const outputupper:any = <HTMLInputElement>document.querySelector("#outputupper");
    const str:any = (<HTMLInputElement>document.querySelector("#inputString1")).value;
    for(let i:number=0; i< str.length; i++){
        var result: string = str.slice(i,i+1).toUpperCase();
        createAndAppendElementHTML("p",outputupper,`Kí tự thứ ${i+1} là: ${result}` )
    }
}

function createAndAppendElementHTML(tagName:string, parentElement:HTMLElement, text?:string){
    const element: HTMLElement = document.createElement(tagName);
    if(text){
        element.textContent=text;
    }
    parentElement.appendChild(element);
    
}


