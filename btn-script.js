document.addEventListener('DOMContentLoaded', ()=>{

    if(document.documentElement.clientWidth > 600){
        return
    }

    const createBtn = (title, link )=>{
        const $btn = document.createElement('div');
        $btn.style.padding = '5px';
        $btn.style.margin = '5px';
        $btn.style.backgroundColor = '#fd3300';
        $btn.style.color = 'white';
        $btn.innerHTML = title;

        const $a = document.createElement('a');
        $a.setAttribute('href', link);

        $a.appendChild($btn);
        return $a ;
    }

    const $btnVacancies = createBtn('Вакансії', 'https://nashapolsha.pl/job/');
    const $btnAds = createBtn('Оголошення', 'https://nashapolsha.pl/classifieds/');


    const $btnDiv = document.createElement('div');
    $btnDiv.style.display = 'flex';
    $btnDiv.style.flexDirection = 'row';
    $btnDiv.style.justifyContent = 'center'
    $btnDiv.style.zIndex = 1000;

    const $header = document.querySelector('#header')
    const headerHeight = $header.getBoundingClientRect().bottom - $header.getBoundingClientRect().top
    console.log(headerHeight)
    $btnDiv.style.position ='absolute'
    $btnDiv.style.left ='25%'
    $btnDiv.style.top =`${headerHeight-40}px`


    $btnDiv.appendChild($btnVacancies);
    $btnDiv.appendChild($btnAds);
    $header.appendChild($btnDiv);
})