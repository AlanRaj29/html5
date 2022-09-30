const doc = window.document;
const sidebar = doc.querySelector(".sidebar");

function sidebarFunc() {
  //   console.log(sidebar.style.width);

  //   sidebar.style.width === ""
  //     ? (sidebar.style.width = "400px")
  //     : (sidebar.style.width = "");

  //   if (sidebar.style.width === "") {
  //     sidebar.style.width = "400px";
  //   } else {
  //     sidebar.style.width = "";
  //   }

  if (sidebar.style.width === "") sidebar.style.width = "400px";
  else sidebar.style.width = "";
}