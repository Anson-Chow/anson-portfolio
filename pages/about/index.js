import React, { useState } from "react";

// icons
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

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Create instances of your icons with keys
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

//  about data
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

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary py-12 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-left w gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 pt-12"
          >
            A bit <span className="text-accent">About Me.</span>{" "}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[1000px]  max-[400px]:text-[12px] max-[700px]:text-[13px] mx-auto xl:mx-0 mb-2 xl:mb-4 px-2 xl:px-0"
          >
            Two years ago, I had great grades—4.1/4.33 CGPA—but I knew I could
            do more. Now, I’m in my final year of university with a lower CGPA
            but with many more stories to tell.
            <br /> <br />
            Most recently, I became a six-figure trader. I use prop firms to
            leverage capital. It took me over nine months of consistent screen
            time and learning, upwards of eight hours a day. I trade from 6–10
            a.m. every day and don’t look at charts at all—Depth of Market only.
            A friend once called it &quot;staring at an Excel sheet.&quot;
            <br /> <br />
            With prop firms, I was able to limit my risk. I lost $4K USD in
            those nine months, but in the 10th month, I made $16K USD back. The
            following month, I made $60K USD... only for the firm that paid me
            to go under. Yes, I lost it all. But I’ve mentally recovered and
            continue to trade, learning from my mistake of chasing the shiniest
            object. The rest is history.
            <br /> <br />
            I’m also a co-owner of a business, with our own brand selling on
            Amazon. I continue to learn from a mentor who earns well into six
            figures. I started during a break from trading, and I’m incredibly
            grateful to have met him. Losing those profits was a blessing in
            disguise.
            <br /> <br />
            I have so much to share, but I don’t feel like writing an essay—nor
            would I want to bore you.
            <br /> <br />
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">Connect </span> With Me!
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[1000px] max-[400px]:text-[12px] max-[700px]:text-[13px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0"
          >
            Truth be told, there were many sacrifices I decided to make in the
            past few years, relationships being one of them. If you&apos;ve made
            it all the way here, send me a message on Instagram or Linkedin!
            I&apos;d love to hear your story as well and I will respond.
            Promise.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;

/* <>

<motion.div
variants={fadeIn("left", 0.4)}
initial="hidden"
animate="show"
exit="hidden"
className="flex flex-col w-full xl:max-w-[48%] h-[410px]"
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
        // {/* title */
//         <div className="font-light mb-2 md:mb-0">{item.title}</div>
//         <div className="hidden md:flex">-</div>
//         <div>{item.stage}</div>
//         <div className="flex gap-x-4">
//           {/* icons */}
//           {item.icons?.map((icon, itemIndex) => {
//             return (
//               <div className="text-2xl text-white" key={itemIndex}>
//                 {icon}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   })}
// </div>
// </motion.div>
// </> */}
