import { motion } from "framer-motion";
import React, {FC} from "react";
import styles from "./Card.module.scss";

interface CompactCardProps {
	disabled: boolean
	onExpand: () => void
}

const CompactCard: FC<CompactCardProps> = ({children, disabled, onExpand}) => {
	return (
		<motion.div
			className={`${styles.card} ${styles.compact}`}
			layoutId="expandable-card"
			onClick={disabled ? undefined : onExpand}
		>
			{children}
		</motion.div>
	);
};

export default CompactCard;
