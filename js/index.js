const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Anne Bushey ${thisYear}`;
footer.appendChild(copyright);
const skills = ['basic JavaScript','basic HTML','basic CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let el of skills){
    const skill = document.createElement('li');
    skill.textContent = el;
    skillsList.appendChild(skill);
}
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> sent: <span>${usersMessage}</span>`
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'remove';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})