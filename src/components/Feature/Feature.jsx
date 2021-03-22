import React from "react";
import s from "./Feature.module.scss";
import FeatureImage from "../../assets/illustrations/feature.png";

export default function Feature() {
  return (
    <div className={s.featureSection}>
      <div className={s.featureContent}>
        <h1 className={s.title}>Lorem Ipsum</h1>
        <p className={s.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          quidem saepe natus velit in consectetur, dicta blanditiis facere
          dolores beatae numquam, sequi corporis omnis eveniet dolorem,
          assumenda repudiandae odio.
        </p>
      </div>
      <div className={s.illustration}>
        <img className={s.featureImage} src={FeatureImage} alt="" />
      </div>
    </div>
  );
}
