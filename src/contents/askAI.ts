import type { PlasmoContentScript } from "plasmo"
import { parseChat } from "~api/parseChat"

export const config: PlasmoContentScript = {
  matches: ["https://chat.openai.com/*"]
}

async function fetchFullChat() {
	try {
		const matches = document.querySelectorAll(".group.w-full")
		const chat = Array.from(matches)

		const rawPrompts = chat.filter((el, index) => index % 2 === 0)
		const rawAnswers = chat.filter((el, index) => index % 2 === 1)

		const prompts = rawPrompts.map(
		(el) => el.querySelector(".whitespace-pre-wrap")?.textContent
		)
		const answers = rawAnswers.map(
		(el) =>
				(
				el.querySelector(".markdown") ??
				el.querySelector(".dark.text-orange-500")
				)?.innerHTML
		)

		const url = window.location.href
		const title = document.title
		
		console.log(prompts)
		console.log(answers)
	}
	catch(error){
			console.log("error")
	}
}

// window.addEventListener("click", fetchFullChat);
const button = document.querySelector('button.absolute.p-1');

if (button) {
  // Add click event listener to the button
  button.addEventListener('click', fetchFullChat);
}
