const div = document.createElement("div");
div.setAttribute("class", "child");
document.body.appendChild(div);

  setInterval(
    function () {
        div.style.backgroundColor = "red";
    },3000);