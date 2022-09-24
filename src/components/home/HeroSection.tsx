import { useAtom } from "jotai";
import { screenAtom } from "./screenAtom";

const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = useAtom(screenAtom);

  return (
    <section className="bg-white dark:bg-gray-900 mt-20 overflow-hidden">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            I am Dipesh Chaulagain
          </h1>
          <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am full stack developer from Kathmandu, Nepal. Learning new things
            and reading books are my hobby. I have created storyLog to write
            what i learn in more fun way.
          </p>

          <button
            onClick={() => {
              if (currentScreen === 3) {
                setCurrentScreen(1);
              } else {
                setCurrentScreen(3);
              }
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            My Blogs
          </button>
          <button
            onClick={() => {
              if (currentScreen === 3) {
                setCurrentScreen(1);
              } else {
                setCurrentScreen(currentScreen + 1);
              }
            }}
            className="inline-flex items-center md:mx-5 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            What do I do
          </button>
        </div>
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

export default HeroSection;
