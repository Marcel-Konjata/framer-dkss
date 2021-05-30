import React, { FC, useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./TooltipBar.module.scss";
import ToolTipComponent from "./ToolTip.component";

import { items } from "./barMockData";

const ToolTipBar: FC = () => {
	const [activeItem, setActiveItem] = useState<string>(null);
	const [isToolTipDisplayed, setIsTooltipDisplayed] = useState(false);

	return (
		<ul
			className={styles.MenuList}
			onMouseOver={() => setIsTooltipDisplayed(true)}
			onMouseLeave={() => setIsTooltipDisplayed(false)}
		>
			<AnimateSharedLayout type="crossfade">
				{items.map((item) => (
					<li className={styles.MenuItem} key={item.name}>
						<div onMouseOver={() => setActiveItem(item.name)}>{item.icon}</div>
						<AnimatePresence>
							{isToolTipDisplayed && (
								<ToolTipComponent
									toolTipLayoutID="tooltip"
									activeItemId={activeItem}
									itemId={item.name}
									toolTipContent={
										<div>
											<h3>{item.name}</h3>
											<p>{item.content}</p>
										</div>
									}
								/>
							)}
						</AnimatePresence>
					</li>
				))}
			</AnimateSharedLayout>
		</ul>
	);
};

export default ToolTipBar;
