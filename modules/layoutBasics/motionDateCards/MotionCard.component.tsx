import React, {FC, useState} from "react";
import ExpandedCard from "./ExpandedCard.component";
import {AnimateSharedLayout} from "framer-motion";
import Content from "./Content.component";
import CompactCard from "./CompactCard.component";

interface MotionCardsProps {
	day: number;
	onCollapse: () => void;
	onExpand: () => void;
	disabled: boolean;
}

const MotionCard: FC<MotionCardsProps> = ({day, onCollapse, onExpand, disabled}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const collapseDate = () => {
		setIsExpanded(false);
		onCollapse();
	};

	const expandDate = () => {
		setIsExpanded(true);
		onExpand();
	};

	return (
		<div className={"w-12 h-12 mx-2 relative"}>
			<AnimateSharedLayout type={"crossfade"}>
				{isExpanded ? (
					<ExpandedCard onCollapse={collapseDate}>
						<Content text={day.toString()} disabled={disabled}/>
					</ExpandedCard>
				) : (
					<CompactCard onExpand={expandDate} disabled={disabled}>
						<Content text={day.toString()} disabled={disabled} small/>
					</CompactCard>
				)}
			</AnimateSharedLayout>
		</div>
	);
};

export default MotionCard;
