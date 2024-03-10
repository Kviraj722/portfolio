import FileSharing from "../assets/images/Screenshot from 2024-01-08 21-30-30.png";
import DevDetective from "../assets/images/Screenshot from 2024-01-08 21-35-12.png";
import PromptAi from "../assets/images/image.png";

export const projects = [
  {
    thumbnail: FileSharing,
    title: "Buddy.file.share",
    content: `A File sharing application build on NextJs 14.`,
    liveUrl: "https://file-sharing-dusky.vercel.app/",
    tools: ["NextJs", "Tailwind", "Firebase"],
  },

  {
    thumbnail: PromptAi,
    title: "Prompt AI",
    content: `Prompt AI is a robust and fully functional prompt sharing application. Share your prompts with world.`,
    liveUrl: "https://prompt-ai-virajkawa.vercel.app/",
    tools: ["NextJs", "Tailwind", "MongoDB"],
  },

  {
    thumbnail: DevDetective,
    title: "Dev Detective",
    content: `

    DevDetective is a web application built using HTML, CSS, and JavaScript. The application allows users to search for GitHub profiles and display basic information about the user, including their avatar, username, bio, number of followers, and number of repositories. The application makes use of the GitHub API to retrieve the necessary data.`,
    liveUrl:
      "https://dev-detective-ekclcic2n-virajs-projects-4f585551.vercel.app/",
    tools: ["HTML", "CSS", "JavaScript", "Github APIs"],
  },
];
