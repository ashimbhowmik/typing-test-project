const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {

  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  let id = Math.round(Math.random() * 10000);
  previousTests.push({ questionText, timeTaken, errorCount, id });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
    <div id="${test.id}">
    <h3 class="margine-fixed">${test.questionText}</h3>
    <p class="margine-fixed">You took: <span class="bold">${test.timeTaken}</span> seconds</p>
      <div class="card-design ">
      <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
      <i id="remove-size" class="fa-solid fa-trash-can remove-size" onclick="removeStorage(${test.id})"></i>
      </div>
    </div>
  `;

    histories.appendChild(newRow);
  });
}
const removeStorage = (id) => {
  let data = JSON.parse(localStorage.getItem("testHistory")) || [];
  let newData = data.filter((x) => x.id !== id);
  localStorage.setItem("testHistory", JSON.stringify(newData));
  window.location.reload()
};

document.getElementById('open-blog').addEventListener('click', function () {
  window.location.href = 'blog.html';
})

