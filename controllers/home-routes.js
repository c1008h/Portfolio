const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const projects = [
  {
    title: 'Fork the Food',
    bold: 'Save money and time!',
    description: 'This application is a tool for taking the ingredients a user inputs and returning a recipe that utilizes those ingredients. In addition to this a user can save their favorite recipes to local storage to be accessed later.',
    deployLink: 'https://eyesackel.github.io/fork-the-food/',
    githubLink:'https://github.com/EyesackEl/fork-the-food',
    screenShot:'/images/forkthefood.png',
    id:1
  },
  {
    title: 'dogHub',
    bold: 'Tinder but for dogs...',
    description: 'An app that is used to find your dog a suitable friend.',
    deployLink: 'https://ancient-scrubland-48723.herokuapp.com/',
    githubLink:'https://github.com/davidpascual2/Project-2',
    screenShot:'/images/doghub.png',
    id:2
  },
  {
    title: 'E-Commerce Backend',
    bold: 'Starting a online store? We got your back!',
    description: 'A backend of an e-commerce store that is used to store data from categories, products, and tags',
    deployLink: '',
    githubLink:'https://github.com/c1008h/E-Commerce-Backend',
    screenShot: '/images/ecombackend.png',
    id: 3
  },
  {
    title: 'ReadME Generator',
    bold: 'No need to waste time creating a ReadME everything single time!',
    description: 'Answer questions in your terminal to quickly generate a professional readme for your projects',
    deployLink: 'https://github.com/c1008h/Professional-README-Generator',
    githubLink:'',
    screenShot:'/images/readme.png',
    id: 4
  },
  {
    title: 'Note Taker',
    bold: 'No money for therapist? Write your feelings out with this note taker!',
    description: 'An application that allows users to add notes, edit notes, and delete notes',
    deployLink: '',
    githubLink:'https://github.com/c1008h/Note-Taker',
    screenShot: '/images/notetaker.png',
    id: 5
  },
  {
    title: 'Team Profile Generator',
    bold: 'Need to display your employee cards onto a website? We got your back!',
    description: 'An application to keep track of employees within a company by answering questions in the terminal and render it onto the web',
    deployLink: '',
    githubLink:'https://github.com/c1008h/team-profile-generator',
    screenShot:'/images/teamprofilegenerator.png',
    id: 6
  },
];

// Get homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});
// Get contact
router.get('/contact', async (req, res) => {
  res.render('contact');
});
// Get portfolio
router.get('/portfolio', async (req, res) => {
  return res.render('portfolio', {projects});
});


//get one project
router.get('/project/:num', async (req, res) => {
  return res.render('project', projects[req.params.num - 1]);
});


module.exports = router;
