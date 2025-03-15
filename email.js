// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("hqGZ9TgpmNSvZZCiJ"); // Replace with your actual EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("el-w9i147ht").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_fl46b6b", "template_920ajxd", this)
            .then(function (response) {
                alert("Message sent successfully!");
            }, function (error) {
                alert("Failed to send message. Try again!");
            });
    });
});
