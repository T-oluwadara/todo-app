function addItem(event) {
  event.preventDefault();
  let textEl = document.getElementById("input-todo");

  db.collection("todo-items").add({
    text: textEl.value,
    status: "active",
  });

  textEl.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
  });
}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    console.log(item);
    itemsHTML += `
   
          <div class="todo-item flex flex-row justify-start py-5 px-3 md:px-5 border-b dark:border-veryDarkGrayishBlue3">
            <div class="check">
              <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked" : ""} flex justify-center items-center h-6 w-6 rounded-full border dark:border-veryDarkGrayishBlue3 cursor-pointer">
                <img src="images/icon-check.svg" alt="" class="mx-auto" />
              </div>
            </div>
            <div class="new-todo-text ${item.status == "completed" ? "checked" : ""}">
              <p class="pl-5 text-darkGrayishBlue dark:text-lightGrayishBlue">${item.text}</p>
            </div>
          </div>
    
    `;
  });

  document.querySelector(".todo-list").innerHTML = itemsHTML;
  eventListeners();
}

function eventListeners() {
  let todoCheckmarks = document.querySelectorAll(".todo-item .check-mark");
  let clearCompleted = document.querySelector(".items-clear-button");

  todoCheckmarks.forEach((checkMark) => {
    checkMark.addEventListener("click", function () {
      markComplete(checkMark.dataset.id);
    });
  });

  clearCompleted.addEventListener("click", function () {
    clearCompletedItems();
  });
}

function markComplete(id) {
  let item = db.collection("todo-items").doc(id);
  item.get().then(function (doc) {
    if (doc.exists) {
      let status = doc.data().status;
      if (status == "active") {
        item.update({
          status: "completed",
        });
      } else if (status == "completed") {
        item.update({
          status: "active",
        });
      }
    }
  });
}

function clearCompletedItems(path = "todo-items") {
  db.collection(path)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        item = doc.data();
        if (item.status == "completed") {
          doc.ref.delete();
        }
      });
    });
}

function deleteCollection(path) {
  db.collection(path)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
}

deleteCollection("todo-items");
getItems();
