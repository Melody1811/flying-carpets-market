$(document).ready(function() {
    let isImage2 = false;
  
    $(document.getElementById("uzor3")).click(function(){
        $('.picture1').each(function(){
            if (isImage2) {
                $(this).attr('src', 'img/picture1.svg');
            } else {
                $(this).attr('src', 'img/picture2.svg');
            }
        });
        isImage2 = !isImage2;
    });
});


$(document).ready(function() {
    let isImage1 = false;
  
    $(document.getElementById("uzor2")).click(function(){
        $('.rev1').each(function(){
            if (isImage1) {
                $(this).attr('src', 'img/rev1.svg');
            } else {
                $(this).attr('src', 'img/rev2.svg');
            }
        });
        isImage1 = !isImage1;
    });
});
  
