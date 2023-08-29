// vamos a crear los elementos dinamicos del html del post con datos del json
import {getPostById} from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

const getPostData = async() => {
  const res = await getPostById(postId);
  const postData = res.post;
  let card = createPostCard(postData);
}
getPostData();

const createPostCard = (postObject) => {
  console.log(postObject)
  console.log(postObject.title)

  let {author, comentsData, createdDate, image, tags, title} = postObject;
  console.log(postObject.title)
  if(tags) {
    let allTags = []
    for(let i=0; i<tags.length; i++) {
      allTags += `${tags[i]} `;
    }
  }
if(title) { 
  const [date, hour] = postObject.created.split("T");
  document.getElementById('post-image').src = image;
  document.getElementById('author-name').innerText = postObject.user;
  document.getElementById('date-post').innerText = `Posted on ${date} `;
  document.getElementById('title-post').innerText = postObject.title ;
  document.getElementById('bodytext-post').innerText = postObject.body;
}

const [date, hour] = createdDate.split("T");
document.getElementById('post-image').src = image;
document.getElementById('author-name').innerText = author;
document.getElementById('author-name').innerText = author;
document.getElementById('date-post').innerText = `Posted on ${date} `;
document.getElementById('title-post').innerText = title ;
document.getElementById('bodytext-post').innerText = comentsData;

  // document.getElementById('hashtag-post').innerText = allTags;

};

const printPost = async () => {
  const res = await getPosts();
  const posts = res.data.posts;

  let cardWrapper = document.getElementById('card-wrapper');



  // DESDE ESTE FOREACH SE LE MANDA EL VALOR FILTRADO DEL TAG PARA SOLO IMPRIMIR ESE
  posts.forEach((key) => {
    cardWrapper.append(card);
  })
};
printPost();
