document.getElementById("email").placeholder="Enter your mail"
document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".button");

    button.onclick=function() {
        

        var Email = document.getElementById("email").value;
        var country = document.getElementById("country").value;
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("last").value;
        var adress = document.getElementById("adress").value;
        var Appartement = document.getElementById("Appartement").value;
        var codepostal = document.getElementById("code").value;
        var City = document.getElementById("City").value;
        var telephone = document.getElementById("tel").value;
        var cardNumber = document.getElementById("ccn").value;
        var expiryDate = document.getElementById("date").value;
        var password = document.getElementById("pass").value;
        var owner = document.getElementById("owner").value;
        var price = document.getElementById("prix").value;

        // Basic validation
        if (cardNumber.length < 16 || expiryDate.length < 5) {
            alert("Please fill out all fields correctly.");
            return;
        }else{
            alert("Payment successful! Amount: $" + price)}

        // Assuming payment processing code goes here
        

        // Réinitialiser le formulaire après la soumission
        var form = document.querySelector("form");
        form.reset();
    };
})
