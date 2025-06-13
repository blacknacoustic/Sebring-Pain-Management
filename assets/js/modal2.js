function openModal() {
	document.getElementById('appointment-modal').style.display = 'flex';
}

function closeModal() {
	document.getElementById('appointment-modal').style.display = 'none';
	const resultBox = document.getElementById('form-response');
	if (resultBox) resultBox.style.display = 'none';
	const form = document.getElementById('appointment-form');
	if (form) form.reset();
}

// Close modal if clicked outside
window.addEventListener('click', function (event) {
	const modal = document.getElementById('appointment-modal');
	if (event.target === modal) {
		closeModal();
	}
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById("appointment-form");
	const resultBox = document.getElementById("form-response");

	if (form) {
		form.addEventListener("submit", async function (e) {
			e.preventDefault();
			const data = new FormData(form);
			const response = await fetch(form.action, {
				method: form.method,
				body: data,
				headers: { 'Accept': 'application/json' }
			});

			if (resultBox) {
				if (response.ok) {
					resultBox.style.color = "green";
					resultBox.textContent = "✅ Your message has been sent successfully!";
					resultBox.style.display = "block";
					form.reset();
				} else {
					resultBox.style.color = "red";
					resultBox.textContent = "❌ There was an error. Please try again.";
					resultBox.style.display = "block";
				}
			}
		});
	}
});
