export const fullVersionLink = "https://resume.narze.live";
export const sourceLink = "https://github.com/nacnano/resume";
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg";

export const introData = {
  name: "Chotpisit Adunsehawat",
  nickname: "Nac",
  email: "chotpisit.adu@gmail.com",
  github: "nacnano",
  linkedin: "chotpisit-adunsehawat-b68912210",
  location: "Bangkok, Thailand",
  website: "nacnano.dev",
  phone: process.env.PHONE_NUMBER,
};

export const technologies = [
  {
    section: "Languages:",
    details: [
      "C, C++, Python, HTML, CSS, Javascript, TypeScript, Node.js, Java, SQL",
    ],
  },
  {
    section: "Frameworks:",
    details: [
      "(Software Development) ReactJS, NextJS, VueJS, TailwindCSS, NestJS, ExpressJS, Prisma, GraphQL, JavaFX",
      "(Data Science) Pandas, Numpy, scikit-learn, TensorFlow",
    ],
  },
  {
    section: "Tools:",
    details: ["Git, GitHub, Docker, Selenium, Cypress, Markdown"],
  },
  {
    section: "Services:",
    details: ["GCP, Firebase, Github Actions, Vercel, Netlify, MongoDB"],
  },
];

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Chulalongkorn University, TH. 2022-Present (Current GPA 4.00)",
  },
  {
    head: "High School",
    details: "Mahidol Wittayanusorn School, TH. 2019-2022 (GPA 4.00)",
  },
  {
    head: "Middle School",
    details: "Suankularb Wittayalai School, TH. 2016-2019 (GPA 3.56)",
  },
];

export const workExperiences = [
  {
    position: "Full Stack Developer (Internship)",
    company: "Wang Data Market",
    url: "https://wang.in.th",
    years: ["June, 2023", "August, 2023"],
    details: [
      "Implemented new input types for its form features",
      "Helped designing and developing new base structures for an upcoming AI features",
      "Learned new React concepts for maintaining complex projects",
    ],
  },
  {
    position: "Full Stack Developer and Data Scientist (Internship)",
    company: "MonkeyEveryday",
    url: "https://monkeyeveryday.com",
    years: ["March, 2022", "August, 2022"],
    details: [
      "Designed, implemented, and maintained the TCAS Ranking services",
      "Helped querying its database for data analysis tasks using MySQL and PostgreSQL",
      "Automated bots for updating users's data using Selenium",
      "Implemented end-to-end tests using Cypress",
      "Maintained Monkey-Monkey websites for both frontend and backend",
    ],
  },
];

export const achievements = [
  {
    name: "Thinc's 10 Days in 10 Years Project (2022)",
    details:
      "Won the first place in Thinc's 10 Days in 10 Year Project, a competition for implement a project for solving specific problems in 10 day ",
  },
  {
    name: "Computer Olympiad Camp (2019-2022)",
    details:
      "Qualified to the POSN Computer Olympiad second camp at Kasetsart University (2019) and Mahidol Wittayansorn School (2020, 2021). Placed the first reserved (สำรองอันดับหนึ่ง) to be participating in the 17th Thailand Olympiad in Informatics. I attempted the competition unofficially with the same problemset and time control and scored between Silver to Gold medal award.",
  },
  {
    name: "Meta Hacker Cup (2022)",
    details: "Qualified to the second round of Meta Hacker Cup 2022",
  },
  {
    name: "Google Codejam (2020, 2021)",
    details: "Qualified to the first round of Google Codejam 2020 and 2021",
  },
  {
    name: "KU01 Coding Competition (2019)",
    details:
      "Achieved the perfect score and first place from the competition at Kasetsart University",
  },
];

export const projects = [
  {
    name: "CU Get Reg",
    details:
      "Thinc's open source project to provide courses data to Chulalongkorn students and plan their enrollments. As a new member of Thinc, I contributed by developing its Backoffice backend service using NestJS and GraphQL for managing admin's tasks",
    url: "https://github.com/thinc-org/cugetreg",
  },
  {
    name: "CU Get Rekt",
    details:
      "Thinc's 10 days project for making student's withdrawals and resignations more efficient and easier by using its automated pdf generator and score prediction features. My role was designing, developing, deploying, and maintaining its backend using Nestjs and Prisma.",
    url: "https://github.com/Nacnano/cugetrekt",
  },
  {
    name: "E-learning Website",
    details:
      "Thinc and Cleverse's 5 days Hack to School project for creating a website by given technical requirements. My role was developing its backend using Nestjs and Prisma and deploying the project using Docker and Google Cloud Run",
    url: "https://github.com/thinc-org/hacktoschool-fryingchicken",
  },
  {
    name: "MWIT29 Archive",
    details:
      "A website for archiving memorable information from my high school by allowing the students to edit their data using NextJS with MongoDB and Google Cloud Storage (Working in Process)",
    url: "https://github.com/nacnano/mwit29-archive",
  },
  {
    name: "School Computer Science Project",
    details:
      "Usage of MASK R-CNN model for Image Segmentation and Random Forest model for Factor Identification to analyse multimedia effects on students' learning efficiency",
    url: "https://github.com/Nacnano/predicting-and-comparing-learners-interest-in-note-taking-from-multimedia-using-a-machine-learning-",
  },
  {
    name: "GFinder",
    details:
      "Mathematical Model and Paper for finding the Greatest Of All Time player in Tennis sport by analyzing major Tennis tournament data for competing in the International Mathematical Model Competition 2021. My role was coding and implementing the model using Python",
    url: "https://github.com/Nacnano/IMMC-2021",
  },
];

export const others = [
  "Langauges: Thai (Native), English (Working Proficient), Chinese (Elementary)",
  "Non-tech-related working experiences/achievements: Academic Tutor (Math/Physics/Chemistry/Bio/English), Qualified for the Thai Scholarship (ทุนกระทรวงวิทยฯ) for studying Computer Science, Got accepted to Faculty of Medicine, Chulalongkorn University",
  "Extra curricular activities: President of School International Chess Club, Head of Information Department of School Yearbook Committee, Head of IT Staffs at PreMWIT Camp 2022",
];
