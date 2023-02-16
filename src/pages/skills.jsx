import styles from "../styles/skills.module.css";
import frontend from "../../components/skills/frontend.json";
import backend from "../../components/skills/backend.json";
import devtool from "../../components/skills/devtool.json";
import english from "../../components/skills/english.json";
import { useState } from "react";
import { padding } from "@mui/system";

export default function Skills() {
  // sideMenu
  const sideMenuItem = (title, items) => {
    return (
      <div className={styles.menu_item}>
        <p
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
          {items.map((item) => (
            <li
              key={item.name}
              onClick={() => setSkill(item.json)}
              className={styles.menu_item_title}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const sideMenu = (menus) => {
    return (
      <div className={styles.side_menu_container}>
        <div className={styles.side_menu}>
          <h3 style={{ marginBottom: "20px" }}>Skill-Sets</h3>
          {menus.map((menu) => {
            return sideMenuItem(menu.title, menu.items);
          })}
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
  const skillItem = (
    name,
    percent,
    gradient_start = "#1fe6ff",
    gradient_end = "#673AB7"
  ) => {
    return (
      <div className={styles.skill_item}>
        <span className={styles.name}>{name}</span>
        <div className={styles.percent}>
          <div
            className={styles.progress}
            style={{
              width: percent,
              "--clr_start": gradient_start,
              "--clr_end": gradient_end,
            }}
          ></div>
        </div>
        <div className={styles.value}>{percent}</div>
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
              content.percent,
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
    <div className={styles.container}>
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
