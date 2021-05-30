import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Checkbox.module.scss";

const checkedColor = "#4C9DAF";
const whiteColor = "rgb(255,255,255)";

export const CheckBox: FC = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div
			onClick={() => setIsChecked((s) => !s)}
			className={styles.container}
		>
			<svg
				width="28"
				height="28"
				viewBox="0 0 34 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 12.4706C5.46988 18.8235 10.6747 27.4706 12.8434 31L32 1"
					stroke="white"
					strokeWidth="3"
				/>
			</svg>
		</div>
	);
};
