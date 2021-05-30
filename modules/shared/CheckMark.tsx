import { motion } from "framer-motion";
import React, { FC } from "react";

interface CheckMarkProps {
	isChecked: boolean;
	size?: number;
}

const Checkmark: FC<CheckMarkProps> = ({ isChecked, size }) => {
	return (
		<motion.svg
			width={size}
			height={size}
			viewBox="0 0 29 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				initial={{ pathLength: isChecked ? 1 : 0 }}
				animate={{ pathLength: isChecked ? 1 : 0 }}
				d="M1 14.7455L11.7349 28L28 1"
				stroke="black"
				strokeWidth="2"
			/>
		</motion.svg>
	);
};

export default Checkmark;
