const sidebar = document.querySelector('.sidebar-container');

sidebar.innerHTML = `
<nav class="sidebar">
            <h2>Мой Словарь</h2>
            <ul>
                <li><a href="dashboard.html">Главная</a></li>
								<li><a href="profile.html">Мой профиль</a></li>
                <li><a href="#">Мои слова</a></li>
                <li><a href="#">Тренировки</a></li>
                <li><a href="#">Настройки</a></li>
                <li><a href="#">Выход</a></li>
            </ul>
        </nav>
`