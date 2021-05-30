import React, {useState} from "react";
import styles from "./Card.module.scss";
import MotionCard from "./MotionCard.component";

const days = [25, 26, 27, 28, 29];

const MotionDateCards = () => {
	const [expandedDay, setCollapsedDay] = useState<number>(null);
	return (
		<div className={styles.dates}>
			{days.map(day => (
				<MotionCard
					key={day}
					day={day}
					disabled={expandedDay !== day && expandedDay != null}
					onExpand={() => setCollapsedDay(day)}
					onCollapse={() => setCollapsedDay(null)}
				/>
			))}
		</div>
	);
};

export default MotionDateCards;
