// blogData.js
import quad from '../../img/workPreviews/Quadratic functions.png';
import linearSearch from '../../img/workPreviews/linearSearch.png';
import binary from '../../img/workPreviews/binary.png';
import fibonacci from '../../img/workPreviews/fibonacci.png';
import complexity from '../../img/workPreviews/complexity.png';
import fibSec from '../../img/workPreviews/recurFib.png';
import classImg from '../../img/workPreviews/class.png';

const blogData = [
  {
    id: 0,
    heading: "Concurrency in Web-development",
    created: "Friday, August 12, 2022",
    intro: "In web-development this simply means, the ability to execute more than one function or task simultaneously...",
    content: [
      {
        title: "Single Threaded nature of JavaScript",
        text: `Concurrency is important when waiting on I/O such as network request...`,
      },
      {
        title: "Asynchronous programming",
        text: `Asynchronous programming is a technique...`,
      },
      {
        title: "How concurrency is implemented with Node.js",
        text: `Node.js makes use of an event loop...`,
      },
      {
        title: "Web APIs and concurrency",
        text: `An example of how concurrency is used in web APIs would be...`,
      },
      {
        title: "Database concurrency",
        text: `MongoDB and Oracle maintain data concurrency...`,
      }
    ]
  },
  {
    id: 1,
    heading: "Big-O Notation basics for web-developers",
    created: "Sunday, August 14, 2022",
    intro: "Big-O notation is used in maths, complexity theory, and computer science...",
    sections: [
      {
        title: "Why web developers should know about it",
        text: `Web devs should also learn to write code efficiently...`,
        image: complexity,
        imageAlt: "Big O cheat sheet"
      },
      {
        title: "Quadratic function O(n²)",
        text: `The Quadratic algorithm starts out linearly...`,
        image: quad
      },
      {
        title: "Linear Search",
        text: `Linear goes through a list one item at a time...`,
        image: linearSearch
      },
      {
        title: "Binary Search",
        text: `This method divides the array roughly in half...`,
        image: binary
      },
      {
        title: "Fibonacci Sequences",
        text: `The Fibonacci sequence is a group of numbers where...`,
        images: [fibonacci, fibSec]
      }
    ]
  },
  // more blogs...
];

export default blogData;
