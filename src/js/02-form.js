document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Отримуємо значення полів форми
            const emailValue = form.querySelector('input[name="email"]').value;
            const messageValue = form.querySelector('textarea[name="message"]').value;

            // Зберігаємо значення у локальне сховище
            localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailValue, message: messageValue }));

            // Очищаємо поля форми
            form.querySelector('input[name="email"]').value = '';
            form.querySelector('textarea[name="message"]').value = '';

            // Виводимо об'єкт у консоль (це можна замінити реальною логікою)
            console.log({ email: emailValue, message: messageValue });
        });

        // Відновлюємо значення полів форми при завантаженні сторінки
        const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (savedState) {
            form.querySelector('input[name="email"]').value = savedState.email;
            form.querySelector('textarea[name="message"]').value = savedState.message;
        }
    }
});
