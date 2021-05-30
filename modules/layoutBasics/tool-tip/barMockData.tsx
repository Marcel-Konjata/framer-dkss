import {DiAtom, DiBrackets, DiIntellij, DiVisualstudio} from "react-icons/di";
import React from "react";

const Brackets = {
	name: "Brackets",
	icon: <DiBrackets size={30} />,
	content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque et provident, nulla maxime consequuntur nobis officia asperiores officiis animi repudiandae.
    Aliquam, possimus exercitationem?`,
};
const Atom = {
	name: "Atom",
	icon: <DiAtom size={30} />,
	content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque et provident, nulla maxime consequuntur nobis officia asperiores officiis animi repudiandae.
    Aliquam, possimus exercitationem?`,
};
const VisualStudio = {
	name: "Visual Studio",
	icon: <DiVisualstudio size={30} />,
	content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque et provident, nulla maxime consequuntur nobis officia asperiores officiis animi repudiandae.
    Aliquam, possimus exercitationem?`,
};
const InteliJ = {
	name: "InteliJ",
	icon: <DiIntellij size={30} />,
	content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque et provident, nulla maxime consequuntur nobis officia asperiores officiis animi repudiandae.
    Aliquam, possimus exercitationem?`,
};

export const items = [Brackets, Atom, InteliJ, VisualStudio];
