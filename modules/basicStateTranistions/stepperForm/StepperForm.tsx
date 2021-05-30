import React from "react";
import { useFormState } from "./useFormState";
import { AnimatePresence, motion, Variants } from "framer-motion";
import styles from "./StepperForm.module.scss";
import SelectStepComponent from "./formSteps/selectStep/SelectStep.component";
import InputStepComponent from "./formSteps/InputStep/InputStep.component";
import ConfirmationStepComponent from "./formSteps/confirmationStep/ConfirmationStep.component";

const adrresesMock = ["Na Parku 5", "Kakadu 23", "Ding dong 4"];

const slideVariant: Variants = {
	initial: { x: "-110%" },
	animate: { x: "0%" },
	exit: { x: "110%" },
};

const StepperForm = () => {
	const {
		step,
		setStep,
		name,
		setName,
		surname,
		setSurname,
		socialSecurity,
		setSocialSecurity,
		phoneNumber,
		setPhoneNumber,
		amendedMessage,
		setAmendedMessage,
		handleSubmit,
		selectedAddress,
		setSelectedAddress,
		getNextButtonText,
		isValidForm,
	} = useFormState(adrresesMock);

	return (
		<section className={styles.styledSection}>
			<AnimatePresence exitBeforeEnter>
				{step === 1 && (
					<motion.div
						className={styles.slideDiv}
						variants={slideVariant}
						animate="animate"
						initial="initial"
						exit="exit"
						key="1"
					>
						<SelectStepComponent
							addresses={adrresesMock}
							setAddressSelect={setSelectedAddress}
							selectedAddress={selectedAddress}
						/>
					</motion.div>
				)}
				{step === 2 && (
					<motion.div
						className={styles.slideDiv}
						variants={slideVariant}
						animate="animate"
						initial="initial"
						exit="exit"
						key="2"
					>
						<InputStepComponent
							setAmendedMessage={setAmendedMessage}
							name={name}
							surname={surname}
							socialSecurity={socialSecurity}
							setName={setName}
							setSurname={setSurname}
							setSocialSecurity={setSocialSecurity}
							amendedMessage={amendedMessage}
							phoneNumber={phoneNumber}
							setPhoneNumber={setPhoneNumber}
						/>
					</motion.div>
				)}
				{step === 3 && (
					<motion.div
						className={styles.slideDiv}
						variants={slideVariant}
						animate="animate"
						initial="initial"
						exit="exit"
						key="3"
					>
						<ConfirmationStepComponent
							firstName={name}
							lastName={surname}
							address={selectedAddress}
							phoneNumber={phoneNumber}
							identificationNumber={socialSecurity}
							createdAt={new Date().getDate().toLocaleString("cs")}
							pickupTime={"tomorrow"}
							orderNumber={Math.random() * 10 + "x"}
							note={amendedMessage}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div className={"flex mt-6"} layout>
				{step === 2 && (
					<motion.button
						className={`${styles.styledButton} bg-black mr-5`}
						onClick={() => setStep(1)}
						layout
					>
						zpet
					</motion.button>
				)}
				<motion.button
					layout
					className={`${styles.styledButton} bg-blue-500`}
					animate={{
						opacity: step === 2 && !isValidForm ? 0.5 : 1,
					}}
					disabled={step === 2 && !isValidForm}
					onClick={(e) => handleSubmit(e as any)}
				>
					{getNextButtonText()}
				</motion.button>
			</motion.div>
		</section>
	);
};

export default StepperForm;
