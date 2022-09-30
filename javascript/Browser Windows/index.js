let doc = window.document;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    doc.write(`&#128009`);
  } else {
    doc.write(`&#128018`);
  }
  doc.write(`<br><br>`);
}



// for (let i = 0; i < 10; i++) {
//   doc.write(`&#12800${i}`);
//   doc.write(`<br>`);
//   doc.write(`<br>`);
// }



for (let i = 0; i < 5; i++) {
  doc.write(`&#127774 `.repeat(5));
  doc.write("<br>");
}
