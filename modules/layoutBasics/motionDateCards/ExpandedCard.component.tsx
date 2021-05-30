import { motion } from "framer-motion";
import React, { FC } from "react";
import styles from "./Card.module.scss";

const ExpandedCard: FC<{ onCollapse: () => void }> = ({
	onCollapse,
	children,
}) => {
	return (
		<>
			<motion.div
				className={`${styles.card} ${styles.expanded}`}
				layoutId="expandable-card"
				onClick={onCollapse}
			>
				{children}
			</motion.div>
			<motion.p
				className={`${styles.card} ${styles.expanded} ${styles.secondary}`}
				onClick={onCollapse}
				transition={{ delay: 0.3 }}
				initial={{ opacity: 0, top: "6rem" }}
				animate={{ opacity: 1, top: "3rem" }}
			>
				Today is clear
			</motion.p>
		</>
	);
};

export default ExpandedCard;
