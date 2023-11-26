let responselimit = 0;
let countdown = 4;
let check = document.getElementById('check');
let again = document.getElementById('again');
let reset = document.getElementById('reset');
let checkoutput =  document.getElementById('checkoutput');
let againoutput =  document.getElementById('againoutput');
    let againbutton = document.getElementById('againbutton');
let resetoutput = document.getElementById('resetoutput');

let lover = document.getElementById("lover");
let red = document.getElementById("red");
let folklore = document.getElementById("folklore");


function login(event) {
    event.preventDefault();
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pword").value;

        

        /* login logic */
        if (username === "kael" && password === "pass") {
            check.classList.add("open-check");
            checkoutput.innerHTML = 'Successfully logged in!';
            lover.play();

            responselimit = 0;
        
    
        } else if(responselimit <=2) {
            responselimit++;
            countdown--;
            if (red.paused) {
                red.play();
              }

            var username = document.getElementById("uname").value = "";
            var password = document.getElementById("pword").value = "";

            again.classList.add("open-again");
            againoutput.innerHTML = 'Error: Incorrect username or password.';
            againbutton.innerHTML = 'You have ' + countdown + ' more tries.'


        }
        else if (responselimit >= 3) {           
            folklore.play(); 
            reset.classList.add("open-reset");
            resetoutput.innerHTML = 'Your account has reset. <br>Please try again later. ';

        } 
   
}

function clear(event){
    event.preventDefault();
    var username = document.getElementById("uname").value = "";
    var password = document.getElementById("pword").value = "";
    document.getElementById('output').innerHTML = " ";
    document.getElementById('output').value = " ";
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
    
    var username = document.getElementById("uname").value = "TRY AGAIN LATER";
    var password = document.getElementById("pword").value = "TRY AGAIN LATER";
    folklore.pause();

}

