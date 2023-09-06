// links
import Link from "next/link";

// icons
import {
  RiGithubFill,
  RiYoutubeLine,
  RiFilePdfLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/anson-chow/"} target="_"className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href="Anson_Chow_Resume.pdf" target="_" className="hover:text-accent transition-all duration-300">
        <RiFilePdfLine />
      </Link>
      <Link href={"https://github.com/Anson-Chow"} target="_" className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
