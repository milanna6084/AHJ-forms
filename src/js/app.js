const button = document.querySelector('.button');

function showPopover(target) {
  const popoverElem = document.querySelector('.popover-wrapper');
  if (popoverElem) {
    popoverElem.remove();
    return;
  }
  const popoverWrapper = document.createElement('div');
  const popover = document.createElement('div');
  const popoverName = document.createElement('p');
  const popoverText = document.createElement('p');
  const popoverArrow = document.createElement('div');

  popoverWrapper.className = 'popover-wrapper';
  popover.className = 'popover';
  popoverName.className = 'popover-name';
  popoverName.textContent = 'Red button';
  popoverText.className = 'popover-text';
  popoverText.textContent = 'There should be writen much interesting information about RED BUTTON';
  popoverArrow.className = 'popover-arrow';

  document.body.appendChild(popoverWrapper);
  popoverWrapper.appendChild(popover);
  popover.appendChild(popoverName);
  popover.appendChild(popoverText);
  popoverWrapper.appendChild(popoverArrow);

  const { top, left } = target.getBoundingClientRect();
  popoverWrapper.style.top = `${top - popoverWrapper.offsetHeight}px`;
  popoverWrapper.style.left = `${left + target.offsetWidth / 2 - popoverWrapper.offsetWidth / 2}px`;
}

button.addEventListener('click', (e) => showPopover(e.target));
