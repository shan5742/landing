import React from "react";
import s from "./Experience.module.scss";

export default function Experience() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Lorem Ipsum</h3>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={s.gridContainer}>
        <div className={s.gridItem}>
          <h5 className={s.gridTitle}>Lorem Ipsum</h5>
          <p className={s.gridContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            corrupti veniam dicta, quam vero maiores nesciunt dolor. Obcaecati
            ea ducimus minima veniam, at earum magni dolorem soluta alias
            tenetur laborum!.
          </p>
        </div>
        <div className={s.gridItem}>
          <h5 className={s.gridTitle}>Lorem Ipsum</h5>
          <p className={s.gridContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            corrupti veniam dicta, quam vero maiores nesciunt dolor. Obcaecati
            ea ducimus minima veniam, at earum magni dolorem soluta alias
            tenetur laborum!.
          </p>
        </div>
        <div className={s.gridItem}>
          <h5 className={s.gridTitle}>Lorem Ipsum</h5>
          <p className={s.gridContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            corrupti veniam dicta, quam vero maiores nesciunt dolor. Obcaecati
            ea ducimus minima veniam, at earum magni dolorem soluta alias
            tenetur laborum!.
          </p>
        </div>
        <div className={s.gridItem}>
          <h5 className={s.gridTitle}>Lorem Ipsum</h5>
          <p className={s.gridContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            corrupti veniam dicta, quam vero maiores nesciunt dolor. Obcaecati
            ea ducimus minima veniam, at earum magni dolorem soluta alias
            tenetur laborum!.
          </p>
        </div>
      </div>
    </div>
  );
}
