function hideShow(){
    let x = document.getElementById("hidden");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function listAdd(){
    let input = document.getElementById("carName").value;
    var list=document.getElementById("cars").innerHTML;
    if (!isFilled(input)){return alert("Nincs adat")}

if (list.indexOf(input) ==-1) {

        var tmp = document.getElementById("cars").innerHTML += "<li>" + input + "</li>";
}
else {return alert("Van már ilyen!")}

}

function isFilled(fieldValue){
    if (fieldValue==""||fieldValue==" "){

        return false;
    }
    return true;
}

function validateLname(){

    var lName=document.getElementById("lname").value;

    if (lName.includes(" ")||lName.charAt(0)===lName.charAt(0).toLowerCase()){
        return false;


    }
    else{return  true;}
}
function validateFname(){

    var fName=document.getElementById("fname").value;
    if (fName.includes(" ")||fName.charAt(0)===fName.charAt(0).toLowerCase()){
        return false;


    }
    else {return true;}
}
function validatePassword(){
    var password=document.getElementById("password").value;
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (password.length<8){
    return false;

    }
   if (!reg.test(password)){
        return false;

    }
   return true;
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        return false;


    }
    else {return true}
}
var registerdEmail=[];
function validate(){
    var wrongInputs=[];
    var emptyInputs=[];
    var data=[];
    var lName=document.getElementById("lname").value;
    var fName=document.getElementById("fname").value;
    var age=document.getElementById("age").value;
    var sex=document.getElementById("sex").value;
    var password=document.getElementById("password").value;
    var favAnimal=document.getElementById("favanimal").value;
    var howRadios=document.getElementsByName("status");
    var email = document.getElementById("email").value;
    var color=document.getElementById("color").value;
    var date=document.getElementById("date").value;

    //Regisztrálva van e
    if (registerdEmail.includes(email))
    {
        return alert("Ez az e-mail cím már regisztrálva van!");
    }
    //Required
    if (!isFilled(lName)){emptyInputs.push("Vezetéknév")}
    if (!isFilled(fName)){emptyInputs.push("Keresztnév")}
    if (!isFilled(age)){emptyInputs.push("Kor")}
    if (!isFilled(password)){emptyInputs.push("Jelszó")}
    if (!isFilled(email)){emptyInputs.push("Email")}

    if (emptyInputs.length>0){
        return alert("A következő kötelező mezők üresek: "+emptyInputs)
    }

    //Valid
    if (!validateLname()){wrongInputs.push("Vezetéknév")}
    if (!validateFname()){wrongInputs.push("Keresztnév")}
    if (age<0||age>110){wrongInputs.push("Kor")}
    if (!validatePassword()){wrongInputs.push("Jelszó")}
    if (!validateEmail()){wrongInputs.push("Email")}

    if (wrongInputs.length>0){
        return alert("A következő mezők nem felelnek meg a formai követelményeknek: "+wrongInputs)
    }

    //Data push
    data.push(lName);
    data.push(fName);
    data.push(age);
    data.push(sex);
    data.push(password);
    if (isFilled(favAnimal)){
        data.push(favAnimal);
    }
    for (var i=0;i<howRadios.length;i++){
        if (howRadios[i].checked){
            data.push(howRadios[i].value);
        }
    }
    data.push(email);
    registerdEmail.push(email);
    data.push(color);
   if (isFilled(date)){
        data.push(date);
    }


   alert("Regisztrált adatai:\n"+data);
}

function audi() {
    $('#audi1').css({left:50});
    $('#audi1').animate({
        left: '+=500',
    }, {
        duration: 1000,
        complete: audi
    });
}

function audi2(){
    $('#audi2').css({top:70});
    $('#audi2').css({left:50});
    $('#audi2').animate({
        top: '+=1000',
    }, {
        duration: 3000,
        complete: audi2
    });
}
function audi3(){
    $('#audi3').css({top:1000});
    $('#audi3').css({right:50});
    $('#audi3').animate({
        top: '-=930',
    }, {
        duration: 3000,
        complete: audi3
    });
}