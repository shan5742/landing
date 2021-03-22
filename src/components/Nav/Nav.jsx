import React from "react";
import s from "./Nav.module.scss";
import Button from "../Button/Button";

export default function Nav() {
  // const [ref, inView] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });
  return (
    <nav className={s.navWrapper}>
      <h3 className={s.logo}>Asam Shan</h3>
      <ul className={s.links}>
        <li className={s.link}>Skills</li>
        <li className={s.link}>Experience</li>
        <li className={s.link}>
          <Button
            style={{ marginLeft: 24 }}
            text="Hire me"
            className="navButton"
          />
        </li>
      </ul>
    </nav>
  );
}
