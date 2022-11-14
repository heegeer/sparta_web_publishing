$('.dropbtn').on('click', function (evt) {
  const ulElement = $('ul');
  ulElement.toggle();
});

// Click Outside : 버튼 외부 요소 클릭시 드롭다운이 다시 닫히도록 할 경우 사용합니다.
// $(document).on('click', function (evt) {
//   if ($(evt.target).parents('.dorpdown').length === 0) {
//     $('ul').hide();
//   }
// });
