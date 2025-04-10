import React from 'react';
import { FcAbout } from "react-icons/fc";
import './About.css'

const About: React.FC = () => {
  return (
  <div className='about' id="about">
      <div>
      <FcAbout />
    <h1>About Page</h1>
    <p>Welcome to my personal website! I'm Jerry Vrabel, a passionate developer with a drive to create innovative solutions. This
space serves as a hub for me to share my experiences, projects, and ideas.</p>

<h2>**Who am I?**</h2>

<p>I'm a skilled software developer with [number] years of experience in building robust and scalable applications. My
expertise spans across list relevant technologies or frameworks. When I'm not coding, you can find me mention any
hobbies or interests.</p>

<h2>**What do I do?**</h2>

<p>As a developer, my focus is on crafting high-quality software that solves real-world problems. I believe in staying
up-to-date with the latest trends and technologies to deliver cutting-edge solutions. Some of the projects I've worked on
include:</p>

* briefly mention 1-2 notable projects
* link to GitHub or other public repositories

<h2>**Why this website?**</h2>

<p>I created this site as a way to showcase my work, share knowledge, and connect with like-minded individuals. Here, you'll
find:</p>

* Updates on my latest projects and achievements
* Insights into the development process and lessons learned
* Resources and tutorials on 

<p>Thanks for stopping by! If you have any questions or just want to say hello, feel free to reach out through contact info.</p>

<p>Best regards,</p>
      <p>Jerry Vrabel</p>
      </div>
    </div>
  )
};

export default About;
