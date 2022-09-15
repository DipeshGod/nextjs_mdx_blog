import React from "react";

const MoreAboutMe = () => {
  return (
    <div
      className="py-10 mb-40 container mx-auto xs:px-5 px-5 md:px-0"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/originals/4e/aa/b6/4eaab69fcf8d928738072cd355a980db.jpg")',
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="flex justify-between align-middle flex-wrap container mx-auto">
        <div className="w-full md:w-1/2 pb-4">
          <h1 className="text-3xl font-medium mb-10 tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            More About Me
          </h1>
          <p className="text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            asperiores labore exercitationem magni, maxime voluptas dignissimos,
            beatae libero iure est suscipit vitae? Nam provident ratione
            necessitatibus harum tempora doloribus maiores qui voluptatem
            consequatur commodi debitis excepturi sapiente ducimus possimus
            ipsum corporis nesciunt, architecto reiciendis molestias facere
            minima consectetur. Reiciendis tenetur suscipit fugiat aperiam
            voluptates esse voluptate modi aliquam? Ex, animi quis. Consequuntur
            dolorum tenetur quis, aliquam, asperiores odit facilis saepe beatae
            fugit velit dolorem! Error non vitae explicabo quasi amet atque,
            enim beatae delectus illo perspiciatis, suscipit blanditiis repellat
            iste repudiandae officia eveniet debitis cum, laboriosam nostrum
            nobis? Blanditiis, itaque.
          </p>
        </div>
        <div className="w-1/2 h-96">
          {/* <img
            className="w-full md:w-1/3"
            src="https://i.pinimg.com/originals/4e/aa/b6/4eaab69fcf8d928738072cd355a980db.jpg"
            alt="monkey d luffy"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
