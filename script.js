function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  function handleSourcePage() {
    const submitButton = document.getElementById("submit");
    const div = document.getElementById("div");
    const linkInput = document.getElementById("link");
  
    submitButton.addEventListener("click", function () {
      const waitMessage = document.createElement("p");
      waitMessage.textContent = "please wait...";
      div.appendChild(waitMessage);
  
      setTimeout(() => {
        const linkValue = linkInput.value.trim();
        const videoID = linkValue.split("=")[1]; 
  
        if (videoID) {
          window.location.href = "player.html?videoID=" + videoID;
        } else {
          alert("invalid youtube link");
        }
      }, 1000);
    });
  }
  function handlePlayerPage() {
    const videoID = getQueryParam("videoID");
    const player = document.getElementById("player");
  
    if (videoID) {
      player.src = "https://www.youtube.com/embed/" + videoID;
    } 
  }
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
  
    if (currentPage.endsWith("index.html") || currentPage === "/") {
      handleSourcePage(); 
    } else if (currentPage.endsWith("player.html")) {
      handlePlayerPage(); 
    }
  });

  function HomePage(){
    window.location.href = "index.html";
  }
  