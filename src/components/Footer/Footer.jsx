import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white fixed bottom-0 w-full">
      <div className="container mx-auto py-2 px-4">
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <p className="text-center mt-2">
            &copy; {new Date().getFullYear()} Web Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
