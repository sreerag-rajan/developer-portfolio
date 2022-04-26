// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import FrontEnd from '../assets/img/front-end-app.jpeg'
import BackEnd from '../assets/img/back-end-app.jpeg'


export const projectsData = [
    {
        id: 2,
        projectName: 'GitErDone',
        projectDesc: 'Users are able to login/register their own profiles. Once logged in the user can create lists (i.e. Groceries, Chores, Items), once created the lists gets added to the users profile and saved into the Mongo database. From there they can update their lists (add/delete items in the lists). Every edit will update the database that is registered to that user.',
        tags: ['Mongoose', 'EJS','Javascript', 'Node.js'],
        code: 'https://github.com/ares4444/BackendGiterdun',
        demo: 'https://practical-meninsky-36f305.netlify.app/',
        image: BackEnd
    },
    {
        id: 3,
        projectName: 'MusicalCrafts',
        projectDesc: 'Search by artist or songs and get a list of all the available songs with their respective lyrics. Each song will be contained within their own cards, and the user can press on the dropdown button to show the lyrics',
        tags: ['HTML', 'CSS', "JavaScript"],
        code: 'https://github.com/ares4444/front-end-project',
        demo: 'https://educative-clone.vercel.app/',
        image: FrontEnd
    },
    // {
    //     id: 4,
    //     projectName: 'Dragon Ball Memory Game',
    //     projectDesc: 'Click on cards to reveal the image and find all the pairs of the DB characters. Each attempt will be counted. Compete with yourself or others to see who can clear the game in the least moves',
    //     tags: ['React',],
    //     code: 'https://github.com/ares4444/memory-game',
    //     demo: 'https://reliance-digital-clone.herokuapp.com/',
    //     image: "https://miro.medium.com/max/875/1*qRNfRbuHCDC1ct0chLZoWA.png"
    // },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/