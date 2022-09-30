const doc = window.document;
const div = doc.createElement("div");
const body = doc.body;

// div.style.height = "200px";
// div.style.width = "200px";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "blue";
body.style.height = "100vh";

div.style.height = "100px";
div.style.width = "100px";
div.style.background = "red";

body.appendChild(div);



