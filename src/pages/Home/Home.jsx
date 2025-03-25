import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* <div className="grid grid-cols-3 gap-2"> */}
      <div className="">
        <div className="p-6 bg-white ">
          <h1 className="text-3xl font-bold text-gray-800">
            🚀 Full Stack Developer | IT Trainer | Software Consultant
          </h1>

          <p className="mt-4 text-gray-600">
            I’m a passionate <strong>Full Stack Developer</strong> with{" "}
            <strong>5+ years of experience</strong> in building scalable,
            high-performance web applications. I specialize in
            <span className="font-semibold">
              {" "}
              JavaScript (ES6+), React, Next.js, Node.js, Express, PostgreSQL,
              Firebase, and Tailwind CSS
            </span>
            — developing everything from interactive UIs to robust backend
            architectures.
          </p>

          <p className="mt-4 text-gray-600">
            Beyond coding, I’m an <strong>IT Trainer</strong> dedicated to
            helping career switchers and aspiring developers break into tech. I
            design structured training programs covering{" "}
            <span className="font-semibold">
              Front-End, Back-End, and Full Stack Development
            </span>
            , ensuring practical, real-world learning.
          </p>

          <p className="mt-4 text-gray-600">
            I also run a <strong>software agency</strong>, delivering top-tier
            digital solutions for businesses. Whether it's crafting web
            platforms, optimizing performance, or guiding teams through modern
            tech stacks, I thrive on creating impact through technology.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                💡 What I Do Best:
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Full Stack Web Development (MERN & PERN Stack)</li>
                <li>Scalable Backend Solutions & API Development</li>
                <li>Frontend Architecture & UI/UX Optimization</li>
                <li>IT Training & Mentorship (JavaScript, React, Next.js)</li>
                <li>Software Consulting for Startups & Businesses</li>
              </ul>
            </div>
            <div>
              <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                🛠 Tech Stack:
              </h2>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>JavaScript (ES6+), TypeScript, OOP, MVC</li>
                <li>React, Next.js, Redux, Tailwind CSS</li>
                <li>Node.js, Express, PostgreSQL, Firebase</li>
                <li>RESTful APIs, Authentication, Database Management</li>
                <li>Agile, Git/GitHub, CI/CD, Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">Pictures</div>
      {/* </div> */}
    </div>
  );
};

export default Home;
