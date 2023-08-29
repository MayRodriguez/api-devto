const getPosts = async () => {
  let response = await fetch(
    "http://localhost:3001/post"
  );
  let data = await response.json();
  return data;
};
const createFirstPostCard = (postObject, key) => {
  let {
    author,
    comentsData,
    comments,
    createDate,
    image,
    rating,
    relevant,
    tags,
    title,
    
  } = postObject;
  let { Tag1, Tag2, Tag3 } = tags;

  let firstCardPost = document.createElement("div");
  firstCardPost.classList.add("card", "mb-3");
  firstCardPost.setAttribute("id", "postContainer");

  let topText = document.createElement("h5");
  topText.classList.add("fw-ligth", "topmenu__texts--hover", "p-2", "rounded");

  let bigImagePost = document.createElement("img");
  bigImagePost.classList.add("card-img-top");
  bigImagePost.setAttribute("src", image);
  bigImagePost.setAttribute("alt", "...");

  let cardBodyPost = document.createElement("div");
  cardBodyPost.classList.add("card-body");
  cardBodyPost.setAttribute("style", "margin-bottom:10px");

  let autorInformation = document.createElement("div");
  autorInformation.classList.add("d-flex", "flex-row");

  let titlePost = document.createElement("h5");
  titlePost.classList.add("card-title", "mt-2");

  let tagsT = document.createElement("p");
  tagsT.classList.add("card-text");

  let reactionsandComments = document.createElement("div");
  reactionsandComments.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-between"
  );

  let imageAutor = document.createElement("img");
  imageAutor.classList.add("rounded-circle", "icon__image");
  imageAutor.setAttribute("width", "40px");
  imageAutor.setAttribute("height", "40px");
  imageAutor.setAttribute(
    "src",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--k7uOWOtg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/152613/f6aadb36-121c-409f-b746-e40e0408ea51.png"
  );
  imageAutor.setAttribute("alt", "icon");

  let autorName = document.createElement("div");
  autorName.classList.add("text", "ms-2");

  let titlePostText = document.createElement("a");
  titlePostText.classList.add("text-decoration-none", "link__text");
  titlePostText.setAttribute("href", `./blog.html?postId=${key}`);

  titlePostText.innerText = title;

  let tagsText1 = document.createElement("span");
  tagsText1.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText1.innerText = Tag1;

  let tagsText2 = document.createElement("span");
  tagsText2.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText2.innerText = Tag2;

  let tagsText3 = document.createElement("span");
  tagsText3.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText3.innerText = Tag3;

  let reactions = document.createElement("div");
  reactions.classList.add("d-flex", "flex-row");

  let timeRead = document.createElement("div");
  timeRead.classList.add("d-flex", "flex-row");

  let autorNameText = document.createElement("h6");
  autorNameText.classList.add("m-0");
  autorNameText.innerText = author;

  let dateText = document.createElement("span");
  dateText.innerText = createDate;

  let heartEmoji = document.createElement("p");
  heartEmoji.innerText = "❤️";
  let unicornEmoji = document.createElement("p");
  unicornEmoji.innerText = "🦄";
  let sorpriseEmoji = document.createElement("p");
  sorpriseEmoji.innerText = "🤯";
  let handsEmoji = document.createElement("p");
  handsEmoji.innerText = "🙌";
  let fireEmoji = document.createElement("p");
  fireEmoji.innerText = "🔥";

  let numberReactionsText = document.createElement("p");
  numberReactionsText.innerText = "212 reactions";

  let commentBoxImage = document.createElement("img");
  commentBoxImage.setAttribute("src", "./assets/images/comment-icon.png");
  commentBoxImage.setAttribute(
    "style",
    "width: 15px; height: 15px; margin: 10px; margin-top: 5px;"
  );

  let numberOfComment = document.createElement("p");
  numberOfComment.innerText = comments + "comments";

  let timeReadText = document.createElement("p");
  timeReadText.innerText = "10 min read";

  timeRead.append(timeReadText);

  reactions.append(
    heartEmoji,
    unicornEmoji,
    sorpriseEmoji,
    handsEmoji,
    fireEmoji,
    numberReactionsText,
    commentBoxImage,
    numberOfComment
  );
  reactionsandComments.append(reactions, timeRead);

  tagsT.append(tagsText1, tagsText2, tagsText3);

  titlePost.append(titlePostText);

  autorName.append(autorNameText, dateText);

  autorInformation.append(imageAutor, autorName);

  cardBodyPost.append(autorInformation, titlePost, tags, reactionsandComments);

  firstCardPost.append(bigImagePost, cardBodyPost);

  ////////////////////////First Post
  return firstCardPost;
};

