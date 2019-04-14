import project1 from '../assets/Crypto Price Check.png';
import project2 from '../assets/nonasciicharacters.png';
import project3 from '../assets/Pomodoro Clock.png';
import project4 from '../assets/Reminder Pro.png';
import project5 from '../assets/firebase auth.png';
import project6 from '../assets/stockprice app.png';

const PROJECTS = [
  {
    id: 5,
    title: 'Firebase Auth',
    description: 'A React App using firebase to authenticate users and show them secured pages. Go example of using Routes and authentication together.',
    link: 'https://davidreact.github.io/firebaseauth/',
    image: project5
  },
  {
    id: 6,
    title: 'Stock Price App',
    description: 'A React App using recharts.js and an API to get stock prizes for the last 20 days and display them on a chart. Good example on how to handle asnyc fetch requests and display them on a chart. The API allows only 5 request per minute for free.',
    link: 'https://davidreact.github.io/firebaseauth/',
    image: project6
  },
  {
    id: 1,
    title: 'Cryptochart Price Check',
    description: 'A React App that I built, using JS, charts and code web dev concepts!',
    link: 'https://davidreact.github.io/cryptochart/',
    image: project1
  },
  {
    id: 2,
    title: 'Find Non ASCII Characters Tool',
    description: 'A web app that I built, involving JS and code web dev concepts!. The purpose was to find non ASCII characters in a very long text file that were causing issues when imported to a database',
    link: 'https://davidreact.github.io/nonasciicharacters/',
    image: project2
  },
  {
    id: 3,
    title: 'Pomodoro Clock React App',
    description: 'A React App to apply concepts like managing state and the use of components.',
    link: 'https://davidreact.github.io/reactpomodoroclock/',
    image: project3
  },
  {
    id: 4,
    title: 'Reminder Pro React App',
    description: 'A React App that I built, involving JS, managing state and code web dev concepts!',
    link: 'https://davidreact.github.io/reminderapp/',
    image: project4
  }
]; 

export default PROJECTS;