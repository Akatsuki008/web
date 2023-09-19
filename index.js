function sendmail() {
    var person = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        sub: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceid = "service_rfkautr";
    const template_id = "template_7jt2q9u";

    emailjs.send(serviceid, template_id, person)
        .then(
            response => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(response);
                alert("Message sent");
            }
        )
        .catch(error => {
            console.error(error);
            alert("An error occurred while sending the message. Please try again later.");
        });
}
