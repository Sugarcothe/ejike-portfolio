// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Williams",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A punctilious, focused, rigorous, and meticulous personal assistant skilled in providing absolute support to A grade executive, along with unaided in executing managerial, administrative, shopping, travel, and appointment scheduling and planning regarding event management with uncomplicated efficiency. I can easily develop an affinity with vendors, project shareholders, and clients in writing as well as in person.  Also, able to operate sensitive and secret data digitally and tackles all dictation and correspondence with implacable confidentiality and rectitude. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [

  // <i class="fab fa-google-plus-square"></i>
  // <i class="fas fa-pizza-slice"></i>
  {
    name: "Google Analytic",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-google",
  },
  {
    name: "Google Keyword Planner",
    // svg: '',
    faClass: "fab fa-keycdn",
  },
  {
    name: "Moz",
    // svg: '',
    faClass: "fas fa-pizza-slice",
  },
  {
    name: "Grammarly",
    // svg: '',
    faClass: "fas fa-spell-check",
  },
  {
    name: " Google Trends",
    // svg: '',
    faClass: "fas fa-poll-h",
  },
  {
    name: "Lumafusion",
    // svg: '',
    faClass: "fas fa-photo-video",
  },
  {
    name: "Excel",
    // svg: '',
    faClass: "fas fa-file-excel",
  },
  {
    name: "Salesforce",
    // svg: '',
    faClass: "fab fa-salesforce",
  },
  {
    name: "Google Data Studio",
    // svg: '',
    faClass: "fas fa-digital-tachograph",
  },
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects/Experience";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: " Agaba Africa",
    skills: ["Assocaite Editor, Content Creator"],
    url: "https://www.facebook.com/AGABAfrica",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project2",
    name: "Montecrest Hotel",
    skills: ["Social Media Manager"],
    url: "https://instagram.com/montcrest.hotel?utm_medium=copy_link",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project3",
    name: "Shunem Home Ideas",
    skills: ["Social Project Cordinator"],
    url: "https://www.facebook.com/shunemhomeideas/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project4",
    name: "Vintage Hair",
    skills: ["Content Manager, SEO"],
    url: "www.vintagehairs.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "School Of Food Bussiness",
    skills: ["Social Media Manager"],
    url: "https://web.facebook.com/School-of-food-business-102045671895601/?_rdc=1&_rdr",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Kulenga Research Lab",
    skills: ["Social Project Coordinator, Currently, Chief Editor of Kulenga Mathematics"],
    url: "https://www.facebook.com/kulengalabs/",
  },
  
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Certifications/Awards";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Leadership & Management",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Ejike Williams",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
