function mudarCor() {
      const p = document.getElementById("texto");
      p.style.color = p.style.color === "red" ? "blue" : "red";
    }

    function mudarFundo() {
      const body = document.body;
      body.style.backgroundColor =
        body.style.backgroundColor === "yellow" ? "white" : "yellow";
    }

    function alternarModo() {
      const body = document.body;
      if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
      }
    }