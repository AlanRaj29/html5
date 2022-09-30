const doc = window.document;
const body = doc.body;

// const h1 = doc.createElement("h1");
// const body = doc.body;

// // Inserting content in the element
// h1.innerText = "Hello";

// // Inline Styling
// h1.style.textAlign = "center";
// h1.style.color = "red";


body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";

// // Appending h1 into body
// body.appendChild(h1);

for (let i = 1; i <= 5; i++) {
  const row = doc.createElement("div");
  row.style.display = "flex";
  for (let j = 1; j <= 5; j++) {
    const col = doc.createElement("div");
    col.innerHTML = "&#128525";
    col.className = "col";
    col.style.padding = "1rem";
    // col.style.borderRadius = "50%";
    // col.style.margin = "50%";
    col.style.transition = "0.5s all";
    col.style.border = "1px solid black";
    row.appendChild(col);
  }
  body.appendChild(row);
}