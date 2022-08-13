
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
import store from '../../../img/workPreviews/store.jpg';
import game from '../../../img/workPreviews/cardGame.jpg';
import iTune from '../../../img/workPreviews/iTunesMusicAPI.jpg';
import weather from '../../../img/workPreviews/weather.jpg';


//my works object
export const projectList = [
   {
      id:   0,
      prev: [store],
      title: "Store",
      skills:  [html, css, js, bootS],
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
         }
      ]

   },
   {
      id:   1,
      prev: [iTune],
      title: "iTunes API",
      skills:  [react, node, express, bootS, css],
      features:   [
         '› Find any media on the iTunes API',
         '› Add/remove media to favorite',
         '› Loading indicators',
         '› Express backend server'
         
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
            link: 'hhttps://fullstack-itunes-playlist.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   2,
      prev: [game],
      title: "Animal card game",
      skills:  [react, css, bootS],
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
            icon: herokuIcon,
            link: 'https://match-your-animals-game.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   },
   {
      id:   3,
      prev: [weather],
      title: "Weather API",
      skills:  [react, bootS, css],
      features:   [
         '› Get the local weather of any City',
         '› setTimeout, setInterval',
         '› .env API key',
         '› Async await'
      ],
      links: [
         {  
            icon: gitIcon,
            link:'https://github.com/JasonMorta/WD-LVL2-Project1_Game_React.git',
            title: 'Git repo'
         },
         {
            icon: herokuIcon,
            link: 'https://match-your-animals-game.herokuapp.com/',
            title: 'Live demo'

         } 
      ]

   }
];