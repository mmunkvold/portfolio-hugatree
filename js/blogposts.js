//this code needs work, but just to show how to

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

const resultsContainer = document.querySelector(".results");
const button = document.querySelector(".seemore-btn");
console.log(button);

async function getAllPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 10) {
        break;
      }
      resultsContainer.innerHTML += `<div class="results"><div class="result-item"><a href="singlepost.html?id=${results[i].id}"><div><img  src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></div><div class="">${results[i].title.rendered} </a>${results[i].excerpt.rendered}</div></div></div>`;
    }
    button.addEventListener("click", function () {
      console.log("i've been clicked");
      for (let i = 11; i < results.length; i++) {
        console.log("yayy");
        resultsContainer.innerHTML += `<div class="results"><div class="result-item"><a href="singlepost.html?id=${results[i].id}"><div><img  src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></div><div class="">${results[i].title.rendered} </a>${results[i].excerpt.rendered}</div></div></div>`;
        button.style.display = "none";
      }
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getAllPosts();
