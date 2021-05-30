import { motion, Variant, Variants } from "framer-motion";
import React, { FC } from "react";
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
	radioId: string;
	isActive: boolean;
	groupName: string;
	setIsActive: (id: string) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
	radioId,
	isActive,
	groupName,
	setIsActive,
}) => {

	const pathVariant: Variants = {
		stroke: {
			pathLength: isActive ? 1 : 0,
			transition: {
				delay: !isActive ? 0.25 : 0,
				duration: 0.25,
			},
		},

		fill: {
			fill: isActive ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0)",
			transition: {
				delay: isActive ? 0.25 : 0,
				duration: 0.2,
			},
		},
	};

	const shrinkVariant: Variant = {
		scale: isActive ? 0.6 : 1,
		x: isActive ? "-4px" : 0,
		y: isActive ? "-4px" : 0,
		transition: {
			delay: isActive ? 0.3 : 0,
		},
	};

	return (
		<>
			<input
				id={radioId}
				type="radio"
				name={groupName}
				className={styles.input}
			/>
			<label
				htmlFor={radioId}
				className={styles.label}
				onClick={() => setIsActive(radioId)}
			>
				<motion.svg
					animate={shrinkVariant}
					className={styles.svg}
					viewBox="0 0 41 41"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						d="M40.5 20.5C40.5 31.5457 31.5457 40.5 20.5 40.5C9.4543 40.5 0.5 31.5457 0.5 20.5C0.5 9.4543 9.4543 0.5 20.5 0.5C31.5457 0.5 40.5 9.4543 40.5 20.5Z"
						strokeWidth="3"
						stroke="white"
						variants={pathVariant}
						animate={["stroke", "fill"]}
					/>
				</motion.svg>
			</label>
		</>
	);
};
