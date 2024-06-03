function validateNome() {
	let inputField = document.forms["form-contato"]["nome"];
	let inputValue = document.forms["form-contato"]["nome"].value;
	let errorMessage = document.querySelector("#error-nome");

	if (!inputValue.length) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return false;
	}

	if (inputValue.length >= 3) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return true;
	}

	if (inputValue.length < 3) {
		inputField.classList.add("error-input");
		errorMessage.style.display = "block";

		return false;
	}
}

function validateEmail() {
	let inputField = document.forms["form-contato"]["email"];
	let inputValue = document.forms["form-contato"]["email"].value;
	let errorMessage = document.querySelector("#error-email");

	if (!inputValue.length) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return false;
	}

	if (
		inputValue.length >= 6 &&
		inputValue.includes("@") &&
		inputValue.includes(".")
	) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return true;
	}

	if (
		!inputValue.includes("@") ||
		!inputValue.includes(".") ||
		inputValue.length < 6
	) {
		inputField.classList.add("error-input");
		errorMessage.style.display = "block";

		return false;
	}
}

function validateMensagem() {
	let inputField = document.forms["form-contato"]["mensagem"];
	let inputValue = document.forms["form-contato"]["mensagem"].value;
	let errorMessage = document.querySelector("#error-mensagem");

	if (!inputValue.length) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return false;
	}

	if (!inputValue.length || inputValue.length >= 10) {
		inputField.classList.remove("error-input");
		errorMessage.style.display = "none";

		return true;
	}

	if (inputValue.length < 10) {
		inputField.classList.add("error-input");
		errorMessage.style.display = "block";

		return false;
	}
}

function submitForm(e) {
	e.preventDefault();

	let form = document.forms["form-contato"];
	let nome = form["nome"];
	let email = form["email"];
	let mensagem = form["mensagem"];

	if (
		validateNome(nome) &&
		validateEmail(email) &&
		validateMensagem(mensagem)
	) {
		alert("Formulário enviado com sucesso!");
	} else {
		alert("Preencha todos os campos corretamente.");
	}
}
