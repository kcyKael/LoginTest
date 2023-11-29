var username = document.getElementById("uname").value;
var password = document.getElementById("pword").value;

let responselimit = 0;
let countdown = 4;

let loginPopup = document.getElementById('loginform');

let check = document.getElementById('check');
let again = document.getElementById('again');
let reset = document.getElementById('reset');
let checkoutput =  document.getElementById('checkoutput');
let againoutput =  document.getElementById('againoutput');
    let againbutton = document.getElementById('againbutton');
let resetoutput = document.getElementById('resetoutput');


let enchanted = document.getElementById("enchanted");
let lover = document.getElementById("lover");
let red = document.getElementById("red");
let folklore = document.getElementById("folklore");


function lyrics() {
    enchanted.currentTime = 0;
    enchanted.play();

}

function loginpopup(event){
    event.preventDefault();
    loginPopup.classList.add("active-loginform");

    enchanted.currentTime = 0;
    enchanted.pause();

}

function loginpopupclose(event){
    event.preventDefault();
    loginPopup.classList.remove("active-loginform");
}

function login(event) {
    event.preventDefault();
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pword").value;

        

        /* login logic */
        if (username === "kael" && password === "imy143") {
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Welcome, Kael.<br>You have logged in<br>succcesfully';

            lover.volume = 0.1;
            lover.play();
        
        }
        else if(username === "jai" && password === "abit123"){
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Welcome, Jai.<br> You have logged in<br>succcesfully';

            lover.volume = 0.1;
            lover.play();
        }
        else if(username === "tru" && password === "plsdontbeinlovewithsomeoneelse083006"){
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Welcome, Tru.<br>You have logged in<br>succcesfully';

            lover.volume = 0.1;
            lover.play();
        }
        else if(username === "tan" && password === "12hud"){
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Welcome, Sir Tan.<br>You have logged in<br>succcesfully';

            lover.volume = 0.1;
            lover.play();
        }
        else if(username === "guest" && password === ""){
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Welcome, Guest.<br>You have logged in<br>succcesfully';

            lover.volume = 0.1;
            lover.play();
        }
        else if(responselimit <=2) {
            responselimit++;
            countdown--;
            if (red.paused) {
                red.currentTime = 0;
                red.volume = 0.1;
                red.play();
                
              }

            var username = document.getElementById("uname").value = "";
            var password = document.getElementById("pword").value = "";

            again.classList.add("open-again");
            againoutput.innerHTML = 'Error: Incorrect username or password.';
            againbutton.innerHTML = 'You have ' + countdown + ' more tries.'

        }
        else if (responselimit >= 3) {      
            folklore.volume = 0.1;     
            folklore.play(); 
            reset.classList.add("open-reset");
            resetoutput.innerHTML = 'Your account has reset. <br>Please try again later. ';

        } 
   
}

function closePopup(){  
    check.classList.add("close-check");
    
    var username = document.getElementById("uname").value = "";
    var password = document.getElementById("pword").value = "";

        lover.pause();
}

function closePopup2(){
    again.classList.remove("open-again");
    
    var username = document.getElementById("uname").value = "";
    var password = document.getElementById("pword").value = "";
    red.pause();
}

function closePopup3(){
    reset.classList.add("close-reset");
    
    var username = document.getElementById("uname").value = "";
    var password = document.getElementById("pword").value = "";
    folklore.pause();

}

