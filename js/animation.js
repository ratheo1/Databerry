var t1 = anime.timeline({
    easing: 'easeOutQuint',
})
var text = document.querySelector("#h1")
text.innerHTML = text.innerText.split('').map(value => {
    if(value==" "){
        value = "&nbsp;"
    }
    return "<span>" + value + "</span>"
}).join("")

t1
.add({
    targets: '#skater',
    translateY: ['800px',0],
    duration: 2000
})
.add({
    targets: '.btn-arrow',
    rotate: ['90deg',0],
    opacity: [0,1],
}, 200)
.add({
    targets: '#clock',
    top: ['100%','62%'],
    left: ['50%','30%'],
    opacity: [0,1],
    duration: 2500
}, 500)
.add({
    targets: '#headset',
    top: ['100%','50%'],
    left: ['50%','65%'],
    opacity: [0,1],
    duration: 2500
}, 500)
.add({
    targets: '#bell',
    top: ['100%','75%'],
    left: ['50%','58%'],
    opacity: [0,1],
    duration: 2500
}, 500)
.add({
    targets: 'span',
    translateY: ["-70px",0],
    opacity: [0,1],
    delay: (e,i)=>{
        return i*50
    },
}, 800)
.add({
    targets: ['#p-content', '.action-item'],
    translateY: ["-50px",0],
    opacity: [0,1],
}, 900)
.add({
    targets: '.navbar-item',
    translateY: ["-200px",0],
    opacity: [0,1],
    delay: (e,i)=>{
        return i*180
    },
    easing: 'easeOutQuint'
}, 1200)