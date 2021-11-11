const accordionItemList_div = document.querySelectorAll('.accordion-item');

accordionItemList_div.forEach(item => item.addEventListener('click', () => {
    item.querySelector('.label').classList.toggle('turn');
    let content = item.querySelector('.content');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      item.querySelector('.label').style['font-weight'] = '400';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      item.querySelector('.label').style['font-weight'] = 'bold';
    } 
}))