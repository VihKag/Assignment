// count the number of characters in a string
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
// capitalize first letter
function upperName() {
    var uppername = document.querySelector("#inputString1").value;
    var result = (uppername === null || uppername === void 0 ? void 0 : uppername.charAt(0).toUpperCase()) + (uppername === null || uppername === void 0 ? void 0 : uppername.slice(1));
    var upperstring = document.getElementById("upperString");
    displayResult(upperstring, "Chỉnh sửa tên viết hoa chữ cái đầu: ", result);
}
// Concatenate two character strings
function concateString() {
    var concatchar = document.getElementById("concatChar");
    var string1 = document.querySelector("#inputString1").value;
    var string2 = document.querySelector("#inputString2").value;
    var result = string1 === null || string1 === void 0 ? void 0 : string1.concat(" ", string2); //string1=string1+" "+string2
    displayResult(concatchar, "Nối hai chuỗi s1 và s2: ", result);
}
// capitalize each character in the string
function upperCaseChar() {
    var outputupper = document.querySelector("#outputupper");
    var str = document.querySelector("#inputString1").value;
    for (var i = 0; i < str.length; i++) {
        var result = str.slice(i, i + 1).toUpperCase();
        createAndAppendElementHTML("p", outputupper, "K\u00ED t\u1EF1 th\u1EE9 ".concat(i + 1, " l\u00E0: ").concat(result));
    }
}
function createAndAppendElementHTML(tagName, parentElement, text) {
    var element = document.createElement(tagName);
    if (text) {
        element.textContent = text;
    }
    parentElement.appendChild(element);
}
// get full name
function getFullName() {
    var lastname = prompt("Nhập họ của bạn: ");
    var firstname = prompt("Nhập tên của bạn: ");
    var fullname = "".concat(lastname, " ").concat(firstname);
    var displayFullName = document.querySelector("#fullName");
    displayResult(displayFullName, "Họ tên: ", fullname);
}
// split full name
function splitFullName() {
    var outputsplitfullname = document.querySelector("#outputsplitfullname");
    var fullname = prompt("Nhập họ tên: ");
    var partsname = fullname.split(" ");
    var firstname = partsname[partsname.length - 1];
    var lastname = partsname[0];
    var middlename = partsname.slice(1, partsname.length - 1).join(" ");
    createAndAppendElementHTML("p", outputsplitfullname, "Ng\u01B0\u1EDDi d\u00F9ng nh\u1EADp t\u00EAn: ".concat(fullname));
    createAndAppendElementHTML("p", outputsplitfullname, "H\u1ECD l\u00E0: ".concat(lastname));
    createAndAppendElementHTML("p", outputsplitfullname, "T\u00EAn \u0111\u1EC7m l\u00E0: ".concat(middlename));
    createAndAppendElementHTML("p", outputsplitfullname, "T\u00EAn l\u00E0: ".concat(firstname));
}
// format fullname
function formatName() {
    var name = document.querySelector("#outputformatname");
    var fullname = prompt("Nhập họ tên: ");
    var result = fullname
        .trim()
        .split(/\s+/)
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(" ");
    createAndAppendElementHTML("p", name, "H\u1ECD v\u00E0 t\u00EAn chu\u1EA9n h\u00F3a: ".concat(result));
}
