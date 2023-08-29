function redirectToIndexWithQuery() {
  const queryParams = "param1=value1&param2=value2"; // Agrega aquí los query parameters deseados
  const url = `index.html?${queryParams}`;
  window.open(url, "_self"); // Utiliza "_self" para abrir la URL en la misma ventana
}

import {getJson} from "./api.js";

const printFirstTagMiniPost = (postObject, firstTag, secondTag, key) => {
  let {title, comments, image, tags} = postObject;

  for(let i=0; i<tags.length; i++) {
  if (tags[i].includes(firstTag)) {

     let tagsContainer = document.getElementById('tags-container');
     let tagContainer = document.createElement('a');
     tagContainer.classList.add('list-group-item');
     tagContainer.addEventListener('click', () => {
      window.open(`../blog.html?postId=${key}`, '_blank');
      })

     let titleContainer = document.createElement('div');
     titleContainer.innerText = title;
     

     let commentContainer = document.createElement('div');
     commentContainer.innerText = comments + ' comments';

     tagContainer.append(titleContainer, commentContainer);
     tagsContainer.append(tagContainer);
     
    }
  if (tags[i].includes(secondTag)) {

        let tagsContainer = document.getElementById('second-tags-container');
        
        let tagContainer = document.createElement('a');
        tagContainer.classList.add('list-group-item');
        tagContainer.addEventListener('click', () => {
          window.open(`../blog.html?postId=${key}`, '_self');
          })
          
        let titleContainer = document.createElement('div');
        titleContainer.innerText = title;
   
        let commentContainer = document.createElement('div');
        commentContainer.innerText = comments + ' comments';
   
        tagContainer.append(titleContainer, commentContainer);
        tagsContainer.append(tagContainer);
        
       }
  }
}
const printRandomPost = (postObject, key) =>
{
  let {title, comments, image} = postObject;
//mini post
let imageMiniPost = document.getElementById('post-aleatory-image');
imageMiniPost.src = image;
imageMiniPost.setAttribute("style"," width: 214px; height: 100px; padding:5px; ");
let titleMiniPost = document.getElementById('title-minipost');
titleMiniPost.innerText = `${title} (${comments})`;

imageMiniPost.addEventListener('click', () => {
  window.open(`../blog.html?postId=${key}`, '_self');
  })
titleMiniPost.addEventListener('click', () => {
  window.open(`../blog.html?postId=${key}`, '_self');
  })
}

const printMiniPost = (postObject, key) =>
{
  let tagsContainer = document.getElementById('random-container');

  let {title} = postObject;
  let tagContainer = document.createElement('div');
  tagContainer.innerText = title;
    tagContainer.classList.add('list-group-item');
    tagContainer.addEventListener('click', () => {
      window.open(`../blog.html?postId=${key}`, '_self');
      })
    tagsContainer.append(tagContainer);

}


const printPost = async () => {
    const res = await getJson();
    const posts = res.data.posts;
    let random = Math.floor(Math.random() * (posts.length));
    printRandomPost(posts[random], posts[random]._id);

    posts.forEach((post) => {
      printFirstTagMiniPost(post, '#css', '#devops', post._id);
      let randomMini = Math.floor(Math.random() * (posts.length));
      printMiniPost(posts[randomMini], posts[randomMini]._id);
    
    })      
  };
  printPost();
  
  const logoLink = document.querySelector("#logoLink");
  logoLink.addEventListener("click", redirectToIndexWithQuery);