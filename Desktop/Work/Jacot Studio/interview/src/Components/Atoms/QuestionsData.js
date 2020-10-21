import {Colors} from "./Colors";


const Javascript = {
    Name : "Javascript",
    Color : Colors.Javascript,
    path : "/Javascript"
}

const React = {
    Name : "React",
    Color : Colors.React,
    path : "/React",
}

const CSS = {
    Name : "CSS",
    Color : Colors.CSS,
    path : "/Css"
}

const Web = {
    Name : "Web",
    Color : Colors.Web,
    path : "/Web"
}

const Html = {
    Name : "Html",
    Color : Colors.Web,
    path : "/Html"
}

export const paths = [
/*{Name : "All", path : "/"},*/
{Name : "React", path : "/React"},
{Name : "Css", path : "/Css"},
{Name : "Javascript", path : "/Javascript"},
{Name : "Html", path : "/Html"},
{Name : "Web", path : "/Web"},
]



export const QuestionsAnswersData = [
    {

        id: 1,
        Question : "Ask the candidate to build a click counter?",
        SubQuestion : "",
        Answer : "Sur codeSandBox",
        Source : "On verra",
        Field : React.Name,
        ColorField : React.Color,
        path: React.path,
        Reveal : false,
    },
    {
        id: 2,
        Question : "What is a Closure?",
        SubQuestion : "Can you name two common uses for closures",
        SubAnswer : "",
        Answer : "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
        Source : "https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures",
        OtherSource: "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36",
        Field : Javascript.Name,
        ColorField : Javascript.Color,
        path: Javascript.path,
        Reveal : false,
    },
    {
        id: 3,
        Question : "Difference between Rem and Em?",
        Answer : "While em is relative to the font-size of its direct or nearest parent, rem is only relative to the html (root) font-size. em gives the ability to control an area of a design. As in, scale the type in that specific area relatively. rem gives the ability to scale type across the entire page easily.",
        Source : "https://stackoverflow.com/questions/13941275/how-does-rem-differ-from-em-in-css#:~:text=While%20em%20is%20relative%20to,across%20the%20entire%20page%20easily.",
        Field : CSS.Name,
        ColorField : CSS.Color,
        path: CSS.path,
        Reveal : false,
    },
    {
        id: 4,
        Question : "Name Lifecycle methods and their purpose",
        Answer : "I know the constructor (initiate the state), render, componentDidMount, componentWillUnmount... but I use useEffect hook sinc React 16.4",
        Source : "https://www.youtube.com/watch?v=uRkS5Dqf8ic",
        Field : React.Name,
        ColorField : React.Color,
        path: React.path,
        Reveal : false,
    },
    {
        id: 5,
        Question : "Tell me 4 kinds of major programming paradigms",
        Answer : "Imperative, Logical, Functional and Object-Oriented",
        SubQuestion : "Explain them ?",
        SubAnswer : "1. Imperative (procedural) is like a receipt, computations are performed through a guided sequence of steps. 2. The Logical Paradigm takes a declarative approach to problem-solving. Various logical assertions about a situation are made. 3. The Functional Programming paradigm views all subprograms as functions in the mathematical sense-informally, they take in arguments and return a single solution. 4. Object Oriented Programming (OOP) is a paradigm in which real-world objects are each viewed as seperate entities having their own state which is modified only by built in procedures, called methods.",
        Source : "http://www.eecs.ucf.edu/~leavens/ComS541Fall97/hw-pages/paradigms/major.html",
        Field : Web.Name,
        ColorField : Web.Color,
        path: Web.path,
        Reveal : false,
    },
    {
        id: 6,
        Question : "What is React?",
        Answer : "It is a javascript library developed by Facebook in 2011, follows a components based approach",
        SubQuestion : "What are its features ?",
        SubAnswer : "Uses a virtual DOM, does a server-side rendering",
        Source : "https://www.youtube.com/watch?v=39ZiaKb1bSA",
        Field : React.Name,
        ColorField : React.Color,
        path: React.path,
        Reveal : false,
    },
    {
        id: 7,
        Question : "What is box model?",
        Answer : "It's a box that wraps every single element in the html which the content, the padding, margins and borders. ",
        Source : "https://www.youtube.com/watch?v=ZohZS6xLYE4",
        Field : CSS.Name,
        ColorField : CSS.Color,
        path: CSS.path,
        Reveal : false,
    },
    {
        id: 8,
        Question : "What is specificity ?",
        Answer : "CSS Specificity is the set of the rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.",
        Source : "Google",
        Field : CSS.Name,
        ColorField : CSS.Color,
        path: CSS.path,
        Reveal : false,
    },
    {
        id: 9,
        Question : "What is PropTypes?",
        Answer : "PropTypes makes sure the props objects pass the correct types to a component",
        SubQuestion : "How to use it?",
        SubAnswer : "",
        Source : "https://dev.to/cesareferrari/what-is-proptypes-and-how-to-use-it-in-react-2eml#:~:text=PropTypes%20is%20a%20library%20that,t%20match%20the%20types%20expected.",
        Field : React.Name,
        ColorField : React.Color,
        path: React.path,
        Reveal : false,
    },
    {
        id: 10,
        Question : "var VS let VS const",
        Answer : "Var was used before ES6 updated. Variables are globally scoped or accessible. Let and const have blocked scope. They are declared inside functions or bock of code. Var is function scoped and Let block scoped.",
        SubQuestion : "let VS const",
        SubAnswer : "You cannot reassign const. You cannot write const name = 'John' and then const name = 'Loan', it will not work",
        Source : "https://ui.dev/var-let-const/#:~:text=Turns%20out%2C%20const%20is%20almost,it%20to%20a%20new%20value.&text=The%20take%20away%20above%20is,with%20const%20can't%20be.",
        Field : Javascript.Name,
        ColorField : Javascript.Color,
        path: Javascript.path,
        Reveal : false,
    },
    {
        id: 11,
        Question : "Good revision for Javascript",
        Source : "https://dev.to/tracycss/the-vanilla-javascript-basics-to-know-before-learning-react-js-53aj",
        Field : Javascript.Name,
        ColorField : Javascript.Color,
        path: Javascript.path,
        Reveal : false,
    },


]

