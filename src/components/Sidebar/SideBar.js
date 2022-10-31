import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaUser } from "react-icons/fa";
import { MdSmsFailed, MdEmail } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiMastercardFill, RiAccountCircleFill } from "react-icons/ri";
import { SiCampaignmonitor } from "react-icons/si";
import { SiPostman } from "react-icons/si"

import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsGraphUp, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/sales",
    name: "Sales",
    icon: <BsGraphUp />,

    subRoutes: [
      {
        path: "/sales/newcontact",
        name: "Customer +",
        icon: <SiPostman />,
      },
      {
        path: "/sales/lead",
        name: "Lead +",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    icon: <FaUser />,

    subRoutes: [
      {
        path: "/admin/account",
        name: "Account +",
        icon: <RiAccountCircleFill />,
      },
      {
        path: "/admin/master",
        name: "Master +",
        icon: <RiMastercardFill />,
      },
    ],
  },
  {
    path: "/campaign",
    name: "Campaign",
    icon: <SiCampaignmonitor />,

    subRoutes: [
      {
        path: "/campaign/email",
        name: "Email",
        icon: <MdEmail />,
      },
      {
        path: "/campaign/whatsapp",
        name: "Whatsapp",
        icon: <BsWhatsapp />,
      },
      {
        path: "/campaign/telegram",
        name: "Telegram",
        icon: <BsTelegram />,
      },
      {
        path: "/campaign/sms",
        name: "SMS",
        icon: <MdSmsFailed />,
      },
    ],
  },
  {
    path: "/report",
    name: "Report",
    icon: <AiTwotoneFileExclamation />,

  },
  {
    path: "/logout",
    name: "Logout",
    icon: <BsCartCheck />,
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,

  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  let elm = {
    height: "37px",
    // height: "40px",
    //  marginLeft : "-10px"
  }


  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* <b>NIT INFOTECH</b> */}

                  <img src='https://www.nit-infotech.com/wp-content/uploads/2020/03/nit-infotech.png' alt="errror" style={elm} />

                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
