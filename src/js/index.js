var scrolls = new BScroll('.scroll', {
    scrollX: true,
    click: true,
    probeType: 2
});
var myswiper = new Swiper('.banner', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.pagination',
        clickable: true
    }
});
var all = document.querySelector('#all');
var li = all.querySelectorAll('li');
var con = document.querySelectorAll('.icon');
for (let i = 0; i < li.length; i++) {
    li[i].onclick = function() {
        for (let j = 0; j < li.length; j++) {
            li[j].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for (let i = 0; i < con.length; i++) {
    con[i].onclick = function() {
        for (let j = 0; j < con.length; j++) {
            con[j].classList.remove('colors');
        }
        this.classList.add('colors');
    }
}