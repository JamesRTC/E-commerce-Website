import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWeibo } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="border-t-[1px] bg-white px-10 py-10 text-xs uppercase max-md:px-5 max-md:py-2 max-md:text-[11px]">
      <div className="md:flex md:items-end">
        <Link to="/">
          <h1 className="mr-2 flex text-nowrap text-2xl font-bold max-md:mb-2 max-md:text-lg md:mr-5">
            James & Co.
          </h1>
        </Link>
        <div className="flex max-md:mb-1">
          <div className="flex max-md:gap-5 md:gap-2">
            Site map <span>|</span>
          </div>
          <div className="ml-5 flex max-md:gap-5 md:ml-2 md:gap-2">
            privacy policy <span>|</span>
          </div>
          <div className="max-md:ml-5 md:ml-2">terms & conditions</div>
        </div>
        <div className="max-md:mb-5 md:ml-5">
          &copy;James & Co. all rights reserved
        </div>

        <div className="max-md:text-md flex gap-4 text-xl max-md:mt-5 max-md:gap-6 md:ml-auto">
          <FaFacebookF />
          <FaTwitter />
          <BsYoutube />
          <FaInstagram />
          <FaPinterest />
          <FaWeibo />
        </div>
      </div>
    </div>
  );
};
