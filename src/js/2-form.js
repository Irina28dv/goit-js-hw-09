const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

// Додано слухача подій для введення на формі
feedbackForm.addEventListener('input', event => {
  const email = emailForm.value.trim();
  const message = messageForm.value.trim();

  const myObject = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(myObject));
});

// Переміщено код зчитування даних з локального сховища в слухача input
const savedFeedback = localStorage.getItem('feedback-form-state');
if (savedFeedback !== null) {
  const parsedFeedback = JSON.parse(savedFeedback);
  emailForm.value = parsedFeedback.email;
  messageForm.value = parsedFeedback.message;
}

// Слухач події submit на формі
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const submittedEmail = emailForm.value.trim();
  const submittedMessage = messageForm.value.trim();

  // Додано перевірку на заповненість полів форми
  if (submittedEmail && submittedMessage) {
    console.log({
      email: submittedEmail,
      message: submittedMessage,
    });

    emailForm.value = '';
    messageForm.value = '';

    // Очищення локального сховища
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Please fill in both email and message fields before submitting.');
  }
});

