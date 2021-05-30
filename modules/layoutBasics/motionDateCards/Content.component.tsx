import { motion } from "framer-motion";
import React, { FC } from "react";

interface ContentProps {
	disabled: boolean;
	text: string;
	small?: boolean;
}

const Content: FC<ContentProps> = ({ disabled, text, small }) => {
	return (
		<motion.h1
			className={`block text-blue-800 font-bold ${small ? "text-lg" : "text-8xl"}`}
			layoutId="title"
			style={{ opacity: disabled ? 0.2 : 1 }}
		>
			{text}
		</motion.h1>
	);
};

export default Content;
