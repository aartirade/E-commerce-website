//purchase-details

function addPurchase(PurchaseTB) {
  var Temail = prompt("Enter Email ");
  var Tphone = prompt("Enter Phone number");
  var Tpassword = prompt("Enter Password");

  var x = document.getElementById("PurchaseTB").insertRow(1);
  var a = x.insertCell(0);
  var b = x.insertCell(1);
  var c = x.insertCell(2);

  a.innerHTML = Temail;
  b.innerHTML = Tphone;
  c.innerHTML = Tpassword;
}

// Login-info

function addLogin(LoginTB) {
  var Email = prompt("enter your email id");
  var Num = prompt("enter your phone number");
  var Password = prompt("enter your password");

  var x = document.getElementById("LoginTB").insertRow(1);
  var a = x.insertCell(0);
  var b = x.insertCell(1);
  var c = x.insertCell(2);

  a.innerHTML = Email;
  b.innerHTML = Num;
  c.innerHTML = Password;
}

//product-info

function addProduct(ProductTB) {
  var ProductID = prompt("enter Product Id ");
  var ProductTitle = prompt("enter Product Title ");
  var ProductPrice = prompt("enter product price");

  var x = document.getElementById("ProductTB").insertRow(1);
  var a = x.insertCell(0);
  var b = x.insertCell(1);
  var c = x.insertCell(2);

  a.innerHTML = ProductID;
  b.innerHTML = ProductTitle;
  c.innerHTML = ProductPrice;
}

//Login-page

function login() {
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("phone").value;
  var Password = document.getElementById("password").value;

  localStorage.setItem("email", Email);
  localStorage.setItem("phone", Phone);
  localStorage.setItem("password", Password);

  var storeMail = localStorage.getItem("email");

  if (Password == "") {
    alert("Please Fill your Form First");
  } else if (Email == "") {
    alert("Please Fill your Form First");
  } else {
    window.alert("You've Sucessfully Logged in");
    window.open("index.html", "_self");
  }

  if (Email == "admin" && (Password = "admin")) {
    window.open("admin.html", "_self");
  } else console.log("Username or Password Incorrect");
}

// Buy-tshirt

function buy1() {
  var x = document.getElementById("t1").innerHTML;
  alert("You have purchased " + x + "");
}

function buy2() {
  var x = document.getElementById("t2").innerHTML;
  alert("You have purchased " + x + "");
}

function buy3() {
  var x = document.getElementById("t3").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy4() {
  var x = document.getElementById("t4").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy5() {
  var x = document.getElementById("t5").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy6() {
  var x = document.getElementById("t6").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy7() {
  var x = document.getElementById("t7").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy8() {
  var x = document.getElementById("t8").innerHTML;
  alert(" You have purchased " + x + "");
}

function buy9() {
  var x = document.getElementById("t9").innerHTML;
  alert(" You have purchased " + x + "");
}
