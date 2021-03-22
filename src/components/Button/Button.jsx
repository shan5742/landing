import React from "react";
import s from "./Button.module.scss";
import cn from "classnames";

export default function Button({ text, className }) {
  return <button className={cn(s.button, className)}>{text}</button>;
}