const createSecondaryPosts = (postObject, key) => {
  let {
    author,
    comentsData,
    comments,
    createDate,
    image,
    rating,
    relevant,
    tags,
    title,
  } = postObject;
  let { Tag1, Tag2, Tag3 } = tags;
  let firstCardPost = document.createElement("div");
  firstCardPost.classList.add("card", "mb-3");
  firstCardPost.setAttribute("id", "postContainer");

  let cardBodyPost = document.createElement("div");
  cardBodyPost.classList.add("card-body");
  cardBodyPost.setAttribute("style", "margin-bottom:10px");

  let autorInformation = document.createElement("div");
  autorInformation.classList.add("d-flex", "flex-row");

  let titlePost = document.createElement("h5");
  titlePost.classList.add("card-title", "mt-2");

  let tagsT = document.createElement("p");
  tagsT.classList.add("card-text");

  let reactionsandComments = document.createElement("div");
  reactionsandComments.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-between"
  );

  let imageAutor = document.createElement("img");
  imageAutor.classList.add("rounded-circle", "icon__image");
  imageAutor.setAttribute("width", "40px");
  imageAutor.setAttribute("height", "40px");
  imageAutor.setAttribute("src", imageAuthorAleatory());
  imageAutor.setAttribute("alt", "icon");

  let autorName = document.createElement("div");
  autorName.classList.add("text", "ms-2");

  let titlePostText = document.createElement("a");
  titlePostText.classList.add("text-decoration-none", "link__text");
  titlePostText.setAttribute("href", `./blog.html?postId=${key}`);
  titlePostText.innerText = title;

  let tagsText1 = document.createElement("span");
  tagsText1.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText1.innerText = Tag1;

  let tagsText2 = document.createElement("span");
  tagsText2.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText2.innerText = Tag2;

  let tagsText3 = document.createElement("span");
  tagsText3.classList.add("hashtags__hover", "p-2", "rounded");
  tagsText3.innerText = Tag3;

  let reactions = document.createElement("div");
  reactions.classList.add("d-flex", "flex-row");

  let timeRead = document.createElement("div");
  timeRead.classList.add("d-flex", "flex-row");

  let autorNameText = document.createElement("h6");
  autorNameText.classList.add("m-0");
  autorNameText.innerText = author;

  let dateText = document.createElement("span");
  dateText.innerText = createDate;

  let heartEmoji = document.createElement("p");
  heartEmoji.innerText = "❤️";
  let unicornEmoji = document.createElement("p");
  unicornEmoji.innerText = "🦄";
  let sorpriseEmoji = document.createElement("p");
  sorpriseEmoji.innerText = "🤯";
  let handsEmoji = document.createElement("p");
  handsEmoji.innerText = "🙌";
  let fireEmoji = document.createElement("p");
  fireEmoji.innerText = "🔥";

  let numberReactionsText = document.createElement("p");
  numberReactionsText.innerText = "212 reactions";

  let commentBoxImage = document.createElement("img");
  commentBoxImage.setAttribute("src", "./assets/images/comment-icon.png");
  commentBoxImage.setAttribute(
    "style",
    "width: 15px; height: 15px; margin: 10px; margin-top: 5px;"
  );

  let numberOfComment = document.createElement("p");
  numberOfComment.innerText = comments + "comments";

  let timeReadText = document.createElement("p");
  timeReadText.innerText = "10 min read";

  timeRead.append(timeReadText);

  reactions.append(
    heartEmoji,
    unicornEmoji,
    sorpriseEmoji,
    handsEmoji,
    fireEmoji,
    numberReactionsText,
    commentBoxImage,
    numberOfComment
  );
  reactionsandComments.append(reactions, timeRead);

  tagsT.append(tagsText1, tagsText2, tagsText3);

  titlePost.append(titlePostText);

  autorName.append(autorNameText, dateText);

  autorInformation.append(imageAutor, autorName);

  cardBodyPost.append(autorInformation, titlePost, tags, reactionsandComments);

  firstCardPost.append(cardBodyPost);

  ////////////////////////First Post
  return firstCardPost;
};

