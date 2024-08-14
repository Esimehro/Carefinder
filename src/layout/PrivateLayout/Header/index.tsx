import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoNotificationsCircleOutline } from "react-icons/io5";
// import Profile from "../../../components/Profile";
// import CalendarComponent from "../../../components/Calendar";
// import Navigation, { User } from "../../components/Navigation/index";
import { FiPlus } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import Drawer from "../../../components/Drawer";
import Navigation, { User } from "../Navigation";
import { GoArrowUpRight } from "react-icons/go";

interface HeaderProps {
  title: string;
  user: User;
  pageName: string;
  handleDateClick: (date: Date) => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  user,
  pageName,
  handleDateClick,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const renderContent = () => {
    switch (pageName) {
      case "overview":
        return (
          <div className={styles.overview}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            {/* <CalendarComponent /> */}
            {/* <Profile user={user} /> */}
          </div>
        );
      case "page":
        return (
          <div className={styles.page}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            {/* <Profile user={user} /> */}
          </div>
        );
      case "others":
        return (
          <div className={styles.page}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            <div className={styles.createBtn}>
              <FiPlus style={{ color: "#FFFFFF" }} />
              Create an app
            </div>
          </div>
        );
      case "statement":
        return (
          <div className={styles.page}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            <div className={styles.statementBtn}>Create a statement page</div>
          </div>
        );
      case "customers":
        return (
          <div className={styles.page}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            <div className={styles.createBtn}>
              <FiPlus style={{ color: "#FFFFFF" }} />
              Add customer
            </div>
          </div>
        );
      case "export":
        return (
          <div className={styles.page}>
            <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />
            <div className={styles.exportBtn}>
              <GoArrowUpRight />
              Export
            </div>
          </div>
        );
      case "calendar":
        return;
      default:
        return <IoNotificationsCircleOutline style={{ fontSize: "24px" }} />;
    }
  };

  return (
    <div className={styles.pageTitle}>
      <div className={styles.titleCon}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>{title}</div>
          <div className={styles.rightNav}>{renderContent()}</div>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <MdMenu style={{ fontSize: "24px" }} />
        </div>
      </div>
      {isMobileNavOpen && (
        <Drawer
          isOpen={isMobileNavOpen}
          title="Navigation"
          onClose={() => setIsMobileNavOpen(false)}
          content={
            <Navigation
              name={user.firstname}
              role={"user"}
              user={user}
              style={{ display: "flex" }}
            />
          }
        />
      )}
    </div>
  );
};

export default Header;
