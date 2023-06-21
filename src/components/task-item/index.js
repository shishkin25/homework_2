import avatar from '@/assets/images/avatar.png';

function getTaskItem(items) {
    return `<div class="task-container">
                ${
                    items.map(element => `<section class="element">
                                                <div class="element__wrapper">
                                                    <div class="element__content">
                                                        <div class="element__content-header">
                                                            <div class="element__content-name">${element.name}</div>
                                                            <div class="avatar">
                                                                <img src="${avatar}" alt="avatar">
                                                            </div>
                                                        </div>
                                                
                                                        <div class="element__content-footer">
                                                            <div class="element__content-info">
                                                                <div class="element__content-code">${element.info.code}</div>
                                                                <div class="element__content-created timestamp">${element.info.createdBy}</div>
                                                                <div class="status">Черновик</div>
                                                            </div>
                                                
                                                            <div class="element__content-changing">
                                                                <div class="timestamp">${element.info.changedBy}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="extra-options">
                                                        <svg>
                                                            <use xlink:href="#dots" />
                                                        </svg>
                                                        <ul class="dropdown-list dropdown-list__dots dropdown-list__hide">
                                                            <li class="dropdown-list__item"><a href="#">Редактировать</a></li>
                                                            <li class="dropdown-list__item dropdown-list__item_red"><a href="#">Удалить</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </section>`
                    )
                }
            </div>`
}

export { getTaskItem }