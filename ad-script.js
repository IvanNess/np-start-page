window.onload = ()=>{

    if(document.documentElement.clientWidth > 600){
        return
    }

    const $adDiv = document.createElement("div");
    $adDiv.style.backgroundColor = "#ccc";
    $adDiv.style.width = '100vw';
    $adDiv.style.height = '100vh';
    $adDiv.style.position = 'absolute';
    $adDiv.style.left = '-100vw';
    $adDiv.style.top = 0;
    $adDiv.style.zIndex = 1000;
    $adDiv.style.display = 'flex';
    $adDiv.style.flexDirection = 'column';
    $adDiv.style.alignItems = 'center';
    $adDiv.style.justifyContent = 'center';
    $adDiv.style.transitionDuration = '0.5s';
    $adDiv.style.overflow = 'hidden';

    document.body.addEventListener("touchstart", (e)=>{
        e.preventDefault()
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        $adDiv.style.left = 0;
    }, {once: true})

    const $ad = document.querySelectorAll("section.container-wrap.main-color");
    const $clone0 = $ad[1].cloneNode(true)
    const $clone1 = $ad[1].cloneNode(true)//4
    $adDiv.appendChild($clone0)
    $adDiv.appendChild($clone1)

    document.body.appendChild($adDiv);

    const $close = document.createElement("div")
    $close.style.width = "5rem"
    $close.style.height = "5rem"
    $close.style.position = "absolute"
    $close.style.right = "5px"
    $close.style.top = "5px"
    $close.style.padding = "5px"
    $close.style.borderRadius = "5rem"
    $close.style.backgroundColor = "#ddd"
    $close.style.display = "flex"
    $close.style.textAlign = "center"
    $close.style.flexDirection = "column"
    $close.style.justifyContent = "center"
    $close.style.fontWeight = "bold"
    $close.style.fontSize = "4rem"
    $close.innerHTML = '<svg id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#666" d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>'

    const closeAd = ()=>{
        $adDiv.style.left = '-100vw'
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }

    $close.addEventListener('click', closeAd)

    $adDiv.appendChild($close)

}

