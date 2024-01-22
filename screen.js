function takeScreenshot() {
    const notification = document.getElementById('notification');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillStyle = '#ffffff'; // Цвет фона
    context.fillRect(0, 0, canvas.width, canvas.height);

    const screenshotData = canvas.toDataURL('image/png');

    notification.innerHTML = `<img src="${screenshotData}" alt="Screenshot">`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

setInterval(takeScreenshot, 180000);
