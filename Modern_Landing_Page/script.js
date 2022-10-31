const tabItems = document.querySelectorAll('.tab-item')
const tabItemsContent = document.querySelectorAll('.tab-item-content')

function sellectItem(e){

            removeBorder();
            removeshow();
     
      this.classList.add('tab-border')
      const tabContent = document.querySelector(`#${this.id}-conten`);
      tabContent.classList.add('show')

}
function removeBorder(){
      tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeshow(){
      tabItemsContent.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', sellectItem))