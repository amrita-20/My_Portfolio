import numberImg from "./assets/number.jpg";
import codeSnippetImg from "./assets/coding.jpg";
import computerImg from "./assets/computer.jpg";
import chatImg from "./assets/chat.jpg";

const projects = [
  {
    id: "project1",
    title: "Number Recognizer",
    description:
      "Digit Recognizer application that provides an intuitive GUI enabling users to draw digits and upload digit images",
    img: numberImg,
    alt: "pixel image of digit eight",
    linkText: "View Project",
    techLabel: "Tech & Tools",
    techDesc: "Java, NumPy, JavaFX, TensorFlow, MNIST, Maven",
  },
  {
    id: "project2",
    title: "Word Guess Game",
    description:
      "A responsive website where you can login and play word guessing game",
    img: codeSnippetImg,
    alt: "image of javascript code snippet",
    linkText: "View Project",
    techLabel: "Tech & Tools",
    techDesc: "NodeJS, HTML, CSS, Express, ReactJS, JavaScript",
  },
  {
    id: "project3",
    title: "Ecommerce Website",
    description: "An ecommerce website for shopping",
    img: computerImg,
    alt: "image of desktops",
    linkText: "View Project",
    techLabel: "Tech & Tools",
    techDesc: "NodeJS, HTML, CSS, Express, ReactJS, JavaScript",
  },
  {
    id: "project4",
    title: "Chat Application",
    description: "Chat application where multiple user can chat in group",
    img: chatImg,
    alt: "a group of image containingmobile, coffee mug and chats",
    linkText: "View Project",
    techLabel: "Tech & Tools",
    techDesc: "Java, NumPy, JavaFX, TensorFlow, MNIST, Maven",
  },
];

export default projects;
