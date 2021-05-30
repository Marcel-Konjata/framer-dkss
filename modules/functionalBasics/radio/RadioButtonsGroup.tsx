import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

export const RadioButtonsGroup = () => {
  const [isActive, setActive] = useState("btn1");
  return (
    <div className="flex">
      <RadioButton
        groupName="choose"
        setIsActive={setActive}
        isActive={isActive === "btn1"}
        radioId="btn1"
      />
      <RadioButton
        groupName="choose"
        setIsActive={setActive}
        isActive={isActive === "btn2"}
        radioId="btn2"
      />
      <RadioButton
        groupName="choose"
        setIsActive={setActive}
        isActive={isActive === "btn3"}
        radioId="btn3"
      />
    </div>
  );
};
