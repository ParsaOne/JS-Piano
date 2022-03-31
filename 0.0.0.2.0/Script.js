let NoteBoard = document.querySelector('.NoteBoard');
let Keys = document.querySelectorAll('.Key');
let Hints = document.querySelectorAll('.Hints');
let SelectedKey;
let audio;
// 
window.addEventListener('keydown',function (e) {
    SelectedKey = document.querySelector(`.Key[data-Code="${e.code}"]`);
    audio = document.querySelector(`audio[data-Code="${e.code}"]`);
    if (! SelectedKey) {return};
    Start(SelectedKey,audio);
    setTimeout(() => {
        SelectedKey.classList.remove('Playing')
    }, 200);
});
Keys.forEach(Key => {
    Key.addEventListener('click', Playing => {
        SelectedKey = Playing.target;
        audio = document.querySelector(`audio[data-Code="${SelectedKey.getAttribute('data-Code')}"]`);
        Start(SelectedKey,audio);
        setTimeout(() => {
            SelectedKey.classList.remove('Playing')
        }, 200);});
});
function Start(SelectedKey,audio) {
    let KeyNote = SelectedKey.getAttribute('data-Note');
    SelectedKey.classList.add('Playing')
    NoteBoard.textContent = KeyNote;
    NoteBoard.classList.remove('FirstNote');
    audio.currentTime = 0;
    audio.play();
};
Hints.forEach(function(elm , index) {
    elm.setAttribute('style',`transition-delay : ${index * 50}ms`)
});