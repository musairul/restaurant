import Logo from "./images/recipe.jpg";

function loadMainPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `<h1 class="title">Rest de la raunt</h1>
   <h2>Welcome!</h2>
      <p>
        We serve authentic italian food using locally sourced, ethically farmed
        ingredients. We have the finest selection of gourmet 5* quality meals,
        perfect for any occasion. We also do wedding services, contact us in
        advance.
      </p>
      <h3>Hours</h3>
      <ul>
        <li>Monday: 8am-8pm</li>
        <li>Tuesday: 8am-8pm</li>
        <li>Wednesday: CLOSED</li>
        <li>Thursday: 8am-8pm</li>
        <li>Friday: 6am-6pm</li>
        <li>Saturday: 6am-10pm</li>
        <li>Sunday: CLOSED</li>
      </ul>`;

  const title = document.querySelector(".title");
  const logoImage = document.createElement("img");
  logoImage.src = Logo;
  title.insertAdjacentElement("afterend", logoImage);
}

export default loadMainPage;
