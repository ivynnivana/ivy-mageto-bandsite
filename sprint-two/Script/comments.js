const comments = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

let form = document.querySelector(".comment__form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let d = new Date();
  let today = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let todaysDate = today + "/" + month + "/" + year;

  let newObject = {
    name: "",
    comment: "",
    date: todaysDate
  };

  let newName = e.target.name.value;
  let newComment = e.target.comment.value;
  //  we use the name of the item (.name) in the object to push or unshift it into the object
  newObject.name = newName;
  newObject.comment = newComment;
  //when pushing objects into an Array, we use the .push to add them to the bottom of the array(here we added new objects to the array)
  comments.unshift(newObject);

  e.target.reset();

  document.querySelector(".comment-output").innerHTML = "";

  createComments(comments);
});
// blocks of code stored in functions can be re-used mulitple times
function createComments(comments) {
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
    let dateElement = document.createElement("h3");
    divElement.appendChild(dateElement);
    dateElement.innerText = comments[i].date;
    dateElement.classList.add("date-container");

    let commentElement = document.createElement("p");
    divElement.appendChild(commentElement);
    commentElement.innerText = comments[i].comment;
    commentElement.classList.add("comment-container");
  }
}
//.innerText only accepts text content, but .innerHTML in addition to text, accepts elements.
// adding "" to both of them changes them and makes them empty.
// function invocation

createComments(comments);
