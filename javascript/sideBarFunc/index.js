const doc = window.document;
const sidebar = doc.querySelector(".sidebar");

function openSidebar() {
  sidebar.style.width = "400px";
  console.log("function clicked");
}

function closeSidebar() {
  sidebar.style.width = "0px";
  console.log("function closed");
}