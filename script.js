function DisplayPage() {    
    document.querySelector('.link-modal-img').addEventListener('click', () => {
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
        document.querySelector('#open-modal').addEventListener('click', () => { 

            modal.innerHTML = `<div id="styling">
                                    <div>
                                        <button class="hiddenBtn" type="button">x</button>
                                    <div>
                                    <h1>Modal Content</h1>
                                </div>`
                                hiddenBtn();
        })

}

function hiddenBtn() {
    document.querySelector('.hiddenBtn').addEventListener('click', () => {
        console.log('fgdgdfgsd');
            DisplayPage();
    })

}

DisplayPage();