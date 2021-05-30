import { motion, Variant } from "framer-motion";
import React, { FC, useState } from "react";

export const BasicCollapsible: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const expandAnimation: Variant = { height: !isOpen ? 0 : "auto" };

	return (
		<div className="bg-white w-80 shadow">
			<div
				onClick={() => setIsOpen((s) => !s)}
				className="shadow visible-content py-2 px-5"
			>
				basic collapsible prototyp
			</div>

			<motion.div className="overflow-hidden">
				<div className="py-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					dolorem numquam aut, aliquam, blanditiis reprehenderit ducimus veniam,
					perspiciatis eveniet neque sit eius culpa atque debitis voluptatibus!
					Inventore adipisci odio quod? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Inventore dolorem numquam aut, aliquam, blanditiis
					reprehenderit ducimus veniam, perspiciatis eveniet neque sit eius
					culpa atque debitis voluptatibus! Inventore adipisci odio quod?
				</div>
			</motion.div>
		</div>
	);
};
