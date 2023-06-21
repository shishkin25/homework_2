import "@/scss/style.scss";
import '@/js/register.js';
import { initApp, makeNavItemActive, makeElementWithDropDownActive, makeElementWithDropDownUnactive, isActive } from '@/js/functions.js';
import { getNavigation } from '@/components/navigation/index';
import { getTaskItem } from '@/components/task-item/index';
import { getProjectItem } from "@/components/project-item";
import { getAbsebseOfProject } from "@/components/absense-of-project";

const taskItems = [
    {
        name: 'Название',
        info: {
            code: '#1',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }
    }
];
const projectItems = [
    {
        name: 'Название',
        info: {
            code: '#1',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }
    }
];

initApp(
    getNavigation(), 
    getTaskItem(taskItems), 
    getProjectItem(projectItems), 
    getAbsebseOfProject()
);

let hasActiveExtraOptions = false;
document.querySelector('.app').addEventListener('click', (e) => {
    //обработка нажатия на item навигационной панели
    const navItem = e.target.closest('.menu__nav-item');
    if (navItem && !navItem.classList.contains('menu__nav-item_active')) {
        makeNavItemActive(navItem);
    }
    //обработка нажатия на user-btn
    const menuUserBtn = document.querySelector('.menu__user-btn');
    const clickOnDropDownOfUserBtn = e.target.closest('.menu__user-btn .dropdown-list');
    const clickOnUserBtn = e.target.closest('.menu__user-btn');
    if (isActive(menuUserBtn, 'menu__user-btn_active')) {
        if (!clickOnDropDownOfUserBtn) {
            makeElementWithDropDownUnactive(menuUserBtn, 'menu__user-btn_active', 'dropdown-list__hide');
        } 
    } else {
        if (clickOnUserBtn) {
            makeElementWithDropDownActive(menuUserBtn, 'menu__user-btn_active', 'dropdown-list__hide');
        }
    }
    //обработка нажатия на extra-options (точки) у элементов
    const clickOnExtraOptions = e.target.closest('.extra-options');
    const clickOnDropDownOfExtraOptions = e.target.closest('.extra-options .dropdown-list');
    const arrayExtraOptions = document.querySelectorAll('.extra-options');
    if (hasActiveExtraOptions) {
        if (!clickOnDropDownOfExtraOptions) {
            if (clickOnExtraOptions) {
                const extraOptions = clickOnExtraOptions;
                if (isActive(extraOptions, 'extra-options__active')) {
                    makeElementWithDropDownUnactive(extraOptions, 'extra-options__active', 'dropdown-list__hide');
                    hasActiveExtraOptions = false;
                } else {
                    arrayExtraOptions.forEach((element) => {
                        if (isActive(element, 'extra-options__active')) {
                            makeElementWithDropDownUnactive(element, 'extra-options__active', 'dropdown-list__hide');
                        }
                    });
                    makeElementWithDropDownActive(extraOptions, 'extra-options__active', 'dropdown-list__hide');
                }
            } else {
                arrayExtraOptions.forEach((element) => {
                    if (isActive(element, 'extra-options__active')) {
                        makeElementWithDropDownUnactive(element, 'extra-options__active', 'dropdown-list__hide');
                    }
                });
                hasActiveExtraOptions = false;
            }
        }
    } else {
        if (clickOnExtraOptions) {
            const extraOptions = clickOnExtraOptions;
            makeElementWithDropDownActive(extraOptions, 'extra-options__active', 'dropdown-list__hide');
            hasActiveExtraOptions = true;
        }
    }    
});
