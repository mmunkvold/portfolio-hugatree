// bottom section which shows more post in the same category:

const relatedPostContainer = document.querySelector(".related");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts/" + id;
const urlRelated = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&categories=4";

async function getRelatedPosts() {
  try {
    const response = await fetch(urlRelated);
    const results = await response.json();
    console.log(results);
    relatedPostContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      /* if (i === 5) {
        break;
      } */
      if (i === id) {
      }
      //createHTML(result);
      relatedPostContainer.innerHTML += `<div class="related"><h3>${results[i].title.rendered}${results[i].categories}</h3></div>`;
      console.log("this html section works at least");
      //relatedPostContainer.innerHTML += `<div class="related">just something</div>`;
    }
  } catch (error) {
    console.log("something very strange here...");
  }
}
getRelatedPosts();

/* function createHTML(result) {
  console.log("this html works");
  relatedPostContainer.innerHTML = `<div class="related">just something</div>`;
} */

/* <h1>${result.title.rendered}</h1><div>${result.content.rendered}</div> */

/* <h2>${results[i].title.rendered}</h2><p>${results[i].excerpt.rendered}</p><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}"/> */
