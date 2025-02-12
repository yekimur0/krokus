export const listener = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (target.classList.contains('registry__changer-block')) changeWrapper(target);
        if (target.dataset.trainBtn) showTrainers(target);
        if (target.classList.contains('header-menu__title')) showListMenu(target);
        if (target.hasAttribute('data-vacancy-link')) {
          e.preventDefault();
          showModal('modal-vacancy', target);
        }
        if(target.hasAttribute('data-close-modal')) closeModal(target);



        function closeModal(target) {
          const parent = target.closest('.modal');

          parent.classList.remove('active');
        }


        
        function showModal(selector, target) {
          const el = document.getElementById(selector);
          el.classList.add('active');
        }


        function showListMenu (target) {
          const parent = target.closest('.header-menu__block');
          const list = parent.querySelector('.header-menu__list');
          const activeTitle = document.querySelector('.header-menu__title.active');

          target.classList.toggle('active');
          list.classList.toggle('active');
        }

        function changeWrapper(target) {
            let id = target.dataset.changer;

            const activeBlock = document.querySelector('.registry__block--active');
            const block = document.querySelector(`[data-registry="${id}"]`);
            let activeTarget = document.querySelector('.registry__changer-block--active');
            if (activeBlock) activeBlock.classList.remove('registry__block--active');
            block.classList.add('registry__block--active');

            if(activeTarget) activeTarget.classList.remove('registry__changer-block--active')
            target.classList.add('registry__changer-block--active')
        }

        function showTrainers (target) {
          let id = target.dataset.trainBtn;
          const activeBtn = document.querySelector('.team__nav-btn.active');
          activeBtn.classList.remove('active');
          target.classList.add('active');


          if (id === 'all') {
            const hideItems = document.querySelectorAll('.trainer');
            hideItems.forEach(item => {
              item.classList.remove('hide-item')
            })
            return;
          }


          const items = document.querySelectorAll('.trainer');


          items.forEach(item => {

            if (item.dataset.trainer !== id) {
              item.classList.add('hide-item');
            } else {
              item.classList.remove('hide-item');
            }
          })
        }
    })
}

listener();
