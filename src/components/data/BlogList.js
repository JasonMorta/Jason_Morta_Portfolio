 import quad from '../../img/workPreviews/Quadratic functions.png'
 import linearSearch from '../../img/workPreviews/linearSearch.png'
 import binary from '../../img/workPreviews/binary.png'
 import fibonacci from '../../img/workPreviews/fibonacci.png'
 import complexity from '../../img/workPreviews/complexity.png'
 import fibSec from '../../img/workPreviews/recurFib.png'
 import './style.css'
 import classImg from '../../img/workPreviews/class.png'

 
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
      heading: "Big-O Notation basics for web-developers",
      description: {
        intro: `Big-O notation is used in maths, complexity theory, and computer science, it basically tells you how fast a function grows and declines.  "Analyze the complexity or performance of your code"...`,
        paragraph: [
        <>
          <div className='big-O'>
            <p><b>Why web developers should know about it.</b>
            As a web-developer writing code that works is the goal in every project, but we should be able to do more than that. Web devs should also learn to write code as efficiently and effectively as possible. You must be able to analyze the performance in terms of speed and resources of any piece of code, i.e how fast the algorithm is or how much memory is required to run the code. With Big O notation we are able to do this.
            </p>
            <br/>
            <div style={{position: 'relative'}}>
              <img style={{width: '100%', maxWidth: '500px'}} src={complexity} alt='http://bigocheatsheet.com/'/>
              <p className='source'>source: http://bigocheatsheet.com/</p>
            </div>
            <br/>
            <p>In Big O notation there three algorithms you can use for analyzing our codes complexity.</p>
            <ul className='algorithms'>
              <li>
                Linear time complexity O(n) = as the size or input increases the amount of time it takes to complete this function also increases linearly.
              </li>
              <li>
                Constant time complexity O(1) = the
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
            <p>
              Searching is one of the most commonly performed tasks in programing. There are many functions 
              and methods of searching for data in arrays or objects in JavaScript.
            </p>
            <br/>
            <p><b>Linear Search</b></p>
            
              <p  className='quad-function'>
              Linear goes through a list one item at a time without skipping. The bigger the list gest the 
              more time it takes to complete the search.  This is an O(n) search in complexity.<br/>
              <img  src={linearSearch} alt="Linear Search" />
              </p>
            
            <br/>
            <br/>
            <p><b>Binary Search</b></p>
            <p  className='quad-function binary' style={{flexDirection: 'row'}}>
              This method divides the array roughly in half every time it checks if the 
              item in the array is the one we're looking for. This reduces the search time. 
              This is an O(Log n) search in complexity.
              <br/>
              In this example, if the value is not found in the middle and is less than the middle value,
              it starts looking on the left side, cutting await the other half of the array. Then it repeats 
              this process until the value is found.
              <img  src={binary} alt="Binary Search" />
            </p>
            <br/>
            <br/>
            <p>
              <b>The Fibonacci sequence</b></p>
            <p  className='quad-function binary' style={{flexDirection: 'row'}}>
              A Fibonacci sequence is a group of numbers where every 
              number is the sum of two numbers before it. It counts the sequence 
              starting with index 0. So the first ten numbers would be 
              0,1,1,2,3,5,8,13... Thus any algorithm should return the same values.
            </p>
            <br/>
            <p>
              The examples below show two of the Fibonacci sequences. The recursive and non-recursive way.              
              Even the recursive function is the simplest, the downside is that it needs to recalculate all 
              previous values each time. In Big O notation complexity this would be equal to O(2^N) or high 
              if you have more of these algorithms in your application and would not be an efficient way to 
              calculate data, making the non recursive algorithm a more efficient way to calculate data.
            </p>

            <div className='fib-images'>
            <img  src={fibonacci} alt="fibonacci non-recursive function" />
            <br/>
            <img  src={fibSec} alt="fibonacci recursive function" />
            </div>
          </div>
        </>
      ]

      }
    },
    created: "Sunday, August 14, 2022"
  },
  {
    id: 2,
    blog: {
      heading: "Interfaces In Web-development",
      description: {
        intro: `An interface in the way your application interacts with the outside world, I's any that another software can see on your software object and use ti interact with the softwares functionality...`,
        paragraph: [
          <>
            <p>Another example of an interface would be something like the ports on the back of a PC. These ports exposes the functionally inside the computer to the outside world.</p>
            <br/>
            <p><b>What are interfaces in OOP(Object Orientated Programing)</b></p>
            <p>Interface in programing is the precess of exposing a programs functionality like a class to another grogram or the outside world. A class is a template for creating objects, or code written by a programer to define the attributes and operations of an object, these properties can be for example a function that execute a payment. Interfaces can specify what a class must do but not how it does it. Interfaces doesnt allow you to make changes to a class, becasue everyhing inside a class are final or static. An interfaces on sets the rules for what the classes</p>
            <p></p>
            <br/>
            <p><b>Why JavaScript does not really use interfaces</b><br/>
            JavaScript has no built-in method of  creating interfaces, but since JavaScript is an extremely dynamically typed language, you can create interfaces with methods. One method of creating objects in Javascript is with teh constructor method, this is a special method of a class for creating and initializing an object instance of that class.
            </p>
            <br/>
            <br/>
            <img src={classImg} style={{width: '100%'}} alt="class constructor snippet" />
            <br/>
            <br/>
            <p><b>Strict mode is in JavaScript </b><br/>
            In JavaScript Strict Mode allows you to place a function in a “strict” operating context. This strict context prevents certain actions from being taken. So a good reason for using it is because Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations. It prevents or throws errors when relatively “unsafe” actions are taken. Strict mode also makes it easier to write “secure” JavaScript.
            </p>
            <p> In JavaScript, you can reference variables that don't exist or even work with a broken object, and when running the code you won't catch these errors until you run it inside the browser. TypeScript prevents errors like this from happening by using strict mode call types or type checking. The Language is a trick superset of JavaScript. Even though you can write the same Javascript code inside a .ts file, if you make any reference to a variable that doesn't yet exist in TypeScript, the IDE will throw an error. Because TypeScrypt is a strong type of language, it allows allows you to create your own interfaces. </p>
            
          </>
        ]

      }
    },
    created: "Monday August 15, 2022"
  },
  {
    id: 3,
    blog: {
      heading: "Hashing in Web-development",
      description: {
        intro: `Hashing is the process of taking a value or a string of characters and applying a mathematical function to it and changing its value. One of the uses is to store hash passwords stored in a database...`,
        paragraph: [
          <div className='big-O'>
          <p>Hashing a password, changing its results into random characters. Hashing in One-way. Meaning, that when a value is hashed, it cant be un-hashed to reveal its content. </p><br/>
          
          <p><b>Hash tables</b></p>
          <p>Has tables are data structures that make finding data faster.</p>
          <p>The benefit of using these data structures is, quicker access, you don't need to iterate through every index to look for a specific value. It has quicker access to both reading and writing.</p>

          <p><b>Hashes vs encryptions</b></p>
          <p>Hashing doesn't allow you to get the original input value back. Once the input value is hashed it returns a unique string of about 50 characters, which makes it impossible to determine the input value of a hashed input. Hashed values can not be reversed back to it's original.<br/>
          Encryption however can be revised back to its original value. When encrypting a large file, the encrypted value is also large whereas hashing will remain around 50 characters even if something like a book was hashed.</p>
          <br/>
          <p><b>Map Objects</b></p>
          <p>A Map object in JavaScript is a collection of key-value pares inside the map, very similar to an object, where an object can also hold a key with any value. Hashing in similar in that way, where the original input is the key and the hashed result is the value</p>
          </div>

        ]

      }
    },
    created: "Tuesday August 16, 2022"
  }
]


