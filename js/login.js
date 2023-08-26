const openInNewTab = (url) => {
    window.open(url, "_blank");
  }

const btnForgot = document.getElementById('forgot');

btnForgot.addEventListener("click", () => {
    openInNewTab("http://127.0.0.1:5501/login.html");
  });

  // fake token

  function generateFakeToken () {
    const characters = 'ABCDFEGHKLQMNOPRTdfsjhl;dasjfgldfsaniudh0123456789';
    let token = '';
    for (let i = 0; i < 32; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }


  //Login logic 


  function handleLogic() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const fakeToken = generateFakeToken();

    localStorage.setItem('authToken', fakeToken);

    window.open("./index.html", "_blank");
  }

  const loginButton = document.getElementById('continue');
  loginButton.addEventListener('click', handleLogic);



