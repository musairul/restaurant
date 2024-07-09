function loadMenuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `<h1>Menu</h1>
      <h2>Main Dishes</h2>
      <h3>Lasagna</h3>
      <p>
        Made with the finest pasta, mincemeat, spices, vegetables and fresh
        italian cheese
      </p>
      <h3>Risotto</h3>
      <p>
        Italian white rice with fresh garden peas grown in our backyard,
        carrots, and a delicious nutty texture
      </p>
      <h3>Spaghetti de la Raunt</h3>
      <p>
        Our signature dish: chef Tony's special secret recipe, passed down by
        generations of the Taglietelli family. Delicious hot spaghetti served
        with gourmet meatballs christened in tomato sauce
      </p>
      <h2>Drinks Menu</h2>
      <h3>White wine</h3>
      <p>
        Handpicked by our chefs from our own vineyard, crushed, juiced and
        stored in our underground wine closet.
      </p>
      <h3>Red wine</h3>
      <p>
        Aged 50 years, a perfect compliment to our special: Spaghetti de la
        Raunt
      </p>
      <h3>Water</h3>
      <p>
        Sourced from the clearest springs in Napels and chilled to a refreshing
        ice cold temperature. Perfect to cleanse the pallette.
      </p>`;
}

export default loadMenuPage;
