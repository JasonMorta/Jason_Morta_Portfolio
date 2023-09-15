
import js from '../../img/JS.svg';
import css from '../../img/CSS.svg';
import html from '../../img/html5.svg';
import gitIcon from '../../img/gitHub.svg';
import herokuIcon from '../../img/heroku.png';
import jquery from '../../img/jquery.png';
import mysql from '../../img/mysql.png';
import firebase from '../../img/firebase.png';
import Django from '../../img/django.png';
import react from '../../img/react.png';
import bootS from '../../img/boots.svg';
import mongoDB from '../../img/mongodb.svg';
import py from '../../img/python.png';
import next from '../../img/next.png';
import chrome from '../../img/chrome.png';
import dropbox from '../../img/dropbox.png';
import node from '../../img/node.png';
import mui from '../../img/MUi.png';
import express from '../../img/express.png';
import netlify from '../../img/netlify.png';
import store from '../../img/workPreviews/store.jpg';
import game from '../../img/workPreviews/cardGame.jpg';
import iTune from '../../img/workPreviews/iTunesMusicAPI.jpg';
import weather from '../../img/workPreviews/weather.jpg';
import movies from '../../img/workPreviews/movies.jpg';
import toDo from '../../img/workPreviews/toDoList.png';
import dogs from '../../img/workPreviews/eventsplanner.jpg';
import carList from '../../img/workPreviews/carsdb.png';
import expressApp from '../../img/workPreviews/express.png';
import scims from '../../img/workPreviews/scims.png';
import render from '../../img/render.png';
import djangoPrev from '../../img/workPreviews/django.png';
import dropboxPrev from '../../img/workPreviews/ext.jpg';


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
         'Cart system',
         'VAT calculation',
         'Shipping methods',
         'LocalStorage'
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
            title: 'Live demo',
            status: '!offline'

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
         'Find any media on the iTunes API',
         'Add/remove media to favorite',
         'Loading indicators',
         'Express backend server',
         'Async programing'
         
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
            icon: render,
            link: 'https://ituned.onrender.com/',
            title: 'Live demo',
            status: 'online'


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
         'Class components',
         'setTimeout, setInterval',
         'Ternary Operator',
         'Game data is stored in state'
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
            title: 'Live demo',
            status: '!offline'

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
         'Get the local weather of any City',
         'setTimeout, setInterval',
         '.env API key',
         'Async programing',
         'OpenWeatherMap API',
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/weather-app.git',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://mortaweather.netlify.app/',
            title: 'Live demo',
            status: '!offline'

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
         'Return the current most popular movies',
         'themoviedb.org API',
         'Select move for more details',
         'Google Analytics',
        
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
            title: 'Live demo',
            status: '!offline'

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
         'Stores data to MongoDB',
         'JTW(JavaScript Token Authentication)',
         'CRUD operation',
         'User accounts',
         'LocalStorage',

        
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
            title: 'Live demo',
            status: 'offline'

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
         'Stores data to MongoDB',
         'JTW(JavaScript Token Authentication)',
         'CRUD operation',
         'User accounts',
         'User rolls',
         'Comment section',

        
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/doggy-event-planner.git',
            title: 'Git repo'
         },
         {
            icon: render,
            link: 'https://dog-event-app.onrender.com/',
            title: 'Live demo',
            status: 'online'

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
         'Stores data to MongoDB',
         'CRUD operation',
         'Sort by age',
         'Update by name',
         'Update Many',

        
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
            title: 'Live demo',
            status: 'offline'

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
         'Writes data to a .json file on the backend server',
         'CRUD operation',

        
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
            title: 'Live demo',
            status: 'offline'

         } 
      ]

   },

   {
      id:   9,
      prev: [scims],
      title: "Scrimba course journal",
      skills: [{
         icon: react,
         name: 'React'
      }, {
         icon: js,
         name: 'JavaScript'
      }, {
         icon: css,
         name: 'CSS3'
      }, {
         icon: html,
         name: 'HTML5'
      }],
      features:   [
         'I created functional cards of all the small practices and projects in this course.',
         'The card design was inspired by the Yu-Gi-Oh card game',
         'The starts was an indication of the difficulty level',
         'I built this before starting my Bootcamp course',],
      links: [
         {  
            icon: gitIcon,
            link: 'https://github.com/JasonMorta/SCRIMBA-react-CourseTemplates',
            title: 'Git repo'
         },
         {
            icon: netlify,
            link: 'https://myscrims.netlify.app/',
            title: 'Live demo',
            status: '!offline'

         } 
      ]

   },
   {
      id:  10,
      prev: [djangoPrev],
      title: "In progress: Django & MySQL",
      skills: [{
         icon: Django,
         name: 'Django'
      }, {
         icon: mysql,
         name: 'MySQL'
      }, {
         icon: py,
         name: 'Python'
      
      }, {
         icon: bootS,
         name: 'Bootstrap'
      }, {
         icon: css,
         name: 'CSS3'
      }, {
         icon: html,
         name: 'HTML5'
      }
         ],
      features:   [
         'CRUD operation',
         'Stores data to mysql Desktop',
         'This was mainly a practice project to learn Django and mysql',
      ],
      links: [
         {  
            icon: gitIcon,
            link: 'https://github.com/JasonMorta/Django-todo-crud-app',
            title: 'Git repo'
         },
         {
            icon: '',
            link: '',
            title: ''
         } 
      ]
   },
   {
      id:  11,
      prev: [dropboxPrev],
      title: "Chrome extension",
      skills: [{
         icon: js,
         name: 'JavaScript'
      }, {
         icon: css,
         name: 'CSS3'
      }, {
         icon: html,
         name: 'HTML5'
      }, {
         icon: chrome,
         name: 'Chrome extension API'
      }, {
         icon: dropbox,
         name: 'Dropbox API'
      }
         ],
      features:   [
         'Chrome extension that finds student task folder on dropbox',
         'Finds the current week folder automatically',
         'Creates download and direct links to tasks',
         'Also includes several DOM manipulation functions to improve reviewers productivity',

      ],
      links: [
         {
            icon: gitIcon,
            link: 'https://github.com/Morta-Organization/Dropbox-File-Finder-UI-popup-chrome-extension',
            title: 'Git repo'
         },
         {
            icon: '',
            link: '',
            title: ''
         }
      ]
   },

   //Inprogress object
   {
      id:  12,
      prev: ['empty'],
      title: "In progress: Job tracker",
      skills: [
         {icon: react, name: 'React'},
         {icon: bootS, name: 'Bootstrap'},
         {icon: firebase, name: 'Firebase'}
      ],
      features:   [],
      links: [
         {  
            icon: gitIcon,
            link: 'https://github.com/JasonMorta/Django-todo-crud-app',
            title: 'Git repo'
         },
         {
            icon: '',
            link: '',
            title: ''

         } 
      ]

   }
]