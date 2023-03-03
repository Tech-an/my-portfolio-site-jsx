import styles from "../styles/skills.module.css";
import frontend from "../../components/skills/frontend.json";
import backend from "../../components/skills/backend.json";
import devtool from "../../components/skills/devtool.json";
import english from "../../components/skills/english.json";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import ArrowDown from "components/arrowdown/arrowdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  // sideMenu
  const [hidden, setHidden] = useState(false);
  const [isTwoColumn, setIsTwoColumn] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsTwoColumn(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sideMenuItem = (title, items) => {
    return (
      <div
        className={`${styles.menu_item} ${
          isTwoColumn && hidden ? styles.hidden : null
        }`}
        key={title}
      >
        <p
          key={title}
          style={{
            fontSize: "1.2rem",
            borderBottom: "2px solid #fff",
            paddingBottom: "3px",
            marginBottom: "5px",
          }}
        >
          {title}
        </p>
        <ul>
          <Link to="Skills">
            {items.map((item) => (
              <li
                key={item.name}
                onClick={() => setSkill(item.json)}
                className={styles.menu_item_title}
              >
                {item.name}
              </li>
            ))}
          </Link>
        </ul>
      </div>
    );
  };
  const sideMenu = (menus) => {
    return (
      <div className={styles.side_menu_container}>
        <div className={styles.side_menu}>
          <h3 onClick={() => setHidden(!hidden)}>Skill-Lists</h3>
          {menus.map((menu) => {
            return sideMenuItem(menu.title, menu.items);
          })}
          {isTwoColumn ? (
            <div className={styles.side_menu_button}>
              <FontAwesomeIcon
                icon={hidden ? faCircleChevronDown : faCircleChevronUp}
                onClick={() => setHidden(!hidden)}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  };
  const menus = [
    {
      title: "Programming",
      items: [
        { name: "Frontend", json: frontend },
        { name: "Backend", json: backend },
        { name: "Devtool", json: devtool },
      ],
    },
    {
      title: "Language",
      items: [{ name: "English", json: english }],
    },
  ];
  // contents
  const starContent = (level) => {
    const stars = [];
    for (let i = 0; i < level; i++) {
      stars.push(
        <FontAwesomeIcon icon={faSolidStar} style={{ color: "#ffdd1c" }} />
      );
    }
    for (let i = level; i < 5; i++) {
      stars.push(<FontAwesomeIcon icon={faRegularStar} />);
    }
    return stars;
  };

  const skillItem = (
    name,
    level,
    // gradient_start = "#1fe6ff",
    gradient_start = "#FAD961",
    // gradient_end = "#673AB7"
    gradient_end = "#ff3b00"
  ) => {
    return (
      <div className={styles.skill_item} key={name}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: "5px",
          }}
        >
          <span className={styles.name}>&nbsp;{name}&nbsp;&nbsp;</span>
          {/* <div className={styles.value}>lv.{level}</div> */}
          <div className={styles.value}>
            {starContent(level).map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
        </div>
        <div
          className={styles.percent}
          style={{
            "--clr_start": "#ffdd1c",
            "--clr_end": "#ff3b00",
          }}
        >
          <div
            className={styles.progress}
            style={{
              width: `calc(100% - ${level}/5*100%)`,
              "--clr_start": "#ffdd1c",
              "--clr_end": "#ff3b00",
            }}
          ></div>
        </div>
      </div>
    );
  };
  const skillContent = (skill) => {
    return (
      <div className={styles.skill_content}>
        <h2 className={styles.skill_title}>{skill.title}</h2>
        <div className={styles.skills}>
          {skill.contents.map((content) => {
            return skillItem(
              content.name,
              content.level,
              content.clr_start,
              content.clr_end
            );
          })}
        </div>
      </div>
    );
  };
  const [skill, setSkill] = useState(frontend);

  return (
    <div className={styles.container} id="Skills">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>S</span>kills
      </h1>
      <div className={styles.main_content}>
        {sideMenu(menus)}
        {skillContent(skill)}
      </div>
    </div>
  );
}
