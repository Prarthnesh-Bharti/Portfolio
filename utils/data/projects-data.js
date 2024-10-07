import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SORTING VISUALISER',
        description: "It is a robust and scalable RESTful API and it provides seamless integration and interaction for users and applications.",
        tools: ['HTML', 'CSS', "Javascript"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },

    {
        id: 2,
        name: 'E-COMMERCE WEBSITE',
        description: 'I have designed and developed a full-stack web app which is a e-commerce website using the technology listed.',
        tools: ['HTML', 'CSS', "Javascript","EJS", "Express", "MongoDB" ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'PERSONAL PORTFOLIO',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['Nextjs', 'SCSS', 'JavaScript'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    
    {
        id: 4,
        name: 'CRIME MANAGEMENT SYSTEM',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['HTML', 'CSS', 'Javacsript'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
        
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
