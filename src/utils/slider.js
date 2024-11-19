let isUserScrolling = false;
const sliderContainer = document.getElementById("shop-offer__container");
export function initSlider() {

    if (sliderContainer.dataset.interval) {
        clearInterval(sliderContainer.dataset.interval);
    }

    let currentPosition = 0;
    const gap = 16;
    const visibleCards = 1;

    const card = sliderContainer.querySelector('.card');
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight);

    const totalCards = sliderContainer.children.length;
    const maxPosition = (totalCards - visibleCards) * (cardWidth + gap);

    const moveSlider = () => {
        if (isUserScrolling) return
        currentPosition += cardWidth + gap;

        if (currentPosition > maxPosition) {
            currentPosition = 0;
        }

        sliderContainer.scrollTo({ left: currentPosition, behavior: "smooth" });
    };

    const interval = setInterval(moveSlider, 2000);
    sliderContainer.dataset.interval = interval;
}

sliderContainer.addEventListener("scroll", () => {
    isUserScrolling = true
    clearTimeout(sliderContainer.scrollTimeout)
    sliderContainer.scrollTimeout = setTimeout(() => {
        isUserScrolling = false
    }, 1000);
})