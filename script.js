const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameMsg = document.getElementById('usernameMsg');
const passwordMsg = document.getElementById('passwordMsg');
const signupBtn = document.getElementById('signupBtn');
const form = document.getElementById('signupForm');

function showNotification(message, color = '#000000ff') {
  if (document.querySelector('.notification')) {
    document.querySelector('.notification').remove();
  }
  
  const notification = document.createElement('div');
  notification.className = 'notification';

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 6px ${color};
    z-index: 1000;
    font-family: Arial, sans-serif;
    max-width: 500px;
    word-wrap: break-word;
    transition: all 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100px)';
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

usernameInput.addEventListener('input', () => {
  if (usernameInput.value.toLowerCase() === 'aswin') {
    showNotification('Username already taken by ASWIN TULASI');
    return;
  }

  if (usernameInput.value.toLowerCase() === 'havis') {
    showNotification('How dare you touch the GOD!!!');
    return;
  }

  if (usernameInput.value.toLowerCase() === 'hari') {
    showNotification('Pokutty is the best');
    return;
  }

  if (usernameInput.value.length === 0) {
    showNotification('Please enter a username');
    return;
  }

  if (usernameInput.value.length < 5) {
    showNotification(`${usernameInput.value} is weak`);
    return;
  }

  showNotification(`${usernameInput.value} is strong`);
});

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;
  if (value === '12345678') {
    passwordMsg.textContent = 'Powerful! But already used by ASWIN TULASI';
    showNotification('Password already used by ASWIN TULASI');
  } else {
    passwordMsg.textContent = 'Your password is weak';
  }
});

// Button avoiding behavior
form.addEventListener('mousemove', (e) => {
  const btnRect = signupBtn.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const offset = 60;

  if (
    mouseX > btnRect.left - offset &&
    mouseX < btnRect.right + offset &&
    mouseY > btnRect.top - offset &&
    mouseY < btnRect.bottom + offset
  ) {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 70);
    signupBtn.style.position = 'absolute';
    signupBtn.style.left = `${newX}px`;
    signupBtn.style.top = `${newY}px`;
  }
});

// Form submission leads to loading screen (if clicked)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'loading.html';
});
let logo = document.getElementById("logo");
let clickCount = 0;

logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount >= 5) {
    window.location.href = "havis.html";
    clickCount = 0;
  }
});

