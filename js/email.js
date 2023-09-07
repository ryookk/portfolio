const flname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("art-contact-form")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  // write html for proper format to be sent in mail
  let ebody = `
  <div>
    <p><strong>Name: </strong><span id="flname">${flname.value}</span></p>
    <p><strong>Email: </strong><span id="email">${email.value}</span></p>
    <p><strong>Message: </strong><span id="message">${message.value}</span></p>
  </div>
  
  `;

  Email.send({
    SecureToken: "0a15680a-adc1-49c8-9d22-c40e43da8faf",
    To: "marvinpaongilan05@gmail.com",
    From: "marvinpaongilan05@gmail.com",
    Subject: email.value + " " + subject.value,
    Body: ebody,
  }).then((message) => alert(message));
});