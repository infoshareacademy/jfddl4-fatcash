//
//
// var inViewVariable = inView.is(document.querySelector('.team-member'))
//
// if (inViewVariable){
//     var teamMember = document.querySelector(".team-member")
//     teamMember.style.border = "10px solid black"
// }


inView('.team-member')
    .on('enter', el =>
el.classList.add('in-view'))
.on('exit', el =>
el.classList.remove('in-view'));