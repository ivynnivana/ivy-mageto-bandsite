let newArray = [];

const USERS = "https://project-1-api.herokuapp.com/comments?api_key=ivy";
let something = axios
  .get("https://project-1-api.herokuapp.com/comments?api_key=ivy")
  .then(response => {
    console.log(response.data);
    newArray = response.data;
    return newArray;
  })
  .then(response => {
    displayComment(response);
  });

let form = document.querySelector(".comment__form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let newUser = {
    name: "",
    comment: ""
    // timestamp: ""
  };

  //  we use the name of the item (.name) in the object to push or unshift it into the object
  newUser.name = e.target.name.value;
  newUser.comment = e.target.comment.value;
  //when pushing objects into an Array, we use the .push to add them to the bottom of the array(here we added new objects to the array)

  axios.post(USERS, newUser).then(response => {
    response.data;
    newArray.unshift(response.data);

    displayComment(newArray);
  });

  e.target.reset();

  document.querySelector(".comment-output").innerHTML = "";

  // displayComment(newArray);
  let commentId = id;
});

function displayComment(comments) {
  let commentSection = document.querySelector(".comment-output");
  for (i = 0; i < comments.length; i++) {
    let divElement = document.createElement("div");
    commentSection.appendChild(divElement);
    divElement.classList.add("row-container");

    let button = document.createElement("button");
    divElement.appendChild(button);
    button.classList.add("button-container");

    let nameElement = document.createElement("h3");
    divElement.appendChild(nameElement);
    nameElement.innerText = comments[i].name;
    nameElement.classList.add("name-container");
    // innerText allows you to insert a text between tags like you would in HTML but now for Java
    let ts = new Date(comments[i].timestamp).toLocaleDateString();

    let dateElement = document.createElement("h3");
    divElement.appendChild(dateElement);
    dateElement.innerText = ts;
    dateElement.classList.add("date-container");

    let idElement = document.createElement("p");
    divElement.appendChild(idElement);
    idElement.innerText = comments[i].id;
    idElement.classList.add("id-container");

    let commentElement = document.createElement("p");
    divElement.appendChild(commentElement);
    commentElement.innerText = comments[i].comment;
    commentElement.classList.add("comment-container");
  }
}
