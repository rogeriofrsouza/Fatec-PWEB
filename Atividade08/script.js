const url = "https://randomuser.me/api/?results=45";
let output = document.getElementById("output");
const ul = document.createElement("ul");
const mainTitle = document.querySelector(".main-title");
const button = document.querySelector(".button");

let avrAge = 0;
let older = 0;
let younger = 100;
let awfulCount = 0;
let goodGreatPercent = 0;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let authors = data.results;

    for (author of authors) {
      console.log(author);
      let li = document.createElement("li");
      let name = document.createElement("h3");
      let picture = document.createElement("img");
      let age = document.createElement("p");
      let gender = document.createElement("p");
      let rating = document.createElement("p");

      name.innerHTML = `${author.name.first} ${author.name.last}`;
      picture.src = `${author.picture.large}`;
      age.innerHTML = `Age: ${author.dob.age}`;
      gender.innerHTML = `Gender: ${author.gender}`;

      let value = Math.floor(Math.random() * (5 - 1) + 1);
      switch (value) {
        case 1:
          rating.innerHTML = "Rating: ⭐";
          break;
        case 2:
          rating.innerHTML = "Rating: ⭐⭐";
          break;
        case 3:
          rating.innerHTML = "Rating: ⭐⭐⭐";
          break;
        case 4:
          rating.innerHTML = "Rating: ⭐⭐⭐⭐";
      }

      avrAge += author.dob.age;
      if (author.dob.age > older) older = author.dob.age;
      if (author.dob.age < younger) younger = author.dob.age;
      if (value == 1) awfulCount++;
      if (value > 2) goodGreatPercent++;

      li.appendChild(name);
      li.appendChild(picture);
      li.appendChild(age);
      li.appendChild(gender);
      li.appendChild(rating);

      ul.appendChild(li);
    }
  })
  .catch((error) => console.log(error));

output.appendChild(ul);

function calculate() {
  mainTitle.innerHTML = "🍿 Final result";
  button.remove();

  let box = document.createElement("div");
  let line = document.createElement("p");
  line.textContent = `◾ Average age: ${(avrAge / 45).toFixed(1)}`;
  box.appendChild(line);

  let line2 = document.createElement("p");
  line2.textContent = `◾ Older age: ${older} years old`;
  box.appendChild(line2);

  let line3 = document.createElement("p");
  line3.textContent = `◾ Younger age: ${younger} years old`;
  box.appendChild(line3);

  let line4 = document.createElement("p");
  line4.textContent = `◾ Quantity of awful ratings: ${awfulCount}`;
  box.appendChild(line4);

  let line5 = document.createElement("p");
  line5.textContent = `◾ Percentage of great and good ratings: ${(
    (goodGreatPercent / 45) *
    100
  ).toFixed(1)}%`;
  box.appendChild(line5);

  let line6 = document.createElement("p");
  line6.textContent = `◾ Number of attendants: 45`;
  box.appendChild(line6);

  output.innerHTML = "";
  output.appendChild(box);
}
