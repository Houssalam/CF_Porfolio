/***********************Toggle icon navbar************************/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/***********************Scroll Section Active Link************************/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /***********************Sticky Navbar************************/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /***********************remove Toggle icon and navbar when click navbar link (scroll)************************/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/***********************Scroll Reveal************************/
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/***********************Typed Js************************/
const typed = new Typed("#multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Designer"],
  typeSpeed: 140,
  backSpeed: 140,
  backDelay: 1000,
  loop: true,
  onStringTyped: function (arrayPos, self) {
    changeTextColor();
  },
});

function changeTextColor() {
  const textElement = document.getElementById("multiple-text");
  const colors = ["red", "blue", "green", "orange", "black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  textElement.style.color = randomColor;
}

/***********************Récupération et affichage de la température de marseille en degrès************************/

const APIKEY = "7413366e8a81308f33d2a30656c8723f";

// Appel a l'API openWeather avec ville en parametre de fonction

let url = `https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.querySelector("#temp-metric").innerHTML = data.main.temp + "°";
      document.querySelector("#city-name").innerHTML = data.name;
    })
  )
  .catch((err) => console.log("Erreur : " + err));

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textarea = document.getElementById("textarea");
const submit = document.getElementsByClassName("contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    fname.value.trim() === "" ||
    lname.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === "" ||
    textarea.value.trim() === ""
  ) {
    const error = document.createElement("div");
    error.classList.add("alert");
    error.classList.add("alert-danger");
    error.innerHTML = "Please fill all the fields!";
    document.querySelector("nav").insertAdjacentElement("afterend", error);
    setTimeout(() => {
      error.remove();
    }, 3000);
  } else {
    let ebody = `
                <b>Name: </b>${fname.value} ${lname.value}
                <br>
                <b>Email: </b>${email.value}
                <br>
                <b>Phone: </b>${phone.value}
                <br>
                <b>Object: </b>${textarea.value}
                <br>
            `;

    Email.send({
      SecureToken: "eb288b14-d7f5-4654-938a-866d78d0a364", //add your token here
      To: "benabdousalami@outlook.fr",
      From: "benabdousalami@outlook.fr",
      Subject: "Testing email" + email.value,
      Body: ebody,
    }).then(() => {
      const success = document.createElement("div");
      success.classList.add("alert");
      success.classList.add("alert-success");
      success.innerHTML = "Your message has been sent successfully!";
      document.querySelector("nav").insertAdjacentElement("afterend", success);
      setTimeout(() => {
        success.remove();
      }, 3000);
      const form = submit.closest("form");
      if (form) {
        form.reset();
        alert("Your message has been sent successfully!");
      } else {
        console.log("Form not found");
      }
    });
  }
});
