import logo_light from './logo_light.png'
import logo_dark from './logo_dark.png'
import hero_img from './hero_img.png'
import cbz from './cbz.png'
import zimswitch from './zimswitch.png'
import econet from './econet.png'
import oldmutual from './oldmutual.png'
import anomally from './anomally.png'
import genai from './genai.jpg'
import data from './data.jpg'
import user_one from './user_one.jpg'
import user_two from './user_two.jpg'
import user_three from './user_three.jpg'
import user_four from './user_four.jpg'
import user_five from './user_five.jpg'
import user_six from './user_six.jpg'
import user_seven from './user_seven.jpg'
import user_eight from './user_eight.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase,faBusinessTime,faRobot,faFileShield} from '@fortawesome/free-solid-svg-icons';


const assets = {
    logo_light,
    logo_dark,
    hero_img
}

export const company_logos = [
    zimswitch,
    oldmutual,
    econet,
    cbz
]
export const services = [
  {
    title: "Automated Data Processing",
    description:
      "Process, clean, and transform large datasets instantly using advanced AI pipelines that eliminate manual work.",
    icon: faDatabase,
  },
  {
    title: "Real-Time Insights",
    description:
      "Generate actionable insights in real time with AI-powered analytics that help you make fast, accurate decisions.",
    icon: faBusinessTime,
  },
  {
    title: "Custom AI Models",
    description:
      "Build and deploy custom machine learning models tailored to your business needs—no advanced coding required.",
    icon: faRobot,
  },
  {
    title: "Secure Cloud Integration",
    description:
      "Connect your data sources securely with enterprise-grade encryption and seamless cloud integration.",
    icon: faFileShield,
  },
];

export const workData = [
  {
    title: "Real-Time Anomaly Detection Engine",
    description: "Developed and deployed a proprietary engine utilizing deep learning models to identify anomalies.",
    image: anomally
  },
  {
    title: "Scalable Data Pipeline Optimization (Petabyte Scale)",
    description: "Successfully re-engineered our core data processing pipelines using distributed computing.",
    image: data
  },
  {
    title: "Generative AI for Synthetic Data Generation",
    description: "Launched a new service enabling the creation of high-fidelity synthetic datasets.",
    image: genai
  }
];

export const teamData = [
  {
    name: "Dr. Alana Chen",
    jobTitle: "Chief AI Scientist",
    image: user_one, 
  },
  {
    name: "Benjamin Kalu",
    jobTitle: "Lead Data Engineer",
    image: user_two,
  },
  {
    name: "Sofia Rodriguez",
    jobTitle: "Machine Learning Operations (MLOps) Manager",
    image: user_three,
  },
  {
    name: "Jamal Adebayo",
    jobTitle: "Principal Software Architect",
    image: user_four,
  },
  {
    name: "Elena Petrova",
    jobTitle: "Data Visualization Specialist",
    image: user_five,
  },
  {
    name: "Kenji Tanaka",
    jobTitle: "Cybersecurity Analyst",
    image: user_six,
  },
  {
    name: "Priya Sharma",
    jobTitle: "Natural Language Processing (NLP) Engineer",
    image: user_seven,
  },
  {
    name: "Marcus Green",
    jobTitle: "Product Manager - Data Platform",
    image: user_eight,
  },
];


export default assets