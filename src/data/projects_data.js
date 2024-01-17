import FileSharing from "../assets/images/Screenshot from 2024-01-08 21-30-30.png";
import DevDetective from "../assets/images/Screenshot from 2024-01-08 21-35-12.png"
import StudyNotion from "../assets/images/Screenshot from 2024-01-08 21-29-02.png";

export const projects = [
  {
    thumbnail: FileSharing,
    title: "Buddy.file.share",
    content: `A File sharing application build on NextJs 14.`,
    liveUrl: "https://file-sharing-dusky.vercel.app/",
    tools: ["NextJs", "Tailwind", "Firebase"],
  },

  {
    thumbnail: StudyNotion,
    title: "StudyNotion An Ed-tech platform",
    content: `StudyNotion is a robust and fully functional ed-tech platform designed to empower both students and instructors. It allows users to create, consume, and rate educational content, fostering an enriched learning experience. With its user-friendly interface and cutting-edge features, StudyNotion aims to make education more accessible, engaging, and interactive. Features`,
    liveUrl: "https://github.com/Kviraj722/StudyNotion-An-Edtech",
    tools: ["MongoDb","ExpressJs","React", "NodeJs"],
  },

  {
    thumbnail: DevDetective,
    title: "Dev Detective",
    content: `

    DevDetective is a web application built using HTML, CSS, and JavaScript. The application allows users to search for GitHub profiles and display basic information about the user, including their avatar, username, bio, number of followers, and number of repositories. The application makes use of the GitHub API to retrieve the necessary data.`,
    liveUrl: "https://dev-detective-ekclcic2n-virajs-projects-4f585551.vercel.app/",
    tools: ["HTML", "CSS", "JavaScript", "Github APIs"],
  },


];
