import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Devesh Tripathi, and I am currently a 4th-year student pursuing a B.Tech degree in Information Technology. I am a dedicated and passionate individual who is always eager to learn new technologies and explore different programming languages.

Over the years, I have developed a keen interest in front-end web development and have honed my skills in various technologies such as React.js, JavaScript, HTML, and CSS. I have worked on several projects, both individually and in a team, that have enabled me to gain a deep understanding of these technologies and their applications in real-world scenarios.

        </p>

        <br />

        <p className="text-xl">
        Apart from my technical skills, I also possess strong problem-solving and analytical skills, which enable me to find innovative solutions to complex problems. I am a quick learner, adaptable, and always open to constructive feedback, which has helped me to continually improve my skills and stay up-to-date with the latest trends in the industry.

In my free time, I enjoy reading technology blogs and articles, participating in coding competitions, and exploring new tools and frameworks to improve my knowledge and skills. Overall, I am a dedicated and hardworking individual who is always willing to go the extra mile to achieve his goals.
        </p>
      </div>
    </div>
  );
};

export default About;