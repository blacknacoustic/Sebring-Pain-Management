document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById('custom-modal');
	const overlay = document.getElementById('modal-overlay');
	const closeBtn = document.getElementById('modal-close');
	const modalText = document.getElementById('modal-text');

	document.querySelectorAll('.learn-more').forEach(button => {
		button.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('data-modal-target');
			const content = document.getElementById(targetId);
			if (content) {
				modalText.innerHTML = content.innerHTML;
				modal.style.display = 'block';
				overlay.style.display = 'block';
			}
		});
	});

	const closeModal = () => {
		modal.style.display = 'none';
		overlay.style.display = 'none';
	};

	closeBtn.addEventListener('click', closeModal);
	overlay.addEventListener('click', closeModal);
});
