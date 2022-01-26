const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message){
    document.querySelector('#message-form').classList.toggle('hide');
    document.querySelector('#message-show').classList.toggle('hide');

    document.querySelector('h1').textContent = message;
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#message-form').classList.toggle('hide');
    document.querySelector('#link-form').classList.toggle('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
})