document.addEventListener("DOMContentLoaded", () => {
  const quill = new Quill("#editor", {
    theme: "snow",
    placeholder: "Escribe el contenido de tu publicación aquí...\n",
  });

  // const URL = "https://devtoequipo3-default-rtdb.firebaseio.com/POST/.json";
  const URL = "http://localhost:3001/post/create";
  const publishBtn = document.querySelector("#save_btn");
  publishBtn.addEventListener("click", async (event) => {
    event.preventDefault();


    const urlPostImg = document.querySelector("#url_post_img").value;
    const postTitle = document.querySelector("#input_post_title").value;
    const postBody = quill.root.innerHTML;
    const postTimeToRead = Math.ceil(quill.getText().length / 1500);

    const postAuthor = "Azael Abdias";
    const postComments = [];
    const postRating = Math.random();
    const postRelevant = true;

    const userComment = quill.root.innerHTML;
    postComments.push(userComment);

    const currentDate = new Date();
    // const formattedDate = `${currentDate.getDate()} - ${
    //   currentDate.getMonth() + 1
    // } - ${currentDate.getFullYear()}`;
    // const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    // const postCreatedDate = `${formattedDate} ${formattedTime}`;

    function getRandomTags(tagsList, minTags, maxTags) {
      const numTags =
        Math.floor(Math.random() * (maxTags - minTags + 1)) + minTags;
      const shuffledTags = tagsList.sort(() => 0.5 - Math.random());
      return shuffledTags.slice(0, numTags);
    }

    const tagsList = [
      "#beginners",
      "#devops",
      "#typescript",
      "#css",
      "#database",
      "#security",
      "#blockchain",
      "#machinelearning",
      "#git",
      "#gamedev",
      "#vscode",
      "#computerscience",
      "#javascript",
    ];

    const randomTags = getRandomTags(tagsList, 1, 4);

    const postData = {
      author: postAuthor,
      image: urlPostImg,
      title: postTitle,
      comments: postComments.length,
      comentsData: postComments,
      // createdDate: postCreatedDate,
      createdDate: currentDate,
      rating: postRating,
      relevant: postRelevant,
      tags: randomTags,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to create the post.");
      }

      const jsonData = await response.json();

      if (jsonData && jsonData.name) {
        alert("¡Publicación creada exitosamente!");
        window.location.href = "/index.html";
      } else {
        alert("Error al crear la publicación.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al crear la publicación.");
    }
  });
});

function redirectToCreatePost() {
  const queryParams = "param1=value1&param2=value2";
  const url = `createPost.html?${queryParams}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  function redirectToIndexWithQuery() {
    const queryParams = "param1=value1&param2=value2";
    const url = `index.html?${queryParams}`;
    window.location.href = url;
  }
  const logoImage = document.querySelector("#logoImage");
  logoImage.addEventListener("click", redirectToIndexWithQuery);
});
