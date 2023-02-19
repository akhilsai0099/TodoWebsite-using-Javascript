let saveButton = document.getElementById("save");
let ptag = document.getElementById("text");
saveButton.addEventListener("click", () => {
  let input = document.getElementById("note").value;
  localStorage.setItem(localStorage.length, input);
  console.log(localStorage.length);
});

Object.keys(localStorage).forEach((key) => {
  ptag.innerText += localStorage.getItem(key) + "\n";
});

// Object.keys(localStorage).forEach(function(key){
//     console.log(localStorage.getItem(key));
//  });
