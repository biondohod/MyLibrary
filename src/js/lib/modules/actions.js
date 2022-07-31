import $ from '../core';

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

$.prototype.eq = function (index) {
  if (!index) {
    return this;
  }
  const swap = this[index];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    if (item == this[0]) {
      return item;
    }
  };

  return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
  let countOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    countOfItems += arr.length;
  }

  this.length = countOfItems;

  const objLength = Object.keys(this).length;
  for (; countOfItems < objLength; countOfItems++) {
    delete this[countOfItems];
  }

  return this;
};
