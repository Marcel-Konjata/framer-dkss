import { AnimationControls, motion, Variant } from "framer-motion";
import React, { FC, useState } from "react";
import styles from "./FormField.module.scss";

const labelAnimation = (animateLabel: boolean): Variant => ({
  y: animateLabel ? "0%" : "100%",
  scale: animateLabel ? 0.8 : 1,
});

export const FormField: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const animateLabel = inputValue.length > 0 || isFocused;

  return (
    <div className={styles.field}>
      <motion.label
        className={styles.label}
        htmlFor="abcd"
        // animate={labelAnimation(animateLabel) as AnimationControls}
      >
        hey cool form input
      </motion.label>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.input}
        id="abcd"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
