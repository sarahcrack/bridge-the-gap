import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Contribute from "./pages/Contribute";
import Nav from "./pages/Nav";
import Display from "./pages/Display";
import Thanks from "./pages/Thanks";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // create a resources state to pass down to DisplayResources
  const [resources, setResources] = useState([
    {
      contributor: "Bim",
      category: "Design",
      title: "css tricks",
      description: "Handy cheatsheet for css",
      link: "css-tricks.com",
      starred: false,
    },
    {
      contributor: "Paul",
      category: "Collaboration",
      title: "Trello",
      description:
        "Trello is the ultimate project management tool. Start up a board in seconds, automate tedious tasks, and collaborate anywhere, even on mobile.",

      link: "trello.com",
      starred: false,
    },
    {
      contributor: "Paul",
      category: "Collaboration",
      title: "Canva",
      description:
        "Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more.",
      link: "canva.com",
      starred: false,
    },
    {
      contributor: "Paul",
      category: "Collaboration",
      title: "Figma",
      description:
        "Whether you're brainstorming ideas, designing prototypes, or building solutions, Figma helps teams align early and stay in-sync.",
      link: "figma.com",
      starred: false,
    },
    {
      contributor: "Sarah",
      category: "Tutorials",
      title: "React tutorial for beginners",
      description: "React JS tutorials by Programming with Mosh",
      link: "https://youtu.be/SqcYOGIETPk",
      starred: false,
    },
    {
      contributor: "Umamah",
      category: "Planning",
      title: "Miro",
      description:
        "An amazing whiteboard that's very helpful for collaborating on project work",
      link: "https://miro.com/app/dashboard/",
      starred: false,
    },
    {
      contributor: "Otto",
      category: "Careers",
      title: "freeCodeCamp - Interview prep",
      description:
        "If you're looking for free coding exercises to prepare for your next job interview, this is a great site.",
      link: "https://www.freecodecamp.org/learn/coding-interview-prep/",
      starred: false,
    },
    {
      contributor: "Ada",
      category: "Tutorials",
      title: "Code First Girls",
      description:
        "A great organisation that offers free courses for women and non-binary people to learn how to code.",
      link: "https://codefirstgirls.com/",
      starred: false,
    },
    {
      contributor: "Jake",
      category: "Coding",
      title: "W3 Schools",
      description:
        "A great resource for all your coding needs whatever language you are learning!",
      link: "https://www.w3schools.com/",
      starred: true,
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Nav />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/choose" element={<Choose />} />
            <Route
              path="/display"
              element={
                <Display resources={resources} setResources={setResources} />
              }
            />
            <Route
              path="/contribute"
              element={
                <Contribute resources={resources} setResources={setResources} />
              }
            />
            <Route path="/thank-you" element={<Thanks />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
