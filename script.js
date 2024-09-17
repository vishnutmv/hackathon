const readMoreButtons = document.querySelectorAll('.read-more');
const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');

readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const eventBox = e.target.closest('.event-box');
        eventBox.classList.add('active');
        overlay.style.display = 'block';
        setTimeout(() => overlay.style.opacity = '1', 10);
        instructions.innerHTML = `
            <h3>${eventBox.querySelector('h3').innerText} Instructions</h3>
            <p>Here are some example instructions for ${eventBox.querySelector('h3').innerText}. You'll need to complete a series of tasks in this event to compete with others. Good luck!</p>
            <button id="register">Register</button>
        `;
        // Blur other boxes
        document.querySelectorAll('.event-box').forEach(box => {
            if (!box.classList.contains('active')) {
                box.style.filter = 'blur(5px)';
            }
        });
    });
});

overlay.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 300);
    // Reset blur
    document.querySelectorAll('.event-box').forEach(box => {
        box.style.filter = 'none';
    });
});
