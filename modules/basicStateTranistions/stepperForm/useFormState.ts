import { useCallback, useEffect, useState } from "react";

export const useFormState = (addresses: Array<string>) => {
	const [step, setStep] = useState(1);

	const [selectedAddress, setSelectedAddress] = useState(addresses[0] || "");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [socialSecurity, setSocialSecurity] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [amendedMessage, setAmendedMessage] = useState("");

	const [isValidForm, setFormValid] = useState(false);

	useEffect(() => {
		if (
			phoneNumber.length >= 5 &&
			socialSecurity.length >= 4 &&
			isValidForm === false
		) {
			setFormValid(true);
		}
		if (
			phoneNumber.length < 5 ||
			(socialSecurity.length < 4 && isValidForm === true)
		) {
			setFormValid(false);
		}
	}, [socialSecurity, phoneNumber, socialSecurity]);

	const handleSubmit = useCallback(
		(event: MouseEvent) => {
			event.preventDefault();

			if (step === 2 && isValidForm) {
				setStep(3);
			}

			if (step === 1) setStep((state) => state + 1);
			if (step === 3) {
				setName("");
				setSurname("");
				setSocialSecurity("");
				setPhoneNumber("");
				setAmendedMessage("");
				setStep(1);
			}
		},
		[step, isValidForm]
	);

	const getNextButtonText = useCallback(() => {
		switch (step) {
		case 1:
			return "PLESK";
		case 2:
			return "KAPOW";

		case 3:
			return "DIN DING";
		}
	}, [step]);

	return {
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
		isValidForm,
		getNextButtonText,
	};
};
