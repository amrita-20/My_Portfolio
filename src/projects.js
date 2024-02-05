import numberImg from "./assets/number.jpg";
import codeSnippetImg from "./assets/coding.jpg";
import computerImg from "./assets/computer.jpg";
import chatImg from "./assets/chat.jpg";
import calendarImg from "./assets/calendar.jpg";
import gameImg from "./assets/game.jpg";
import sentimentImg from "./assets/sentiment.jpg";
import ecomImg from "./assets/ecommerce.jpg";

const projects = [
  {
    id: "calendarhub",
    title: "Event Calendar",
    description:
      "This Application provides an intuitive interface for users to view, add, edit, and delete events for a selected date. With this simple interface, You can easily keep track of your schedule and never miss an important event.",
    img: calendarImg,
    alt: "image of calendar",
    linkText: "View Project",
    linkUrl: "https://github.com/amrita-20/Personal_Event_Calendar",
    techLabel: "Tech & Tools",
    techDesc:
      "Node.js, Express, React.js, moment.js, REST APIs, WebPack, Babel, JSON, HTML, CSS, UUID, cookie-parser, MongoDB",
  },
  {
    id: "numberrecognizer",
    title: "Number Recognizer",
    description:
      "Digit Recognizer application that provides an intuitive GUI enabling users to draw digits and upload digit images. It predicts the drwan number or images.",
    img: numberImg,
    alt: "pixel image of digit eight",
    linkText: "View Project",
    linkUrl: "https://github.com/amrita-20/INFO5100_002760658_AmritaDubey/tree/main/Final%20Project",
    techLabel: "Tech & Tools",
    techDesc:
      "Java, NumPy, ML, Pandas, JavaFX, TensorFlow, MNIST, Maven, Kears",
  },
  {
    id: "wordgame",
    title: "Word Guess Game",
    description:
      "A server-side rendered responsive web application featuring a word guessing game. Users can log in, play the game, and view their scores.",
    img: gameImg,
    alt: "image of game",
    linkText: "View Project",
    limkUrl: "https://github.com/amrita-20/WordGamePlayGround",
    techLabel: "Tech & Tools",
    techDesc:
      "NodeJS, HTML, CSS, Express, JavaScript, REST APIs, UUID, cookie-parser",
  },
  {
    id: "ecom",
    title: "Ecommerce Website",
    description:
      "An e-commerce website enabling users to browse, log in, add products to their cart, and complete the checkout process seamlessly for a streamlined shopping experience.",
    img: ecomImg,
    alt: "image of desktops",
    linkText: "View Project",
    techLabel: "Tech & Tools",
    techDesc:
      "NodeJS, Express, REST APIs, HTML, CSS, Express, ReactJS, JavaScript",
  },
  {
    id: "chatapp",
    title: "Chat Application",
    description:
      "A single-page application with client-side rendering for group chat. The application offers a user-friendly forum where individuals can log in, engage in real-time chat, view the list of online users, and send messages seamlessly.",
    img: chatImg,
    alt: "a group of image containingmobile, coffee mug and chats",
    linkText: "View Project",
    linkUrl: "https://github.com/amrita-20/Chat_App/tree/main/project2",
    techLabel: "Tech & Tools",
    techDesc:
      "Node.js, MongoDB, Express, HTML, CSS, RESTful APIs, UUID, cookie-parser",
  },
  {
    id: "sentimentanalysis",
    title: "Sentiment Analysis",
    description:
      "Conducted sentiment analysis on Amazon reviews for cellphone brands.Used Amazon review data from 1996 to 2018, performed data pre-processing, and utilized lexical processing methods for text analytics. For prediction, employed the Naive Bayes Multinomial algorithm, specifically suited for text classification tasks like sentiment analysis. Evaluated the model's performance using metrics such as accuracy, precision, and recall.",
    img: sentimentImg,
    alt: "a group of image containingmobile, coffee mug and chats",
    linkText: "View Project",
    linkUrl: "https://github.com/amrita-20/data-science-project",
    techLabel: "Tech & Tools",
    techDesc:
      "Data Science, Pandas, Numpy, scikit-learn, word clouds, python, ",
  },
];

export default projects;
