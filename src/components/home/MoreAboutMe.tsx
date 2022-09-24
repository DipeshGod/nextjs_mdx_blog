import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { screenAtom } from "./screenAtom";

const MoreAboutMe = () => {
  const [currentScreen, setCurrentScreen] = useAtom(screenAtom);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-20 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mr-auto place-self-center lg:col-span-7"
        >
          <motion.h1
            variants={item}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            I love to build top notch modern software and apps
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            The modern software solutions should be built to automate,
            rationalize and improve the business. It should either make you or
            save you the money and sometimes it is solving very important
            problem
          </motion.p>
          <motion.button
            variants={item}
            type="button"
            className="text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            My Blogs
          </motion.button>
          <motion.button
            onClick={() => {
              if (currentScreen === 3) {
                setCurrentScreen(1);
              } else {
                setCurrentScreen(3);
              }
            }}
            variants={item}
            className="inline-flex items-center md:mx-5 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            More About Me
          </motion.button>
        </motion.div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
