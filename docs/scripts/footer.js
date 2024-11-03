const footer = document.createElement('footer');
footer.innerHTML = `
	<div>
		<span>
			<a href="https://github.com/PapitaConPure/me" target="_blank">
				<i class="fa fa-brands fa-github fa-lg"></i>
			</a>
		</span>
		•
		<span>2024</span>
		•
		<a href="https://github.com/PapitaConPure" target="_blank" class="hover:underline">
			Papita con Puré
		</a>
	</div>
`.trim();

document.body.appendChild(footer);
