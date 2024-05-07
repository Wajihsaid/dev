function checkIfRealMan() {

    
    while(true){
        var response = prompt("Are you a Man? (yes/no)")
        if (response !== null) { // If user clicks Cancel, response will be null
            if (response.toLowerCase() === 'yes') {
                alert("Welcome!");
                break;
            } else if(response.toLowerCase()==="no") {
                window.location.href = "./page women.html";
                break; // Redirect to page women
            }
        }
    }
}

// Add event listener to trigger the alert when the page loads
window.addEventListener('load', checkIfRealMan);