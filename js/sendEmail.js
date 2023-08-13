(function () {
  emailjs.init("82Z8pcxoeczMs4Ixr");
})();

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  emailjs.sendForm("service_z6f0pgo", "template_von456k", "#myForm").then(
    function (response) {
      const element = document.querySelector(".alert-success");
      element.classList.remove("hidden");
      alert('Merci , votre message a été  envoyé')
    },
    function (error) {}
  );
  emailjs.sendForm("service_z6f0pgo", "template_0c96mrp", "#myForm").then(
    function (response) {},
    function (error) {}
  );
});
