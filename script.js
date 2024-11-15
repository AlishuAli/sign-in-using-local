

    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let btn = document.getElementById('btn');
    let changeBtn = document.getElementById('change');
    const bodySection = document.getElementById('body');

    changeBtn.addEventListener('click', () => {
        bodySection.style.display = 'flex';
    });

    btn.addEventListener('click', () => {
        console.log(name.value);
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);
        bodySection.style.display = 'none';
        location.reload();
    });

    if (localStorage.getItem('name') && localStorage.getItem('password')) {
        changeBtn.innerText = "Logout";
        changeBtn.addEventListener('click', () => {
            localStorage.removeItem('name');
            localStorage.removeItem('password');
            location.reload();
        });
    }


