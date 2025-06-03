const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imgPopup.style.cssText = `
        display: none;
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
    `;

    bigImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        box-shadow: 0 0 15px rgba(255,255,255,0.2);
        border-radius: 8px;
    `;

    imgPopup.appendChild(bigImage);
    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('preview')) {
            e.preventDefault();
            const link = target.closest('a');
            const imageSrc = link ? link.getAttribute('href') : null;
            if (imageSrc) {
                bigImage.src = imageSrc;
                imgPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // заблокуємо прокрутку фону
            }
        }

        if (target === imgPopup) {
            imgPopup.style.display = 'none';
            bigImage.src = '';
            document.body.style.overflow = ''; // відновимо прокрутку
        }
    });
};

export default images;
