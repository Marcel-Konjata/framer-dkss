import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useState } from "react";
import styles from "./Stepper.module.scss";

const textItems = [
  { id: "select1", text: "Product of dreams" },
  { id: "select2", text: "Ok I lied but watch this" },
  { id: "select3", text: "Cool, right?" },
];

const Variant1: Variants = {
  out: {
    opacity: 0,
    y: "-50%",
    transition: {
      type: "tween",
      duration: 0.54,
      ease: [0.6, 0.04, 0.98, 0.34],
    },
  },
  in: {
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      duration: 0.63,
      ease: [0, 0.55, 0.45, 1],
      delay: 0.23,
    },
  },
};

export const Stepper: FC = () => {
  const [activeStep, setActiveStep] = useState("select1");
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="container mx-auto shadow-lg py-6 px-10 ">
      <div className="grid grid-cols-12">
        <ul className="col-span-4 mt-20">
          {textItems.map((item) => (
            <motion.li
              onHoverStart={() => {
                setHoveredStep(item.id);
              }}
              onHoverEnd={() => {
                setHoveredStep(null);
              }}
              style={{ width: "fit-content" }}
              className="mt-3"
              key={item.id}
              onClick={() => setActiveStep(item.id)}
            >
              <h4 className="text-xl italic capitalize cursor-pointer">
                {item.text}
              </h4>

              <motion.div
                className="bg-gray-900 h-0.5"
                initial={{ scaleX: activeStep === item.id ? 1 : 0 }}
                style={{ originX: "0%" }}
                animate={{
                  scaleX:
                    activeStep === item.id || hoveredStep === item.id ? 1 : 0,
                }}
              />
            </motion.li>
          ))}
        </ul>

        <div className="col-span-8 overflow-hidden">
          <div
            className={`border-l border-black pl-3 ${styles.motionContainer}`}
          >
            <AnimatePresence exitBeforeEnter>
              {/* key name on animate presence does not matter what it is but must be unique inside the one animate presence sensor */}
              {activeStep === "select1" && <Step1 key="step-umpalumpa" />}
              {activeStep === "select2" && <Step2 key="forest-was-here" />}
              {activeStep === "select3" && <Step3 key="creative-tard" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step1 = () => (
  <motion.div
    variants={Variant1}
    initial="out"
    animate="in"
    exit="out"
    className="text-center"
  >
    <h2 className="mb-8 text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
    <p className="font-light px-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
      necessitatibus aperiam voluptates quae corrupti a sequi deserunt obcaecati
      cupiditate provident assumenda, sint quasi tempore delectus vel
      repellendus at optio. Vitae.
    </p>
    <div className="height-72 mt-6">
      <img src="/krieg.jpeg" alt="blitz" className="height-full" />
    </div>
  </motion.div>
);

const Step2 = () => (
  <motion.div
    variants={Variant1}
    initial="out"
    animate="in"
    exit="out"
    className="text-center"
  >
    <h2 className="mb-8 text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
    <p className="font-light px-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
      necessitatibus aperiam voluptates quae corrupti a sequi deserunt obcaecati
      cupiditate provident assumenda, sint quasi tempore delectus vel
      repellendus at optio. Vitae.
    </p>
    <div className="flex my-6">
      <div className="shadow p-10 items-center justify-items-center flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
        iusto possimus tenetur maxime id eligendi culpa, suscipit quod, aperiam
        unde exercitationem tempore voluptatem reprehenderit neque earum?
        Facere, sunt? Molestias?
      </div>
      <div className="shadow p-10 mx-2.5 items-center justify-items-center flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
        iusto possimus tenetur maxime id eligendi culpa, suscipit quod, aperiam
        unde exercitationem tempore voluptatem reprehenderit neque earum?
        Facere, sunt? Molestias?
      </div>
    </div>
  </motion.div>
);

const Step3 = () => (
  <motion.div
    variants={Variant1}
    initial="out"
    animate="in"
    exit="out"
    className="text-center"
  >
    <h2 className="mb-8 text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
    <p className="font-light px-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
      necessitatibus aperiam voluptates quae corrupti a sequi deserunt obcaecati
      cupiditate provident assumenda, sint quasi tempore delectus vel
      repellendus at optio. Vitae.
    </p>
  </motion.div>
);
