
import js from '../../../img/JS.svg';
import css from '../../../img/CSS.svg';
import html from '../../../img/html5.svg';
import gitIcon from '../../../img/gitHub.svg';
import herokuIcon from '../../../img/heroku.png';
import jquery from '../../../img/jquery.png';
import react from '../../../img/react.png';
import bootS from '../../../img/boots.svg';
import mongoDB from '../../../img/mongodb.svg';
import next from '../../../img/next.png';
import node from '../../../img/node.png';
import mui from '../../../img/MUi.png';
import express from '../../../img/express.png';
import netlify from '../../../img/netlify.png';
import store from '../../../img/workPreviews/store.jpg';
import game from '../../../img/workPreviews/cardGame.jpg';
import iTune from '../../../img/workPreviews/iTunesMusicAPI.jpg';
import weather from '../../../img/workPreviews/weather.jpg';
import movies from '../../../img/workPreviews/movies.jpg';
import toDo from '../../../img/workPreviews/toDoList.png';
import dogs from '../../../img/workPreviews/eventsplanner.jpg';
import carList from '../../../img/workPreviews/carsdb.png';
import expressApp from '../../../img/workPreviews/express.png';


//my works object
export const projectList = [
   {
      id:   0,
      prev: [store],
      title: "Store",
      skills: [{
         icon: html,
         name: 'HTML5'
      }, {
         icon: css,
         name: 'CSS3'
      }, {
         icon: js,
         name: 'JavaScript'
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }],
      features:   [
         '› Cart system',
         '› VAT calculation',
         '› Shipping methods',
         '› LocalStorage'
      ],
      gitLink: '',
      herokuLink: "",
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/Level-1-Capstone-Project-My-online-store.git',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://htmlccsstore.netlify.app',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   1,
      prev: [iTune],
      title: "iTunes API",
      skills: [{
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: express,
         name: 'Express'
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Find any media on the iTunes API',
         '› Add/remove media to favorite',
         '› Loading indicators',
         '› Express backend server',
         '› Async programing'
         
      ],
      gitLink: 'https://github.com/JasonMorta/Level-1-Capstone-Project-My-online-store.git',
      herokuLink: "https://fullstack-itunes-playlist.herokuapp.com/",
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/Express-React-iTunes-API.git',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://fullstack-itunes-playlist.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   2,
      prev: [game],
      title: "Animal card game",
      skills: [{
         icon: react,
         name: 'React'
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Class components',
         '› setTimeout, setInterval',
         '› Ternary Operator',
         '› Game data is stored in state'
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/WD-LVL2-Project1_Game_React.git',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://matchtheanimal.netlify.app/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   3,
      prev: [weather],
      title: "Weather API",
      skills: [{
         icon: react,
         name: 'React'
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Get the local weather of any City',
         '› setTimeout, setInterval',
         '› .env API key',
         '› Async programing',
         '› OpenWeatherMap API',
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/weather-app.git',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://match-your-animals-game.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   4,
      prev: [movies],
      title: "Popular Movies API",
      skills: [{
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: express,
         name: 'Express'
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }, {
         icon: css,
         name: 'CSS3'
      }, {
         icon: next,
         name: 'Next.js'
      }],
      features:   [
         '› Return the current most popular movies',
         '› themoviedb.org API',
         '› Select move for more details',
         '› Google Analytics',
        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/Next-Movie-API.git',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://popularmoviesapi.netlify.app/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   5,
      prev: [toDo],
      title: "MERN ToDoList",
      skills: [{
         icon: mongoDB,
         name: 'MongoDB'
      }, {
         icon: express,
         name: 'Express'
      }, {
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: mui,
         name: 'Material Ui'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Stores data to MongoDB',
         '› JTW(JavaScript Token Authentication)',
         '› CRUD operation',
         '› User accounts',
         '› LocalStorage',

        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/MongoDB-To-do-List-JWT.git',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://mernstack-todolist.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   6,
      prev: [dogs],
      title: "Dog Event Planner",
      skills: [{
         icon: mongoDB,
         name: 'MongoDB'
      }, {
         icon: express,
         name: 'Express'
      }, {
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: mui,
         name: 'Material Ui'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Stores data to MongoDB',
         '› JTW(JavaScript Token Authentication)',
         '› CRUD operation',
         '› User accounts',
         '› User rolls',
         '› Comment section',

        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/doggy-event-planner.git',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://dogeventplanner.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   7,
      prev: [carList],
      title: "Cars List DB",
      skills: [{
         icon: mongoDB,
         name: 'MongoDB'
      }, {
         icon: express,
         name: 'Express'
      }, {
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: mui,
         name: 'Material Ui'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Stores data to MongoDB',
         '› CRUD operation',
         '› Sort by age',
         '› Update by name',
         '› Update Many',

        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/MongoDB_Express_React_NodeJS',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://cars-list-db.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   8,
      prev: [expressApp],
      title: "Express Project List",
      skills: [{
         icon: express,
         name: 'Express'
      }, {
         icon: react,
         name: 'React'
      }, {
         icon: node,
         name: 'Node.js'
      }, {
         icon: mui,
         name: 'Material Ui'
      }, {
         icon: css,
         name: 'CSS3'
      }],
      features:   [
         '› Writes data to a .json file on the backend server',
         '› CRUD operation',

        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/My-Frist-Experss-React-App',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://wd-project-list.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   }
];