document.querySelector('.link-modal-img').addEventListener('click', () => {
    document.body.innerHTML = `<!DOCTYPE html>
                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <link rel="stylesheet" href="style.css">
                                    <title>Document</title>
                                </head>
                                <body>
                                    <div class="inside-modal">
                                        <div class="modal">
                                            <h1>Modal Project</h1>
                                            <button id="open-modal">OPEN MODAL</button>
                                        </div>
                                    </div>

                                </body>
                                </html>`

        const modal = document.querySelector('.modal');
        document.querySelector('#open-modal').addEventListener('click', () => { 

            modal.innerHTML = `<div id="styling">
                                    <div>
                                        <button class="hiddenBtn" type="button">x</button>
                                    <div>
                                    <h1>Modal Content</h1>
                                </div>`


            document.querySelector('.hiddenBtn').addEventListener('click', () => {
                modal.innerHTML = ` <h1>Modal Project</h1>
                                    <button id="open-modal">OPEN MODAL</button>`
            })
        })
})