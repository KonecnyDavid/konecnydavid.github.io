var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  easing: "easeInOutCubic"
});

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2
const secondCol = document.querySelectorAll(".second-col")[0];

window.onload = () => {
    window.onscroll = () => {
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;

        if(scrollY < innerHeight){
            const height = map(scrollY, 0, innerHeight, 100, 50);

            secondCol.style.height = `${height}vh`;
        }
    }
}
