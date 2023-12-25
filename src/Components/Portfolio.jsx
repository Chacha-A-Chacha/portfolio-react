/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/uiux.png";

const imageAltText = "art";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to Build a Chatbot with Python and Rasa 🤖",
    description:
      "A step-by-step tutorial on how to create a conversational agent using Python, Rasa, and natural language processing techniques.",
    url: "https://realpython.com/python-rasa-chatbot/",
  },
  {
    title: "Software Testing for Beginners",
    description:
      "Learn the basics of software testing, such as unit testing, integration testing, and test automation. Discover the tools and frameworks that can help you write and run tests effectively.",
    url: "https://www.edx.org/course/software-testing-fundamentals",
  },
  {
    title: "My Portfolio Site",
    description:
      "Showcase of my skills and projects as a software engineer. Built with React, Bootstrap, and Firebase. Includes a contact form and a blog section.",
    url: "https://my-portfolio-site.com/",
  },
  {
    title: "Git and GitHub for Beginners",
    description:
      "Video course to teach you the essentials of version control and collaboration with Git and GitHub. Learn how to create repositories, branches, commits, pull requests, and more.",
    url: "https://www.udemy.com/course/git-and-github-for-beginners/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
