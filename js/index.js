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


let currentSubject = ''
var subjectItems = $('.subject-item')
// $('.subject-item').each(function() {
//     console.log($(this).children().eq(1).text());
    
// })
$(document).on('click','.subject-item',function() {
    currentSubject = $(this).children().eq(1).text()
    $('.mainpage').hide()
    $('.exam').show()
    $('.current-subject').html(currentSubject) 
})