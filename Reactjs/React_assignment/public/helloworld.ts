// count the number of characters in a string
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
// capitalize first letter
function upperName(){
    let uppername : any= (<HTMLInputElement>document.querySelector("#inputString1")).value;
    const result:string = uppername?.charAt(0).toUpperCase()+uppername?.slice(1);
    const upperstring:any = document.getElementById("upperString");
    displayResult(upperstring, "Chỉnh sửa tên viết hoa chữ cái đầu: ",result);
}
// Concatenate two character strings
function concateString(){
    const concatchar :any = document.getElementById("concatChar");
    let string1 : any= (<HTMLInputElement>document.querySelector("#inputString1")).value;
    let string2 : any= (<HTMLInputElement>document.querySelector("#inputString2")).value;
    const result:any= string1?.concat(" ", string2);//string1=string1+" "+string2
    displayResult(concatchar, "Nối hai chuỗi s1 và s2: ",result)
}
// capitalize each character in the string
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
// get full name
function getFullName(){
    const lastname:any = prompt("Nhập họ của bạn: ");
    const firstname : any = prompt("Nhập tên của bạn: ");
    const fullname: string = `${lastname} ${firstname}`;
    const displayFullName:any = document.querySelector("#fullName");
    displayResult(displayFullName,"Họ tên: ", fullname);
}

// split full name
function splitFullName(){
    const outputsplitfullname:any=document.querySelector("#outputsplitfullname");
    const fullname: any = prompt("Nhập họ tên: ");
    const partsname: any[]=fullname.split(" ");
    const firstname:string = partsname[partsname.length-1];
    const lastname:string = partsname[0];
    const middlename:any = partsname.slice(1,partsname.length-1).join(" ");
    createAndAppendElementHTML("p",outputsplitfullname,`Người dùng nhập tên: ${fullname}`);
    createAndAppendElementHTML("p",outputsplitfullname,`Họ là: ${lastname}`);
    createAndAppendElementHTML("p",outputsplitfullname,`Tên đệm là: ${middlename}`);
    createAndAppendElementHTML("p",outputsplitfullname,`Tên là: ${firstname}`);
}

// format fullname
function formatName(){
    const name:any=document.querySelector("#outputformatname");
    const fullname:any=prompt("Nhập họ tên: ");
    const result:string = fullname
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
        .join(" ");
    createAndAppendElementHTML("p",name,`Họ và tên chuẩn hóa: ${result}`);

}





