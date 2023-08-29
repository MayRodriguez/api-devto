const getJson = async() => {
    // let response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST.json");
    let response = await fetch("http://localhost:3001/post/");
    let data = await response.json();
    return data;
  };
  
  const getPostById = async (id) => {
    // let response = await fetch(`https://devtoequipo3-default-rtdb.firebaseio.com/POST/${id}/.json`);
    let response = await fetch(`http://localhost:3001/post/${id}`);
    let data = await response.json();
    return data;
  };

export {getJson, getPostById};