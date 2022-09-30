const doc = window.document;
const body = doc.body;
const persons = [
  {
    name: "nagaraj",
    img: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg",
    intro: `My self Fire Fighter.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },

  {
    name: "Guna",
    img: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    intro: `My self VIP.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },
  {
    name: "Wasim",
    img: "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/w_2664,h_1998,c_limit/gettyimages-1146431497.jpg",
    intro: `My self Wasim.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },

  {
    name: "Gopal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLzMewm9M3ac5D7CwpyDkmTiVzt-m282t1A&usqp=CAU",
    intro: `My self Gopal.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },
  {
    name: "Sathish",
    img: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/29790374-a82f-495a-9f04-5ac94c3b4f25/nature-wallpaper13.jpg",
    intro: `My self Playboy.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },
  {
    name: "Prudvi",
    img: "https://i.insider.com/6259cc7c6e3336001926ec08?width=1136&format=jpeg",
    intro: `My self Prudvi.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },
  {
    name: "Prudvi",
    img: "https://i.insider.com/6259cc7c6e3336001926ec08?width=1136&format=jpeg",
    intro: `My self Prudvi.Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. 
    In voluptatum eum necessitatibus quo tempora, 
    placeat fugit, a nobis nam exercitationem vero modi tenetur`,
  },
];

for (const i of persons) {
  const card = doc.createElement("section");
  const img = doc.createElement("img");
  const title1 = doc.createElement("p");
  const title2 = doc.createElement("p");

  card.className = "card";
  img.className = "profile";
  title1.className = "title1";
  title2.className = "title2";

  img.src = i.img;
  title1.textContent = i.name;
  title2.textContent = i.intro;

  card.append(img, title1, title2);
  body.appendChild(card);
}

// for (let i = 1; i <= 10; i++) {
//   const card = doc.createElement("section");
//   const img = doc.createElement("img");
//   const title1 = doc.createElement("p");
//   const title2 = doc.createElement("p");

//   card.className = "card";
//   img.className = "profile";
//   title1.className = "title1";
//   title2.className = "title2";

//   img.src =
//     "https://img.freepik.com/free-photo/front-view-female-student-wearing-backpack-holding-copybook-pen-thinking-blue-wall_140725-46520.jpg?w=2000";
//   title1.textContent = "Title";
//   title2.textContent =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum eum necessitatibus quo tempora, placeat fugit, a nobis nam exercitationem vero modi tenetur saepe illum repellendus inventore asperiores ex consequatur?";

//   card.append(img, title1, title2);
//   body.appendChild(card);
// }

// console.log(card);