$("#sendmail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    
    if(email == ""){
        return false;
        alert("Enter email");
    }
    if(name == ""){
        return false;
        alert("Enter email");
    }
    if(phone == ""){
        return false;
        alert("Enter email");
    }
    
    
    $.ajax({
       url: '/php/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'E-mail': email, 'Phone': phone },
        dataType: 'html',
        beforeSend: function(){
            $("#sendmail").prop("disabled", true);
        },
        success: function(data){
            alert(data);
            $("#sendmail").prop("disabled", false);
        }
    });
});