function initApp(...components) {
    let app = document.querySelector('.app');
    components.forEach(component => app.insertAdjacentHTML("beforeend", component));
}

function makeNavItemActive(item) {
    item.classList.add('menu__nav-item_active');
    item.children[0].classList.add('primary-font');
    makeOtherNavItemsDefault(item);
}

function makeOtherNavItemsDefault(activeItem) {
    const navItems = Array.from(activeItem.parentElement.children);

    navItems.forEach(item => {
        if (item != activeItem) {
            item.classList.remove('menu__nav-item_active');
            item.children[0].classList.remove('primary-font');
        }
    });
}

function makeElementWithDropDownActive(element, classActiveElement, classHideDropDown) {
    element.classList.add(classActiveElement);
    const dropDownList = element.querySelector('.dropdown-list');
    dropDownList.classList.remove(classHideDropDown);
}

function makeElementWithDropDownUnactive(element, classActiveElement, classHideDropDown) {
    element.classList.remove(classActiveElement);
    const dropDownList = element.querySelector('.dropdown-list');
    dropDownList.classList.add(classHideDropDown);
}

function isActive(element, className) {
    return element.classList.contains(className);
}

export { initApp, makeNavItemActive, makeElementWithDropDownActive, makeElementWithDropDownUnactive, isActive }