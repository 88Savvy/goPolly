import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          <Link to="#" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            Press
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            Partners
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            Terms
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            Privacy
          </Link>
        </div>
        <div className="flex space-x-8 mb-6">
          <Link to="#">
            <FaFacebook className="text-gray-300 hover:text-white" />
          </Link>
          <Link to="#">
            <FaInstagram className="text-gray-300 hover:text-white" />
          </Link>
          <Link to="#">
            <FaTwitter className="text-gray-300 hover:text-white" />
          </Link>
          <Link to="#">
            <FaGithub className="text-gray-300 hover:text-white" />
          </Link>
          <Link to="#">
            <FaYoutube className="text-gray-300 hover:text-white" />
          </Link>
        </div>
        <div className="text-gray-300">
          © {new Date().getFullYear()} GoPolly, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
