$('.tabpill').on('click',function() {
    const id = $(this).attr('id') 
    let tabcontent = $('.tabcontent')
    for( let item of  $('.tabcontent')) {
        item.style.display = 'none'
    }
    for( let item of  $('.tabpill')) {
        item.style.borderBottom = '3px solid #fff'
    }
    $(`.${id}`).css('display','block')
    $(this).css('border-bottom','3px solid #2196F3')
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }

})