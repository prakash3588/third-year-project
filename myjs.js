
/*----------------Navbar---------------------*/
window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/*-------------Membership Form---------------*/
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function submitform(){
  let x = document.forms["membership"]["name"].value;
  let y = document.forms["membership"]["email"].value;
  let z = document.forms["membership"]["phone"].value;
  if (x == "" || y == "" || z == "") {
    alert("Please fill all the fields!");
    return false;
  }else{
    alert("Registered Successfully:)");
    return true;
  }
}

/*-------------Contact Form------------------*/
function contactform(){
  let x = document.forms["contact"]["name"].value;
  let y = document.forms["contact"]["email"].value;
  let z = document.forms["contact"]["phone"].value;
  let m = document.forms["contact"]["msg"].value;
  if (x == "" || y == "" || z == "" || m == "") {
    alert("Please fill all the fields!");
    return false;
  }else{
    alert("ThankYou For Contacting Us:)");
    return true;
  }

} 