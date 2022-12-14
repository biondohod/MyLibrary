import $ from './lib/lib';

$('.active').hide().show('flex');

const elem = $('div');
elem.addClass('1', '2', '3', '5');
elem.removeClass('2', '5');
elem.toggleClass('4', '6');

function click() {
  $('.active')[0].textContent++;
  if ($('.active')[0].textContent >= 10) {
    $('.active').off('click', click);
    $('.active')[0].textContent = 'текст';
    $('.active').click(() => {
      $('.active')[0].textContent += ' клик';
    });
    setTimeout(() => {
      $('.active').click();
    }, 2000);
  }
}
$('.active').click(click);

$('button').click(function () {
  $(this).toggleClass('btn--active', 'testClass');
});

console.log($('div').eq(2).html());
$('button').html('Click the button');

$('div').click((evt) => {
  console.log($(evt.target).index());
});
console.log($('div').eq(2).find('.more'));
$('div').eq(2).find('.some').click((evt) => {
  $(evt.target).toggleClass('btn--active');
});