const imageAuthorAleatory = () => {
  urlBase = "https://xsgames.co/randomusers/avatar.php?g=male";
  return urlBase;
};

const convertirFecha = (cadenaFecha) => {
  const [anioHora, mes, dia] = cadenaFecha.split("-");
  const [anio, hora] = anioHora.split("T");
  const [horaStr, minStr, segStr] = hora.split(":");  
  const fecha = new Date(anio, mes - 1, dia, horaStr, minStr, segStr);
  return fecha;
};

const removeElementsById = (idElement) => {
  let elements = document.querySelectorAll(
    '#posts-wrapper div[id="' + idElement + '"]'
  );
  elements.forEach(function (element) {
    element.remove();
  });
};

const topFilter = async () => {
  const res = await getPosts();
  const posts = res.data.posts;
  removeElementsById("postContainer");

  let relevantId = document.getElementById("relevantBtn");
  relevantId.classList.add("fw-light");
  let latestId = document.getElementById("latestBtn");
  latestId.classList.add("fw-light");
  let topId = document.getElementById("topBtn");
  topId.classList.remove("fw-light");

  let postsWrapper = document.getElementById("posts-wrapper");

  posts.sort((postA, postB) => postB.rating - postA.rating);
  posts.forEach((post, index) => {
    let postCard;
    if (index == 0) {
      postCard = createFirstPostCard(post);
    } else {
      postCard = createSecondaryPosts(post);
    }
    postsWrapper.append(postCard);

  });
};

const latestFilter = async () => {
  const res = await getPosts();
  const posts = res.data.posts;
  removeElementsById("postContainer");

  let relevantId = document.getElementById("relevantBtn");
  relevantId.classList.add("fw-light");
  let latestId = document.getElementById("latestBtn");
  latestId.classList.remove("fw-light");
  let topId = document.getElementById("topBtn");
  topId.classList.add("fw-light");

  let postsWrapper = document.getElementById("posts-wrapper");

  posts.sort((postA, postB) => {
    const fechaA = new Date(postA.createdDate);
    const fechaB = new Date(postB.createdDate);
    return fechaB - fechaA;
  });


  posts.forEach((post, index) => {
    let postCard;
    if (index == 0) {
      postCard = createFirstPostCard(post);
    } else {
      postCard = createSecondaryPosts(post);
    }
    postsWrapper.append(postCard);

  });
};

const relevantFilter = async () => {
  const res = await getPosts();
  const posts = res.data.posts;
  removeElementsById("postContainer");

  let relevantId = document.getElementById("relevantBtn");
  relevantId.classList.remove("fw-light");
  let latestId = document.getElementById("latestBtn");
  latestId.classList.add("fw-light");
  let topId = document.getElementById("topBtn");
  topId.classList.add("fw-light");

  let postsWrapper = document.getElementById("posts-wrapper");

  const relevantPosts = posts.filter(post => post.rating > 0.5);

  relevantPosts.forEach((post, index) => {
    let postCard;
    if (index == 0) {
        postCard = createFirstPostCard(post, post._id);
    } else {
        postCard = createSecondaryPosts(post, post._id);  
    }
    postsWrapper.append(postCard);

  });
};

relevantFilter();

document
  .getElementById("relevantBtn")
  .addEventListener("click", relevantFilter);
document.getElementById("latestBtn").addEventListener("click", latestFilter);
document.getElementById("topBtn").addEventListener("click", topFilter);

//topFilter();

//latestFilter();

/* tagContainer.addEventListener('click', () => {
      console.log('key desde el listener',key);
      window.open(`../Dev.to/blog.html?postId=${key}`, '_blank');
      }) */

/* comienza el filtrado*/
