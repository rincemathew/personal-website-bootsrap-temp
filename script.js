var nameError = document.getElementById('name-error');
		var emailError = document.getElementById('email-error');
		var subjectError = document.getElementById('subject-error');
		var messageError = document.getElementById('message-error')
		var submitError = document.getElementById('submit-error');



$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbz6XC54TDXpTLgW0JDnPiM8Lylg077p3-iU-cw63d96uGbamwK_gaUUQW5z5WiuOGR26Q/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})


function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML="Name required";
        return false;
    }
    if(!name.match("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")){
    nameError.innerHTML = 'Write full name';
    return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
    }



function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
}   

    if(!email.match( /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;


}

function validateSubject(){
    var subject = document.getElementById('contact-subject').value;

    if(subject.length !== 10){
        subjectError.innerHTML = "10 digit phone number is required";
        return false;
    }

    subjectError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateMessage()
    {
        var message = document.getElementById('contact-message').value;

        if(message.length == 0){
            messageError.innerHTML = "Message is required";
            return false;
        }
        messageError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
        return true;
    }


function validateForm(){
        if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage() )
        {
            submitError.style.display = 'block';
            submitError.innerHTML = "Error found!";
            setTimeout(function(){submitError.style.display = 'none';},3000);
            return false;
        }
    }
