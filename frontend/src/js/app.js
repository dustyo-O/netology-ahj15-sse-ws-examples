// TODO: write code here

import Chat from './components/chat/chat';
import RegisterForm from './components/register-form/register-form';

// eslint-disable-next-line no-new
new RegisterForm('.register-form', async (formData) => {
  const response = await fetch('http://localhost:7070/subscriptions/', {
    method: 'POST',
    body: formData,
  });

  const text = await response.text();

  console.log(text);
});

const sse = new EventSource('http://localhost:7070/sse');

sse.addEventListener('message', (event) => {
  console.log('message');

  console.log(event);
});
sse.addEventListener('open', (event) => {
  console.log('open');

  console.log(event);
});
sse.addEventListener('error', (event) => {
  console.log('error');

  console.log(event);
});

// eslint-disable-next-line no-new
new Chat('.chat');
