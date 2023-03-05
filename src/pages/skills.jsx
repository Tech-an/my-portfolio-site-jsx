import styles from "../styles/skills.module.css";

import web from "../../components/skills/web.json";
import backend from "../../components/skills/backend.json";
import native from "../../components/skills/native.json";
import game from "../../components/skills/game.json";
import electronic from "../../components/skills/electronic.json";
import devtool from "../../components/skills/devtool.json";
import tech from "../../components/skills/tech.json";
import knowledge from "../../components/skills/knowledge.json";
import working from "../../components/skills/working.json";
import english from "../../components/skills/english.json";
import business from "../../components/skills/business.json";
import science from "../../components/skills/science.json";
import hobby from "../../components/skills/hobby.json";
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

import Accordion from "components/accordion/accordion";

export default function Skills() {
  // data定義
  const programmingSkillJsons = [
    web,
    backend,
    native,
    game,
    electronic,
    devtool,
    tech,
    knowledge,
    working,
  ];
  const etcSkillJsons = [business, science, hobby];

  // sideMenu
  const [hidden, setHidden] = useState(true);
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
          <h3 onClick={() => setHidden(!hidden)}>Skill-Sets</h3>
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
      title: "「開発」力",
      items: programmingSkillJsons.map((jsonData) => {
        return {
          name: jsonData.title,
          json: jsonData,
        };
      }),
    },
    {
      title: "「言語」力",
      items: [{ name: english.title, json: english }],
    },
    {
      title: "「その他」",
      items: etcSkillJsons.map((jsonData) => {
        return {
          name: jsonData.title,
          json: jsonData,
        };
      }),
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
    text
    // gradient_start = "#FAD961",
    // gradient_end = "#ff3b00"
  ) => {
    return (
      <div className={styles.skill_item} key={name}>
        <Accordion text={text}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: "5px",
            }}
          >
            <span className={styles.name}>&nbsp;{name}&nbsp;&nbsp;</span>
            <div className={styles.value}></div>
          </div>
          <div
            className={styles.percent}
            style={{
              "--clr_start": "#ffdd1c",
              "--clr_end": "#ff3b00",
            }}
          >
            {starContent(5)}
            <div
              className={styles.progress}
              style={{
                width: `calc(100% - ${level}/5*100%)`,
                "--clr_start": "#ffdd1c",
                "--clr_end": "#ff3b00",
              }}
            ></div>
          </div>
        </Accordion>
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
              content.text
              // content.clr_start,
              // content.clr_end
            );
          })}
        </div>
      </div>
    );
  };
  const [skill, setSkill] = useState(web);

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
