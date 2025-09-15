function handleAction(action) {
  return function () {
    action();
  };
}

const animateSkills = () => {
  document.getElementById("htmlBar").style.width = "90%";
  document.getElementById("cssBar").style.width = "80%";
  document.getElementById("jsBar").style.width = "70%";
  document.getElementById("reactBar").style.width = "60%";
  document.getElementById("tailwindBar").style.width = "65%";
};

const sendMessage = async () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let status = document.getElementById("status");
  let form = document.getElementById("contactForm");

  if (!name || !email || !message) {
    return alert("⚠️ Please fill in all fields before sending your message.");
  }

  let data = new FormData(form);

  let response = await fetch("https://formspree.io/f/mnnbyven", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Oops! Something went wrong.";
  }
};

document.getElementById("skillBtn").onclick = handleAction(animateSkills);
document.getElementById("sendBtn").onclick = handleAction(sendMessage);
