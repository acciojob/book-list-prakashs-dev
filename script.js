//your JS code here. If required.
const form = document.querySelector(".form-group");
      const submit = document.getElementById("submit");
      const tbody = document.getElementById("book-list");

      function deleteRecod(event) {
        const deleteButton = event.target;
        const record = deleteButton.parentNode;
        record.remove();
      }

      const addBook = (event) => {
        event.preventDefault();
        const obj = {
          title: form["title"].value,
          author: form["author"].value,
          isbn: form["isbn"].value,
        };
        form.reset();
        createNewRecord(obj);
      };

      function createNewRecord(data) {
        const row = document.createElement("tr");
        for (let key in data) {
          const cell = document.createElement("td");
          cell.innerText = data[key];
          row.appendChild(cell);
        }
        const clear = document.createElement("td");
        clear.innerText = "X";
        clear.className = "delete";
        clear.addEventListener("click", deleteRecod);
        row.appendChild(clear);
        tbody.appendChild(row);
      }
      submit.addEventListener("click", addBook);