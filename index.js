const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const logo = document.getElementById('logo-main');
const logoProfile = document.getElementById('logo-profile');
const darkMode = document.querySelector('.dark-mode');


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');

      // Cambia el logo según el estado
    if (document.body.classList.contains('dark-mode-variables')) {
        logo.src = 'images/logo-ligth.png'; // Cambia a logo oscuro
        logoProfile.src = 'images/logo-ligth.png'; // Cambia a logo oscuro
    } else {
        logo.src = 'images/logo-dark.png'; // Cambia a logo claro
        logoProfile.src = 'images/logo-dark.png'; // Cambia a logo oscuro

    }
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});