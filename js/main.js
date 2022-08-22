AOS.init();
// Fixed Nav and class Active with background color
let fixedNav = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    window.scrollY > 50 ? fixedNav.classList.add('NavActive') : fixedNav.classList.remove('NavActive');
    console.log("scrolling ")
})


let skillsSection = document.querySelector('.education');
let All_progress = document.querySelectorAll('.progress-bar');

window.onscroll = function(){
    if (window.scrollY >= skillsSection.offsetTop + 100) {
        console.log("Done ");
        All_progress.forEach((progress)=>{
            progress.style.width = progress.dataset.width;
        } )
    }
}



// Email Js from Curly Braces Channel:  "https://www.youtube.com/watch?v=kWEDY0rjS30"

function sendMsg(e){
    e.preventDefault();
    let email = document.querySelector('input[type="email"]'),
        subject = document.querySelector('input[type="text"]'),
        comment = document.querySelector('textarea'),
        submitBtn = document.querySelector('button');

    

    Email.send({
        Host : "F5AD8903FB9EFDBC20C22BF88503C77B244B",
        Username : "username",
        Password : "password",
        To : 'mhmdhms509@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : comment.value
    }).then(
      message => alert(message)
    );
}
let form = document.forms[0];
form.addEventListener('submit', sendMsg)

