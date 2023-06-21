import avatar from '@/assets/images/avatar.png';

function getNavigation() {
    return `<header class="menu">
            <div class="menu__content">
                <nav class="menu__nav">
                    <ul class="menu__nav-list">
                        <li class="menu__nav-item btn"><a href="#">Проекты</a></li>
                        <li class="menu__nav-item btn"><a href="#">Задачи</a></li>
                        <li class="menu__nav-item btn"><a href="#">Пользователи</a></li>
                    </ul>
                </nav>

                <div class="menu__user-btn">
                    <div class="avatar">
                        <img src="${avatar}" alt="avatar">
                    </div>
                    <div class="menu__user-arrow">
                        <svg>
                            <use xlink:href="#arrow-down" />
                        </svg>
                    </div>
                    <ul class="dropdown-list dropdown-list__hide">
                        <li class="dropdown-list__item"><a href="#">Профиль</a></li>
                        <li class="dropdown-list__item"><a href="#">Выход</a></li>
                    </ul>
                </div>
            </div>
        </header>`
}

export { getNavigation }

