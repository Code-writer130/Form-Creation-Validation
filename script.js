<script>
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('registration-form');
        const feedbackDiv = document.getElementById('form-feedback');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            validateForm();
        });

        function getInputValues() {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            return { username, email, password };
        }

        function validateForm() {
            const { username, email, password } = getInputValues();
            let isValid = true;
            let messages = [];

            if (username.length < 3) {
                isValid = false;
                messages.push("Username must be at least 3 characters long.");
            }

            if (!email.includes('@') || !email.includes('.')) {
                isValid = false;
                messages.push("Please enter a valid email address.");
            }

            if (password.length < 8) {
                isValid = false;
                messages.push("Password must be at least 8 characters long.");
            }

            if (isValid) {
                feedbackDiv.textContent = "Form submitted successfully!";
                feedbackDiv.style.color = "green";
            } else {
                feedbackDiv.textContent = messages.join(' ');
                feedbackDiv.style.color = "red";
            }
        }
    });
</script>
