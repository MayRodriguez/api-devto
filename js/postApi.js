const getPosts = async () => {
    let response = await fetch("http://localhost:3003/post/");
    let data = await response.json();
    return data;
}


