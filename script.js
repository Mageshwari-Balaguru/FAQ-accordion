const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle content visibility
        const content = this.parentElement.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        // Check if the content is already expanded
        if (content.style.maxHeight) {
            // Collapse content
            content.style.maxHeight = null;
            // Toggle icons
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            // Expand content
            content.style.maxHeight = content.scrollHeight + 'px';
            // Toggle icons
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});
