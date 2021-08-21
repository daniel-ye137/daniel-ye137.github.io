/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Daniel Ye",
  title: "Hi all, I'm Daniel",
  subTitle: emoji(
    "Computer Science student at Cornell University minoring in Operations Research and Information Engineering. I'm currently looking for new-grad SWE roles!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZGoxn7ld_BnIcFyWGj_boIg4AJKJi_o5/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/daniel-ye137",
  linkedin: "https://www.linkedin.com/in/daniel-z-ye/",
  gmail: "dzy3@cornell.edu.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate developer looking to own meaningful projects and add value",
  skills: [
    // emoji(
    //   "⚡ Build out efficient, robust APIs and services"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "OCaml",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "Visual Basic .NET",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "gRPC",
      fontAwesomeClassname: "fas fa-arrows-alt-h"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Gradle",
      fontAwesomeClassname: "far fa-object-group"
    },
    {
      skillName: "LaTeX",
      fontAwesomeClassname: "fas fa-print"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornellLogo.png"),
      subHeader: "Masters of Engineering in Computer Science",
      duration: "August 2021 - May 2022",
      desc: "Enrolled in Cornell MEng Early Admit Program",
      descBullets: ["Coursework: Artificial Intelligence, Databases, The Structure of Information Networks, Simulation Modeling and Analysis"]
    },
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornellLogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2018 - December 2021",
      desc: "Cumulative GPA of 4.04",
      descBullets: ["Computer Science Coursework: Data Structures and OOP (Honors), Discrete Structures, Functional Programming and Data\
      Structures, Computer Systems Organization and Programming, Machine Learning for Intelligent Systems, Algorithms, Operating Systems, \
      Computer Vision, Language and Information",
      "Other Relevant Coursework: Multivariable Calculus, Linear Algebra, Differential Equations, Probability and Statistics, Probability and Statistics II, Optimization I, Optimization II, Evolutionary \
      Algorithms and Games",
    "Current TA for CS 4780: Machine Learning for Intelligent Systems",
  "Past TA for Data Structures and OOP (Honors) and Functional Programming and Data Structures"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering",
      company: "MongoDB",
      companylogo: require("./assets/images/mongodb-logo.png"),
      date: "June 2021 – August 2021",
      desc: "I worked on a SQL to MongoDB Language transpiler written in Rust. I implemented features for the parser, abstract syntax tree, intermediate representation, and code generation. I also implemented a constant-folding optimization for condensing queries and improving run time",
      descBullets: [
        "Rust",
        "MongoDB",
        "SQL"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "NLMatics",
      companylogo: require("./assets/images/nlmaticsLogo.png"),
      date: "June 2020 – August 2020",
      desc: "I implemented features for a Python application to parse PDF files and identify key structures such as headings, tables, and lists. I also developed an API used to calculate sentence for natural language processing. I then deployed it to production using Docker and Kubernetes. Lastly, I ran experiments comparing multiple choice question-answering models using Python and Pytorch. You can read about my projects here in my blog below!",
      descBullets: [
        "Go",
        "Python",
        "gRPC",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Corning",
      companylogo: require("./assets/images/corningLogo.png"),
      date: "June 2019 – August 2019",
      desc: "I implemented a full-stack data visualization dashboard to help engineers monitor the quality of manufacture optical fiber cables. It used queries from both time-series databases and relational databases to calculate optimal parameters used in defining manufacturing equipment behavior.",
      descBullets: [
        "C#",
        ".NET",
        "SQL",
        "WPF",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      projectName: "Screen To Table",
      projectDesc: "An information retrieval system for film-fanatic foodies. It parses movie scripts, identifies food words, and queries a database of recipes to find instructions for how to make the meals that appear on your screen!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://screentotable.herokuapp.com/"
        },
        {
          name: "Visit Repo",
          url: "https://github.com/daniel-ye137/Screen-to-Table"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Critter World",
      projectDesc: "A multiplayer simulation that lets you program your own critter and watch it live, fight, grow, mate, and die (not necessarily in that order). Built with a backend written in Java, a frontend using JavaFX, and client-server functionality using Spark.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/daniel-ye137/CritterWorld"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I've had the chance to write a bit about some of my past projects!",

  blogs: [
    {
      url: "https://blogs.nlmatics.com/nlp/sentence-embeddings/2020/08/07/Smooth-Inverse-Frequency-Frequency-(SIF)-Embeddings-in-Golang.html",
      title: "Smooth Inverse Frequency (SIF) Embeddings in Golang",
      description:
        "Leveraging concurrency tools in Go to increase word vectorization performance"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "dzy3@cornell.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
