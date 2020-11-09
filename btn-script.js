if(document.documentElement.clientWidth < 600){

    const $body = document.querySelector('body')

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
    $btnDiv.style.position ='absolute'
    $btnDiv.style.left ='28%'
    $btnDiv.style.top =`70px`

    $btnDiv.appendChild($btnVacancies);
    $btnDiv.appendChild($btnAds);
    $body.appendChild($btnDiv);

}
