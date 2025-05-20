// Newsletter Form Submission
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! Normally, you'd receive updates about red panda conservation, however this is a demo project`);
    this.reset();
});
