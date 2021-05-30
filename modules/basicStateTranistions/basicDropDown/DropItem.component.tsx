import React, { FC } from "react";
import Checkmark from "../../shared/CheckMark";

interface DropItemProps {
	item: string;
	isChecked: boolean;
	onClick: () => void;
}

const DropItem: FC<DropItemProps> = ({ item, isChecked, onClick }) => {
	return (
		<li onClick={onClick} className={"cursor-pointer flex items-center py-1"}>
			<span className={"mx-3"}>{item}</span>
			<Checkmark size={12} isChecked={isChecked} />
		</li>
	);
};

export default DropItem;
