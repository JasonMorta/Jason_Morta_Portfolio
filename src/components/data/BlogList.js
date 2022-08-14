 import quad from '../../img/workPreviews/Quadratic functions.png'
 import linearSearch from '../../img/workPreviews/linearSearch.png'
 import binary from '../../img/workPreviews/binary.png'
 import './style.css'

 
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 0,
    blog: {
      heading: "Concurrency in Web-development",
      description: {
        intro: `In web-development this simply means, the ability to
                execute more than one function or task simultaneously or "near" simultaneously...`,
        paragraph: [
        <p>
          <b>Single Threaded nature of JavaScript.</b>
          <br/>
          Concurrency is important when waiting on I/O such as network request, read/write from disks, or user input. To see why concurrency is important we need to under stand how JavaScript works. JavaScript runs on a single thread. This means, that it runs code line by line and must finish executing a line or block of code before moving to the next one. This is called synchronous programing.
          <br/><br/>
        </p>,

        <p>
          <b>Asynchronous programming.</b>
          <br/>
          Concurrency is implemented with asynchronous programming. Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task is running.
          This is a function that can execute and while it's waiting for data to return, other functions can continue their normal workflow and when that data is received the asynchronous function completes its execution without blocking the application workflow. This is also known as a promise.
          <br/><br/>
          <b>Promises</b> are the foundation of asynchronous programming in JavaScript. A promise is an object returned by an asynchronous function. Other common programming methods that make use of this implementation are, Async & Await, AJAX (Asynchronous JavaScript And XML), setTimeOut function, and Web APIs.
          <br/><br/>
        </p>,

        <p>
          <b>How concurrency is implemented with Node.js.</b>
          <br/>
          Node.js makes use of an event loop. When an event is executed, that event is placed inside an <b>event queue</b>, and the JavaScript thread goes through the queue and executes each event until the queue is empty. When any of these events are asynchronous, meaning the need to wait for a response/promise that the event is placed in a <b>stack</b> and continues the workflow and executes the next event. When the promise of those events in the stack is resolved/received, the event completes its execution and is also removed from the stack and the queue. This allows Node.js to execute multiple requests concurrently.
          <br/><br/>
          <b>The roll asynchronous programming plays in concurrency.</b>
          <br/>
          Since asynchronous programming allows multiple events to execute and not wait on long-running events to complete before executing the next but rather continue to the next and finish the long-running event at a later time. This creates concurrent workflow in an application.
          <br/><br/>
        </p>,
        <p>
          <b>How web APIs are related to implementing concurrency.</b>
          <br/>
          An example of how concurrency is used in web APIs would be an application like Twitter, Facebook, or WhatsApp. These applications offload their requests to a server that can use more than one thread at a time. These server architectures are specifically designed to handle thousand of requests without slowing down the application. Thus multiple users can make and receive requests concurrently.  
          <br/><br/>
        </p>,
        <p>
          <b>How Oracle and MongDB supports database concurrency.</b>
          <br/>
          MongoDB and Oracle maintain data concurrency in a multi-user environment by using a data locking model and concurrency control to prevent users from modifying the same data simultaneously. Multiple users can read the same data concurrently but only one user can modify that data. When data is being modified by a user, another user can still read that data but is locked or blocked from modifying it. This means that if user1 started modifying a file, user2 can also modify it but won't be able to save that modified file, since user1 got first access to the file, any other user that attempts to make changes to the file will be blocked.
          <br/><br/>
        </p>


      ]

      }
    },
    created: "Friday, August 12, 2022"
  },
  {
    id: 1,
    blog: {
      heading: "Big O notation basics for web developers",
      description: {
        intro: `Big O notation is used in maths, complexity theory, and computer science, it basically tells you how fast a function grows and declines. AKA "Analyze your codes complexity or performance"...`,
        paragraph: [
        <>
          <div className='big-O'>
            <p><b>Why web developers should know about it.</b>
            As a web-developer writing code that works is the goal in every project, but we should be able to do more than that. Web devs should also learn to write code as efficiently and effectively as possible. You must be able to analyze the performance in terms of speed and resources of any piece of code, i.e how fast the algorithm is or how much memory is required to run the code. With Big O notation we are able to do this.
            </p>
            <br/>
            <p>In Big O notation there three algorithms/functions we use for analyzing our codes complexity.</p>
          
            <ul className='algorithms'>
              <li>
                Linear time complexity O(n) = as the size or input increases the amount of time it takes to complete this function also increases linearly.
              </li>
              <li>
                Constant time complexity 0(1) = the
                time to complete a function does not change even
                if the input increases.
              </li>
              <li>
                Quadratic time complexity  O(n²) = the time it takes to complete a function increases quadratically.
              </li>
            </ul>
            <br/>
            <br/>
              <p style={{marginBottom: '10px'}}><b>Quadratic function O(n²)</b></p>
              <p className='quad-function'>
              In programming, we care more about the more significant functions than the smaller ones, because the larger or more complex an algorythm is, the more time and memory it needs to execute. The Quadratic(O(n²)) algorithm is a function that starts out linearly but becomes more complex as it makes reference to inputs multiple times. An of these concepts is nested loops. <br/>
              If this loop had more nested loops, the input references would increase over time and would have an impact on performance.
                <img  src={quad} alt="Quadratic function" />
              </p>
            <br/>
          </div>
          <div>
            <p><b>Linear vs Binary searching</b></p>
            <p>Searching is one of the most commonly performed tasks in programing. There are many functions and methods of searching for data in arrays or objects in JavaScript.
            
            </p><br/>

            <p><b>Linear Search</b></p>
            
              <p  className='quad-function'>
                Loner goes through a list one item at a time without skipping. The bigger the list gest the more time it takes to complete the search.  This is an O(n) search in complexity.<br/>
              <img  src={linearSearch} alt="Linear Search" />
              </p>
            
            <br/>
            <br/>
            <p><b>Binary Search</b></p>
            <p  className='quad-function binary'>This method divides the array roughly in half every time it checks if the item in the array is the one we're looking for. So the search time is but in half. This is an O(Log n) search in complexity.
            <img  src={binary} alt="Binary Search" />
            </p>
          </div>
        </>
      ]

      }
    },
    created: "2022"
  },
  {
    id: 2,
    blog: {
      heading: "Interfaces",
      description: {
        intro: `Intro 3...`,
        paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

      }
    },
    created: "2022"
  },
  {
    id: 3,
    blog: {
      heading: "Hashing",
      description: {
        intro: `Intro 3...`,
        paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

      }
    },
    created: "2022"
  }
]


