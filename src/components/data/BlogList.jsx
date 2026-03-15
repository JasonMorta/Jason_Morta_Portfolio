import quad from "../../img/workPreviews/Quadratic functions.png";
import linearSearch from "../../img/workPreviews/linearSearch.png";
import binary from "../../img/workPreviews/binary.png";
import fibonacci from "../../img/workPreviews/fibonacci.png";
import complexity from "../../img/workPreviews/complexity.png";
import fibSec from "../../img/workPreviews/recurFib.png";
import classImg from "../../img/workPreviews/class.png";
import styles from "./BlogList.module.css";

export default [
  {
    id: 0,
    blog: {
      heading: "Concurrency in Web-development",
      description: {
        intro: `In web-development this simply means, the ability to execute more than one function or task simultaneously or "near" simultaneously...`,
        paragraph: [
          <p key="c1">
            <b>Single Threaded nature of JavaScript.</b>
            <br />
            Concurrency is important when waiting on I/O such as network request, read/write from
            disks, or user input. To see why concurrency is important we need to understand how
            JavaScript works. JavaScript runs on a single thread. This means that it runs code line
            by line and must finish executing a line or block of code before moving to the next one.
            This is called synchronous programming.
            <br />
            <br />
          </p>,
          <p key="c2">
            <b>Asynchronous programming.</b>
            <br />
            Concurrency is implemented with asynchronous programming. Asynchronous programming is a
            technique that enables your program to start a potentially long-running task and still
            be able to be responsive to other events while that task is running. This is a function
            that can execute and while it&apos;s waiting for data to return, other functions can
            continue their normal workflow and when that data is received the asynchronous function
            completes its execution without blocking the application workflow. This is also known as
            a promise.
            <br />
            <br />
            <b>Promises</b> are the foundation of asynchronous programming in JavaScript. A promise
            is an object returned by an asynchronous function. Other common programming methods that
            make use of this implementation are Async &amp; Await, AJAX, setTimeout, and Web APIs.
            <br />
            <br />
          </p>,
          <p key="c3">
            <b>How concurrency is implemented with Node.js.</b>
            <br />
            Node.js makes use of an event loop. When an event is executed, that event is placed
            inside an <b>event queue</b>, and the JavaScript thread goes through the queue and
            executes each event until the queue is empty. When any of these events are asynchronous,
            meaning the need to wait for a response or promise, that event is placed in a <b>stack</b>
            and continues the workflow and executes the next event. When the promise of those events
            in the stack is resolved, the event completes its execution and is also removed from the
            stack and the queue. This allows Node.js to execute multiple requests concurrently.
            <br />
            <br />
            <b>The role asynchronous programming plays in concurrency.</b>
            <br />
            Since asynchronous programming allows multiple events to execute and not wait on
            long-running events to complete before executing the next one, it creates concurrent
            workflow in an application.
            <br />
            <br />
          </p>,
          <p key="c4">
            <b>How web APIs are related to implementing concurrency.</b>
            <br />
            An example of how concurrency is used in web APIs would be an application like Twitter,
            Facebook, or WhatsApp. These applications offload their requests to a server that can
            use more than one thread at a time. These server architectures are specifically designed
            to handle thousands of requests without slowing down the application.
            <br />
            <br />
          </p>,
          <p key="c5">
            <b>How Oracle and MongoDB support database concurrency.</b>
            <br />
            MongoDB and Oracle maintain data concurrency in a multi-user environment by using a
            data-locking model and concurrency control to prevent users from modifying the same data
            simultaneously. Multiple users can read the same data concurrently but only one user can
            modify that data.
            <br />
            <br />
          </p>,
        ],
      },
    },
    created: "Friday, August 12, 2022",
  },
  {
    id: 1,
    blog: {
      heading: "Big-O Notation basics for web-developers",
      description: {
        intro: `Big-O notation is used in maths, complexity theory, and computer science. It basically tells you how fast a function grows and declines...`,
        paragraph: [
          <div className={styles.bigO} key="b1">
            <p>
              <b>Why web developers should know about it.</b>
              As a web-developer writing code that works is the goal in every project, but we should
              also learn to write code as efficiently and effectively as possible.
            </p>
            <br />
            <div style={{ position: "relative" }}>
              <img style={{ width: "100%", maxWidth: "500px" }} src={complexity} alt="http://bigocheatsheet.com/" />
              <p className={styles.source}>source: http://bigocheatsheet.com/</p>
            </div>
            <br />
            <p>In Big O notation there are three algorithm patterns you can use for analysis.</p>
            <ul className={styles.algorithms}>
              <li>Linear time complexity O(n)</li>
              <li>Constant time complexity O(1)</li>
              <li>Quadratic time complexity O(n²)</li>
            </ul>
            <br />
            <br />
            <p style={{ marginBottom: "10px" }}>
              <b>Quadratic function O(n²)</b>
            </p>
            <p className={styles.quadFunction}>
              In programming, we care more about the significant functions than the smaller ones.
              Nested loops are a common example.
              <img src={quad} alt="Quadratic function" />
            </p>
            <br />
          </div>,
          <div key="b2">
            <p>
              <b>Linear vs Binary searching</b>
            </p>
            <p>Searching is one of the most commonly performed tasks in programming.</p>
            <br />
            <p>
              <b>Linear Search</b>
            </p>
            <p className={styles.quadFunction}>
              Linear search goes through a list one item at a time without skipping.
              <img src={linearSearch} alt="Linear Search" />
            </p>
            <br />
            <br />
            <p>
              <b>Binary Search</b>
            </p>
            <p className={`${styles.quadFunction} ${styles.binary}`} style={{ flexDirection: "row" }}>
              This method divides the array roughly in half every time it checks if the item in the
              array is the one we&apos;re looking for.
              <img src={binary} alt="Binary Search" />
            </p>
            <br />
            <p>
              <b>Fibonacci and recursion</b>
            </p>
            <div className={styles.fibImages}>
              <img src={fibonacci} alt="Fibonacci" />
              <img src={fibSec} alt="Recursive Fibonacci" />
            </div>
          </div>,
        ],
      },
    },
    created: "Saturday August 13, 2022",
  },
  {
    id: 2,
    blog: {
      heading: "Strict mode, TypeScript interfaces and classes",
      description: {
        intro: `TypeScript and classes build on JavaScript patterns, but strict mode and interfaces add structure and better tooling...`,
        paragraph: [
          <>
            <p key="s1">
              <b>Classes in JavaScript</b>
              <br />
              A class is a blueprint that describes the behavior and structure of an object.
            </p>
            <p key="s2">
              <b>Interfaces and TypeScript</b>
              <br />
              Interfaces define the shape of data or class behavior. TypeScript uses them to make
              JavaScript development safer and clearer.
            </p>
            <img key="s3" src={classImg} style={{ width: "100%" }} alt="class constructor snippet" />
            <p key="s4">
              <b>Strict mode in JavaScript</b>
              <br />
              Strict mode helps catch unsafe actions earlier and makes JavaScript easier to optimize.
            </p>
          </>,
        ],
      },
    },
    created: "Monday August 15, 2022",
  },
  {
    id: 3,
    blog: {
      heading: "Hashing in Web-development",
      description: {
        intro: `Hashing is the process of taking a value or a string of characters and applying a mathematical function to it and changing its value...`,
        paragraph: [
          <div className={styles.bigO} style={{ margin: "0" }} key="h1">
            <p style={{ marginTop: "0" }}>
              Hashing a password changes its results into random characters. Hashing is one-way,
              meaning a hashed value cannot be reversed to reveal the original input.
            </p>
            <p style={{ margin: "0" }}>
              <b>Hash tables</b>
            </p>
            <p style={{ marginTop: "0" }}>Hash tables are data structures that make finding data faster.</p>
            <p style={{ margin: "0" }}>
              <b>Hashes vs encryptions</b>
            </p>
            <p style={{ marginTop: "0" }}>
              Hashing does not allow you to get the original input value back, while encryption can
              be reversed with the correct key.
            </p>
            <p style={{ margin: "0" }}>
              <b>Map Objects</b>
            </p>
            <p style={{ marginTop: "0" }}>
              A Map object in JavaScript is a collection of key-value pairs and works well as a way
              to think about hashed input and output.
            </p>
          </div>,
        ],
      },
    },
    created: "Tuesday August 16, 2022",
  },
  {
    id: 4,
    blog: {
      heading: "Five Important Tips for Beginner Web Developers Before Diving into Learning Next.js",
      description: {
        intro: "Next.js is a powerful React framework that enables developers to build server-rendered React applications with ease. However, before diving into learning Next.js...",
        paragraph: [
          <div style={{ margin: "0" }} key="n1">
            <p style={{ marginTop: "0" }}><b>Solidify your Fundamentals:</b> Build a strong foundation in HTML, CSS, and JavaScript.</p>
            <p style={{ marginTop: "0" }}><b>Familiarize Yourself with React:</b> Next.js is built on React, so core React concepts matter.</p>
            <p style={{ marginTop: "0" }}><b>Learn SSR and SSG:</b> Understand server-side rendering and static site generation.</p>
            <p style={{ marginTop: "0" }}><b>Explore Routing and Data Fetching:</b> Learn how Next.js handles both.</p>
            <p style={{ marginTop: "0" }}><b>Practice with Small Projects:</b> Start small to build real understanding.</p>
          </div>,
        ],
      },
    },
    created: "15 September 2023",
  },
  {
    id: 5,
    blog: {
      heading: "How to Optimize Your LinkedIn Profile as a Web Developer",
      description: {
        intro: "Optimizing your LinkedIn profile can significantly boost your visibility and attractiveness to potential employers or clients...",
        paragraph: [
          <div style={{ margin: "0" }} key="l1">
            <p style={{ marginTop: "0" }}><b>Optimize Your Profile:</b> Use a professional profile picture and a strong headline.</p>
            <p style={{ marginTop: "0" }}><b>Showcase Your Work:</b> Include projects, links, and visuals.</p>
            <p style={{ marginTop: "0" }}><b>Endorsements and Recommendations:</b> Ask for social proof from others.</p>
            <p style={{ marginTop: "0" }}><b>Engage with the Community:</b> Comment, post, and join relevant discussions.</p>
            <p style={{ marginTop: "0" }}><b>Continuous Learning and Certifications:</b> Highlight recent learning and accomplishments.</p>
          </div>,
        ],
      },
    },
    created: "19 October 2023",
  },
];
