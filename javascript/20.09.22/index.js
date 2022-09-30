for(let a=1; a>=10; a++){
    console.log(a);
}

let doc = window.document;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     doc.write(`&#128009`);
//   } else {
//     doc.write(`&#128018`);
//   }
//   doc.write(`<br><br>`);
// }

// for (let i = 0; i < 10; i++) {
//   doc.write(`&#12800${i}`);
//   doc.write(`<br>`);
//   doc.write(`<br>`);
// }

for (let i = 0; i < 5; i++) {
  doc.write(`&#127774 `.repeat(5));
  doc.write("<br>");
}

for (let i = 1; i <= 5; i++) {
  doc.write(`&#11088 `.repeat(i));
  doc.write("<br>");
}

for (let i = 5; i >= 1; i--) {
  doc.write(`&#11088 `.repeat(i));
  doc.write("<br>");
}

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     doc.write(`&#127773 `);
//   }
//   doc.write("<br>");
// }

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

// DOM (Document Object Model)

// let h1 = doc.getElementsByTagName("h1");

// h1[1].innerText = "☺";
// h1[2].innerText = "♦";
// h1[3].innerText = "↑";