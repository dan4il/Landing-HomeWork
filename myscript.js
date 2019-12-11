// работа с капчей
var captcha;
var captcha_n;

function generateCaptcha() {
    var a = Math.floor((Math.random() * 100));
    var b = Math.floor((Math.random() * 100));
    captcha=a.toString()+"+"+b.toString()+"=";
    captcha_n=a+b;
    document.getElementById("captcha").value = captcha;

}
function Swap_anchor(){
    //changing anchor if it aimed not on contact section
    Chang=""+document.location;
    alert(Chang);
    var n=Chang.indexOf("#")+1;
    needed_to_change=Chang.substring(n);
    str="Contact";
    document.location=Chang.replace(needed_to_change,str);
}

function check(){
  Swap_anchor();
   var input=document.getElementById("inputText").value;
   if(input==captcha_n){
      document.getElementById("ChBox").checked=true;
   }
   else{
       alert("Not Equal");
   }
}

// новое окно
function newPage(){
  var ch=document.getElementById('ChBox');
  if(!ch.checked){
      alert("capcha dont selected");
  }
    else{
      value1=""+document.form1.userN.value;
      value2=""+document.form1.userE.value;
      self.location="newforma.html?="+value1+"="+value2;
    }
}
