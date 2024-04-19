// 
const renderRandomGif = async () => {
  API_KEY = "YOUR_API_KEY";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
  );
  const gifs = await response.json();

  const src = gifs.data.images.fixed_height.url;

  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};
// Call the function to render a random GIF when the page loads
renderRandomGif();

// Add an event listener to the button to render a random GIF
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);

// Display a GIF based on user input

async function fetchRandomGif(keyword='cat') {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`
  );
  const data = await response.json();

  if (data.data && data.data.images.fixed_height.url) {
    const imageUrl = data.data.images.fixed_height.url;
    gifContainer.innerHTML = `<img src="${imageUrl}" alt="Random GIF">`;
  } else {
    gifContainer.innerHTML = "<p>No GIF found.</p>";
  }
}

fetchRandomGif('question');

const searchInput = document.getElementById("searchInput");
const generateButton = document.getElementById("generateButton");
const gifContainer = document.getElementById("gifContainer");

generateButton.addEventListener("click", () => {
  const userInput = searchInput.value;
  fetchRandomGif(userInput);
});


