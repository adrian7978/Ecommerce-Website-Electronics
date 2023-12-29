
    function contactValid(){
        var fname=document.getElementById("fname").value;
        var email=document.getElementById('email').value;
        var country=document.getElementById('country').value;
        var message=document.getElementById('message').value;

        if(fname =="" || email =="" || country =="" || message =="" ){
            alert("Please fill the all details");
            return false;
        } else {
            alert("Form has been sent successfully");
            return true;
        }
    }