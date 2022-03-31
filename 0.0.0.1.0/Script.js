let NoteBoard = document.querySelector('.NoteBoard');
let Keys = document.querySelectorAll('.Key');
let Hints = document.querySelectorAll('.Hints');
// 
window.addEventListener('keydown',function (e) {
    const SelectedKey = document.querySelector(`.Key[date-Code="${e.code}"]`);
    const audio = document.querySelector(`audio[date-Code="${e.code}"]`);
    if (! SelectedKey) {return};
    let KeyNote = SelectedKey.getAttribute('data-Note');
    // 
    SelectedKey.classList.add('Playing')
    NoteBoard.textContent = KeyNote;
    NoteBoard.classList.remove('FirstNote');
    audio.currentTime = 0;
    audio.play();
});
window.addEventListener('keyup',function (e) {
    const SelectedKey = document.querySelector(`.Key[date-Code="${e.code}"]`);
    if (! SelectedKey) {return};
    SelectedKey.classList.remove('Playing')
});
Hints.forEach(function(elm , index) {
        elm.setAttribute('style',`transition-delay : ${index * 50}ms`)
});