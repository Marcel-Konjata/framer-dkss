import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Checkbox.module.scss";

const checkedColor = "#4C9DAF";
const whiteColor = "rgb(255,255,255)";

export const CheckBox: FC = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<motion.div
			onClick={() => setIsChecked((s) => !s)}
			className={styles.container}
			// u can animate inline even conditionally based on state
			animate={{ backgroundColor: isChecked ? checkedColor : whiteColor }}
			// transition property modify animation with similar props as css counter part, however it can be injected directly as object key in animate property,
			// very useful with complex orchestrations and variants, second way is used down below for this example
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: isChecked ? 0 : 0.4,
			}}
		>
			<svg
				width="28"
				height="28"
				viewBox="0 0 34 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					d="M2 12.4706C5.46988 18.8235 10.6747 27.4706 12.8434 31L32 1"
					stroke="white"
					strokeWidth="3"
					// pathLength is special animatable property of svg motion path basically does what is name suggests
					initial={{ pathLength: isChecked ? 1 : 0 }}
					animate={{
						pathLength: isChecked ? 1 : 0,
						transition: { duration: 0.4, delay: isChecked ? 0.3 : 0 },
					}}
				/>
			</svg>
		</motion.div>
	);
};
