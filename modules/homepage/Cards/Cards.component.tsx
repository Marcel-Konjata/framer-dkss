import React, { FC, ReactNode } from "react";
import Card from "./Card.component";
import styles from "./Cards.module.scss";

import {
	AiFillAlipayCircle,
	AiFillClockCircle,
	AiFillDingtalkCircle,
	AiFillFire,
	AiFillCode,
} from "react-icons/ai";
import { motion } from "framer-motion";

interface CarsData {
  id: number;
  icon: ReactNode;
  urlToRedirect: string;
  text: string;
}

const cardsData: CarsData[] = [
	{
		id: 1,
		icon: <AiFillAlipayCircle size={50} />,
		urlToRedirect: "/functional-basics",
		text: "basic functional animations",
	},
	{
		id: 2,
		icon: <AiFillDingtalkCircle size={50} />,
		urlToRedirect: "/state-transitions",
		text: "animate between states",
	},
	{
		id: 3,
		icon: <AiFillFire size={50} />,
		urlToRedirect: "/motion-layout",
		text: "motion layout",
	},
	{
		id: 4,
		icon: <AiFillClockCircle size={50} />,
		urlToRedirect: "/",
		text: "orchestrations",
	},
	{
		id: 5,
		icon: <AiFillCode size={50} />,
		urlToRedirect: "/scroll-animations",
		text: "hooks, scroll, parallax",
	},
	{
		id: 6,
		icon: <AiFillCode size={50} />,
		urlToRedirect: "/",
		text: "drag animations",
	},
];

const everyDayIShufellin = (
	sort: "asc" | "desc" | "shuffle",
	a: CarsData,
	b: CarsData
) => {
	switch (sort) {
	case "asc":
		return a.id - b.id;

	case "desc":
		return b.id - a.id;

	case "shuffle":
		return Math.random() - 0.5;
	}
};

interface CardsProps {
  sort: "asc" | "desc" | "shuffle";
}

const Cards: FC<CardsProps> = ({ sort }) => {
	return (
		<div className={`mx-auto mt-16 ${styles.container}`}>
			<div className="grid grid-cols-3 gap-y-10">
				{cardsData
					.sort((a, b) => everyDayIShufellin(sort, a, b))
					.map((card) => (
						<Card
							text={card.text}
							urlToRedirect={card.urlToRedirect}
							icon={card.icon}
							key={card.id}
						/>
					))}
			</div>
		</div>
	);
};

export default Cards;
