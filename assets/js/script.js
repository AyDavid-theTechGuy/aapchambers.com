/* WhatsApp Quick Contact Hover */

const waQc = document.querySelector(".wa-qc");

waQc.innerHTML = `
	<div class="wrapper">
		<a href="https://wa.me/2348084634310"><i class="bi bi-whatsapp"></i></a>
	</div>`;

const waBg = document.querySelector(".wa-qc .wrapper");
const waIcon = document.querySelector(".wa-qc .wrapper i");

waBg.addEventListener("mouseover", () => {
	waBg.style.backgroundColor = "#f1f1f1";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#1a8754";
	waIcon.style.transition = "0.75s";
});

waBg.addEventListener("mouseleave", () => {
	waBg.style.backgroundColor = "#20a869";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#f1f1f1";
	waIcon.style.transition = "0.75s";
});