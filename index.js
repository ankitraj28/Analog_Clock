setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    h = h*30 + m/2;
    m = 6*m;
    s = 6*s;

    hour.style.transform = `rotate(${h}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;
}, 1000);