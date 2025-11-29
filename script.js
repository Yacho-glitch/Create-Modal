function DisplayPage() {    
    
    const linkModalImg = document.querySelector('.link-modal-img');

    if (!linkModalImg) return;

    linkModalImg.addEventListener('click', () => {
        document.body.innerHTML = ` <div class="inside-modal">
                                        <div class="modal">
                                            <h1>Modal Project</h1>
                                            <button id="open-modal">OPEN MODAL</button>
                                        </div>
                                    </div>
                                  `                      
        modal();                                       
    })                             
}


function modal() {
        const modal = document.querySelector('.modal');
        const openBtn = document.querySelector('#open-modal');

        if(!openBtn) return;

        openBtn.addEventListener('click', () => { 
            modal.innerHTML = `<div id="styling">
                                    <div>
                                        <button class="hiddenBtnElement" type="button">x</button>
                                    <div>
                                    <h1>Modal Content</h1>
                                </div>`;
            hiddenBtn();
        })
}

function hiddenBtn() {
    const hiddenBtnElement = document.querySelector('.hiddenBtnElement');

    if (!hiddenBtnElement) return;

    hiddenBtnElement.addEventListener('click', () => {
        const modalElement = document.querySelector('.modal');
        modalElement.parentElement.innerHTML = `<div class="inside-modal">
                                            <div class="modal">
                                                <h1>Modal Project</h1>
                                                <button id="open-modal">OPEN MODAL</button>
                                            </div>
                                        </div>`;
        setTimeout(() => modal(), 0);
    });
}

DisplayPage();