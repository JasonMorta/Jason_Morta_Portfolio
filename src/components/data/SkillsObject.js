import js from '../../img/JS.svg'
import html5 from '../../img/html5.svg'
import css from '../../img/CSS.svg'
import jQ from '../../img/jquery.png'
import boot from '../../img/boots.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
   {
      id: 'html5',
      skill_img: html5,
      description: [<p><b>HTML5: </b> Everyday I'm learning more and better ways to use HTML elements. 
         Writing much cleaner and reusable code.</p>]
   },
   {
      id: 'css',
      skill_img: css,
      description: [<p><b>CSS3: </b> 
      I use CSS in every project, even the small ones. 
      I'm familiar with Flex Box, Grid and also make use of Bootstrap when needed.</p>]
   },
   {
      id: 'js',
      skill_img: js,
      description: [<p><b>Javascript:</b> I regularly use JS in my projects, using some of
      the latest ES-version syntax like for of, forEach, arrow functions, ternary operator, template literals, and more.</p>]
   },
   {
      id: 'jq',
      skill_img: jQ,
      description: `JQUERY: This library makes adding animation with JS much easier and faster. Because of its support on all modern browsers I tend to use jQuery more often.`
   },
   {
      id: 'bs',
      skill_img: boot,
      description: `BOOTSTRAP: To quickly create responsive tables, images, or forms, I turn to bootstrap but add my own styling to give my code a personal touch.`
   },
]