const container = document.getElementById("container");
console.log(container);
const movieForm = document.createElement("form");
const directorForm = document.createElement("form");
movieForm.innerHTML = `
<label for="title">Title</label><br>
<input type="text" id="title" name="title"><br>
<label for="year">Year</label><br>
<input type="number" id="year" name="year"><br>
<label for="genre">Genre</label><br>
<input type="text" id="genre" name="genre"><br><br>
<button type="submit" id="postBtn">Post</button>
<button type="submit" id="getBtn">Get</button>
<button type="submit" id="putBtn">Update</button>
<button type="submit" id="deleteBtn">Delete</button>
`;

directorForm.innerHTML = `
<br><label for="firstname">First name</label><br>
<input type="text" id="firstname" name="firstname"><br>
<label for="lastname">Last name</label><br>
<input type="text" id="lastname" name="lastname"><br>
<label for="dob">D.O.B</label><br>
<input type="number" id="dob" name="dob"><br>
<label for="country">Country</label><br>
<input type="text" id="country" name="country"><br><br>
<button type="submit" id="postBtn">Post</button>
<button type="submit" id="getBtn">Get</button>
<button type="submit" id="putBtn">Update</button>
<button type="submit" id="deleteBtn">Delete</button><br>
`;
const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
console.log(getBtn);
container.append(movieForm, directorForm);

const getDirectorsFromDataBase = async () => {
  const result = await fetch(`http://localhost:8000/api/directors`);
  console.log(result);
  const inform = await result.json();
  console.log(inform);
};

getDirectorsFromDataBase();
