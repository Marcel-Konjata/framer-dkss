import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Tooltip.module.scss";

interface ToolTipProps {
	toolTipContent: ReactNode | string;
	toolTipLayoutID: string;
	itemId: string | number;
	activeItemId: string | number;
}

const ToolTipComponent: FC<ToolTipProps> = ({
	toolTipContent,
	toolTipLayoutID,
	itemId,
	activeItemId,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } }}
			exit={{ opacity: 0 }}
		>
			<motion.div className={styles.TransitionHelper}>
				{activeItemId === itemId && (
					<motion.div
						className={styles.ToolTipBox}
						layout
						layoutId={toolTipLayoutID}
					>
						<motion.div
							initial={{ opacity: 0, top: "100%" }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							{toolTipContent}
						</motion.div>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default ToolTipComponent;
