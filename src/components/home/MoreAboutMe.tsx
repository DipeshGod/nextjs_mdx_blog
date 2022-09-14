import React from "react";

const MoreAboutMe = () => {
  return (
    <div>
      <div className="flex justify-between align-middle flex-wrap">
        <div className="w-full md:w-1/2 pb-4">
          <h1 className="text-3xl font-medium mb-10">More About Me</h1>
          <p>
            I am Martin Fowler: an author, speaker… essentially a loud-mouthed
            pundit on the topic of software development, primarily for
            Enterprise Applications. I work for Thoughtworks, a software
            delivery company, where I have the exceedingly inappropriate title
            of {"Chieft Scientist"}I have written half-a-dozen books on software
            development, including Refactoring, and Patterns of Enterprise
            Application Architecture. I write for and edit the website
            martinfowler.com.
          </p>
        </div>
        <img
          className="w-full md:w-1/3"
          src="https://i.pinimg.com/originals/4e/aa/b6/4eaab69fcf8d928738072cd355a980db.jpg"
          alt="monkey d luffy"
        />
      </div>
    </div>
  );
};

export default MoreAboutMe;
