import { faLeaf, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import SidebarLogo from "./SidebarLogo.jsx";
import SidebarSearch from "./SidebarSearch.jsx";
import MenuList from "./MenuList.jsx";
import { useNavigate } from "react-router-dom";
import { auth } from "~firebase";
import { signOut } from "firebase/auth";

function Sidebar({ ...props }) {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        menus.filter((el) => {
          return el.label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setScButton(false);
      setMenus(initMenus);
    }
  };

  const clearSearch = () => {
    search.current.value = "";
    setMenus(initMenus);
    setScButton(false);
  };

  const logout = (event) => {
    event.preventDefault();
    setLoading(true);

    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      navigate("/");
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      setError({ message: errorMessage });
    })
    .finally(() => setLoading(false));

  };

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-100 h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          <SidebarLogo toggle={props.toggle} icon={faLeaf} text="Web Tracker" />

          {/* Search Menu */}
          <SidebarSearch
            clearSearch={clearSearch}
            handleChange={handleChange}
            scButton={scButton}
            search={search}
          />

          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />

          {/* Profile */}
          <div className="pt-2 border-t border-gray-300">
            <div className="py-2 px-4">
              {/* Logout Button */}
              <button
                className="py-2 px-4 border border-emerald-500 bg-emerald-600 w-full rounded-full text-gray-200 hover:bg-emerald-600 hover:border-emerald-600 justify-end text-sm"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Logout
              </button>
            </div>
            {/* Display general form error message */}
            {error?.message && (
              <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-2 ml-1">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        >
          <div></div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
