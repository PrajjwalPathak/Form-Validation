form.addEventListener("submit", (event) => {
	event.preventDefault();
	validateForm();
});

// Validation Message
const unsetMessage = (elementId) => {
	document.getElementById(elementId + "-message").innerText = " ";
};

const setMessage = (control, message) => {
	success = false;
	document.getElementById(control + "-message").innerText = message;
};

// Select Skills
let divDropdown = document.getElementById("skills-list");

const dropdownMenu = () => {
	divDropdown.style.display =
		divDropdown.style.display === "none" ? "block" : "none";
};

let allSkills = [];

// Add or delete skills
const addSkill = (event) => {
	const skill = event.target.innerText;
	if (!allSkills.includes(skill)) {
		allSkills.push(skill);
		event.target.classList.add("blue-color");
	} else {
		allSkills.splice(allSkills.indexOf(skill), 1);
		event.target.classList.remove("blue-color");
	}
};

// Validation Function
const validateForm = () => {
	let success = 0;
	const username = document.getElementById("username").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const technology = document.getElementById("technology").value;
	const termsCheck = document.getElementById("termsCheck").checked;

	// Validate Name
	const checkName = /^[A-Za-z]+$/;
	if (username == "") {
		setMessage("username", "Please write your Name");
	} else if (!username.match(checkName)) {
		setMessage("username", "Invalid Name");
	} else {
		success = success + 1;
	}

	// Validate Email
	if (email == "") {
		setMessage("email", "Please write your Email");
	} else if (
		email.lastIndexOf(".") == email.length - 1 ||
		email.lastIndexOf(".") <= email.indexOf("@") + 1 ||
		email.indexOf("@") < 1
	) {
		setMessage("email", "Invalid Email");
	} else {
		success = success + 1;
	}

	// Validate Phone Number
	if (phone == "") {
		setMessage("phone", "Please write your Phone Number");
	} else if (phone.length != 10) {
		setMessage("phone", "Invalid Phone Number");
	} else {
		success = success + 1;
	}

	// Validate Technology
	if (technology == "none") {
		setMessage("technology", "Select a Technology");
	} else {
		success = success + 1;
	}

	// Validate Skills
	if (allSkills.length == 0) {
		setMessage("skills", "Select atleast one Skill");
	} else {
		success = success + 1;
	}

	// Validate Terms & Conditions
	if (!termsCheck) {
		setMessage("termsCheck", "Please accept the Terms and Conditions");
	} else {
		success = success + 1;
	}

	// If everything is validated then the data is ready to use
	if (success == 6) {
		alert("Form Submitted Successfully");
		console.log({
			username,
			email,
			phone,
			technology,
			allSkills,
			termsCheck,
		});
	}
};
