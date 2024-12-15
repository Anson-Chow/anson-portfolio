// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaWordpress,
  FaFigma,
  FaPython,
  FaFileExcel,
} from "react-icons/fa";
import React, { useState } from "react";

const html5Icon = <FaHtml5 key="html5" />;
const css3Icon = <FaCss3 key="css3" />;
const jsIcon = <FaJs key="js" />;
const reactIcon = <FaReact key="react" />;
const nextjsIcon = <SiNextdotjs key="nextjs" />;
const nodeIcon = <FaNode key="node" />;
const pythonIcon = <FaPython key="python" />;
const framerIcon = <SiFramer key="framer" />;
const figmaIcon = <FaFigma key="figma" />;
const adobephotoshopIcon = <SiAdobephotoshop key="adobephotoshop" />;
const fileExcelIcon = <FaFileExcel key="fileexcel" />;

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          html5Icon,
          css3Icon,
          jsIcon,
          reactIcon,
          nextjsIcon,
          nodeIcon,
          pythonIcon,
          framerIcon,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [figmaIcon, adobephotoshopIcon],
      },
      // {
      //   title: "Data Analysis",
      //   icons: [fileExcelIcon],
      // },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer - Civiconnect",
        stage: "Jan 2023 - Current",
      },
      {
        title: "Frontend Developer Intern - A&J Security",
        stage: "July 2022 - Oct 2022",
      },
      {
        title: "Frontend Developer Intern - FESimplified",
        stage: "Mar 2022 - Jun 2022",
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];
const Work = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary py-20 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-col gap-x-8 items-center">
          {/* text */}
          <div className="text-center flex xl:w-[1200px] flex-col lg:text-center mb-4 xl:mb-0 items-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My <span className="text-accent">work</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] mx-auto lg:mx-0"
            >
              {/* Here's some of my past work, I'm not too active in this field now. */}
            </motion.p>
            {/* <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%] "
            >
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={`${
                        index === itemIndex &&
                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
              <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                    >
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {/* icons */}
                        {/* {item.icons?.map((icon, itemIndex) => {
                          return (
                            <div
                              className="text-2xl text-white"
                              key={itemIndex}
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div> */}
          </div> 

          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[800px]"
          >
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[800px] min-h-[400px]"
            >
              <WorkSlider />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
