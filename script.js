/*==== CODIFICAÇÃO DE JAVASCRIPT PARA PRODUTOS DO "CARDÁPIO" ====*/

/*== SCRIPT DE "BOLOS"(_B) ==*/
const productContainersB = [...document.querySelectorAll('.P_Container_B')];
const nxtBtnB = [...document.querySelectorAll('.S_Próximo_B')];
const preBtnB = [...document.querySelectorAll('.S_Anterior_B')];

productContainersB.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnB[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnB[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
/* ---------- */


/*== SCRIPT DE "COOKIES"(_C) ==*/
const productContainersC = [...document.querySelectorAll('.P_Container_C')];
const nxtBtnC = [...document.querySelectorAll('.S_Próximo_C')];
const preBtnC = [...document.querySelectorAll('.S_Anterior_C')];

productContainersC.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnC[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnC[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
/* ---------- */


/*== SCRIPT DE "DRINKS"(_D) ==*/
const productContainersD = [...document.querySelectorAll('.P_Container_D')];
const nxtBtnD = [...document.querySelectorAll('.S_Próximo_D')];
const preBtnD = [...document.querySelectorAll('.S_Anterior_D')];

productContainersD.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnD[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnD[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
/* ---------- */


/*== SCRIPT DE "MACAROONS"(_M) ==*/
const productContainersM = [...document.querySelectorAll('.P_Container_M')];
const nxtBtnM = [...document.querySelectorAll('.S_Próximo_M')];
const preBtnM = [...document.querySelectorAll('.S_Anterior_M')];

productContainersM.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnM[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnM[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
/* ---------- */

/* ============================================================= */