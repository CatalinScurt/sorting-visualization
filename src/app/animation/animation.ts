export const swapAnimation = (i: number, j: number, flag: boolean) => {
    document.querySelectorAll('.data')[i].classList.toggle('selected');
    document.querySelectorAll('.data')[j].classList.toggle('selected');
    if (flag) {
        (document.querySelectorAll('.data')[i] as HTMLElement).style.transform = `translateX(${25 * (j - i)}px)`;
        (document.querySelectorAll('.data')[j] as HTMLElement).style.transform = `translateX(${-25 * (j - i)}px)`;
    } else {
        (document.querySelectorAll('.data')[i] as HTMLElement).style.transform = `translateX(${0}px)`;
        (document.querySelectorAll('.data')[j] as HTMLElement).style.transform = `translateX(${0}px)`;
    }
}