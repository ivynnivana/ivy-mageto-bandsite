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
let form = document.querySelector(".comment-form");
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
    todaysDate: ""
  };

  let newName = e.target.name.value;
  let newComment = e.target.comment.value;
  // when pushing objects, we use the name of the item (.name) in the object to push it into the object
  newObject.name = newName;
  newObject.comment = newComment;
  //when pushing objects into an Array, we use the .push
  comments.push(newObject);

  let commentSection = document.querySelector(".comment-output");
  for (i = 0; i < comments.length; i++) {
    let divElement = document.createElement("div");
    commentSection.appendChild(divElement);

    let nameElement = document.createElement("h3");
    divElement.appendChild(nameElement);
    nameElement.innerText = comments[i].name;
    // innerText allows you to insert a text between tags like you would in HTML but now for Java

    let dateElement = document.createElement("h3");
    divElement.appendChild(dateElement);
    dateElement.innerText = comments[i].date;

    let commentElement = document.createElement("p");
    divElement.appendChild(commentElement);
    commentElement.innerText = comments[i].comment;
  }
});

function createComments(form, comments) {
  for (i = 0; i < comments.length; i++) {
    let divElement = document.createElement("div");
    form.appendChild(divElement);

    let nameElement = document.createElement("h3");
    divElement.appendChild(nameElement);
    nameElement.innerText = comments[i].name;
    // innerText allows you to insert a text between tags like you would in HTML but now for Java
    let commentElement = document.createElement("p");
    divElement.appendChild(commentElement);
    commentElement.innerText = comments[i].comment;
  }
}

// function invocation
