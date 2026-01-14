       fetch("/todo")
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("list");
        list.innerHTML = "";

        data.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.title + (item.completed ? " (Is True)" : " (Is false)");
          list.appendChild(li);
        });
      })
      .catch(err => {
        document.getElementById("list").textContent = "Error loading data";
      });
