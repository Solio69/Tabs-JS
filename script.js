'use strict';

function tabs( tabsSelector, tabsContentSelector, tabsParentselector, activeClass){
    //это элементы по которым кликаем
    const tabs = document.querySelectorAll(tabsSelector),

    //это элементы с картинкой и текстом внутри
    tabsContent = document.querySelectorAll(tabsContentSelector),

    //это обертка табов
    tabsParent = document.querySelector(tabsParentselector);

    function hideTabsContent(){
        tabsContent.forEach(item => { 
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item  => {
            item.classList.remove(activeClass);
        });

    }

    function showTabsContent(i = 0){
        tabsContent[i].classList.add('show', 'fade'); 
        tabsContent[i].classList.remove('hide'); 
        
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        //если мы точно кликаем в таб (проверяем по наличию класса tabheader__item)
        if(target && target.classList.contains(tabsSelector.slice(1))){
        
            tabs.forEach((item, i) => {
                // находим элемент равный тому на котором произошло событие
                if (target == item){
                    // все скрываем
                    hideTabsContent();
                    // показываем только тот контен номер которого равен номеру того на которм произошло событие клика
                    showTabsContent(i);
                }
            });
        }
    });

}

tabs('.tabheader__item', '.tabcontent', '.tabcontainer', 'activ');
