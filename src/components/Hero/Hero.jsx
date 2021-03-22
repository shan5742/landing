import React from "react";
import s from "./Hero.module.scss";
import Dev from "../../assets/illustrations/programming.png";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className={s.heroSection}>
      <div className={s.heroContent}>
        <h1 className={s.title}>Awesome Javascript Developer</h1>
        <p className={s.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          quidem saepe natus velit in consectetur, dicta blanditiis facere
          dolores beatae numquam, sequi corporis omnis eveniet dolorem,
          assumenda repudiandae odio.
        </p>
        <Button text="Click me" />
      </div>
      <div className={s.illustration}>
        <img className={s.heroImage} src={Dev} alt="" />
      </div>
    </div>
  );
}
