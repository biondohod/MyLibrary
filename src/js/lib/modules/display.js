import $ from '../core';

$.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }

  return this;
};

$.prototype.show = function (display) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (display) {
      this[i].style.display = display;
    } else {
      this[i].style.display = '';
      if (window.getComputedStyle(this[i]).display === 'none') {
        this[i].style.display = 'block';
      }
    }
  }

  return this;
};

$.prototype.toggleDisplay = function (display = 'block') {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (window.getComputedStyle(this[i]).display === 'none') {
      this.show(display);
    } else {
      this.hide();
    }
  }

  return this;
};
