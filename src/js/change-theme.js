const body = document.querySelector("body");
const root = document.querySelector(":root");
const logo = document.querySelector("#logo")

document.querySelector("#changeTheme").addEventListener("click", function () {
  if (body.dataset.theme === "mario") {
    console.log("mario");
    logo.src = "./src/img/luigi.png";
    root.style.setProperty("--bg-btn-red", "#2f9e18");
    root.style.setProperty(
      "--bg-filter-red",
      "linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(1,213,4,0.45) 35%, rgba(1,213,4,0.1) 50%, rgba(1,213,4,0.45) 65%, rgba(0,0,0,1) 80%)"
    );
    body.dataset.theme = "luigi";
  } else {
    console.log("luigi");
    logo.src = "./src/img/mario.png";
    root.style.setProperty("--bg-btn-red", "#ff0021");
    root.style.setProperty(
      "--bg-filter-red",
      "linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(213,1,29,0.45) 35%, rgba(213,1,29,0.1) 50%, rgba(213,1,29,0.45) 65%, rgba(0,0,0,1) 80%)"
    );
    body.dataset.theme = "mario";
  }
});