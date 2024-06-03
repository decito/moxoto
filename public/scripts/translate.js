let currentLang = "ptBr";

let dicionario = {
	menu_1: {
		en: "THE BEST",
		ptBr: "MELHORES",
	},
	menu_2: {
		en: "HOURS",
		ptBr: "HORÁRIOS",
	},
	menu_3: {
		en: "MENU",
		ptBr: "CARDÁPIO",
	},
	menu_4: {
		en: "STORY",
		ptBr: "HISTÓRIA",
	},
	menu_5: {
		en: "CONTACT",
		ptBr: "CONTATO",
	},
	bem_vindo: {
		en: "MCT SteakHouse is a welcoming and relaxed environment, decorated with local crafts and live northeastern music on Friday nights, with delicious burgers and snacks.",
		ptBr: "MCT SteakHouse é um ambiente acolhedor e descontraído, decorado com artesanato local e música nordestina ao vivo nas noites de sexta-feira, com deliciosos hambúrgueres e petiscos.",
	},
	hero_title: {
		en: "<span>THE BEST</span> IN THE REGION",
		ptBr: "A <span>MELHOR</span> DA REGIÃO",
	},
};

function traduzir() {
	currentLang = currentLang === "ptBr" ? "en" : "ptBr";
	let elements = document.querySelectorAll("[data-translate]");
	elements.forEach((element) => {
		let key = element.getAttribute("data-translate");
		if (dicionario.hasOwnProperty(key)) {
			if (dicionario[key].hasOwnProperty(currentLang)) {
				element.innerHTML = dicionario[key][currentLang];
			} else {
				console.error(
					`Tradução não encontrada para a chave ${key} no idioma ${currentLang}.`
				);
			}
		} else {
			console.error(`Chave ${key} não encontrada no dicionário.`);
		}
	});
}
