import './lib/lib';

$('.active').hide().show('flex');

const elem = $('div');
elem.addClass('1', '2', '3', '5');
elem.removeClass('2', '5');
elem.toggleClass('4', '6');

