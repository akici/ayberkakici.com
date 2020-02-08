/******************
    User custom JS
    ---------------

   Put JS-functions for your template here.
   If possible use a closure, or add them to the general Template Object "Template"
*/

var categories = [
    '1-gelis-ve-kalkis',
    '2-konusma-ve-anlama',
    '3-aidiyet-duygusu-ve-tecrubeler',
    '4-din-ve-inanc',
    '5-arkadaslar',
    '6-ogrenme-ve-egitim',
    '7-is-ve-ev',
    '8-kisilik-ve-kendini-iyi-hissetme'
];
var pages = [11, 6, 7, 2, 4, 4, 7, 5];

function navigateToPreviousCategory(arrayOfLocation) {
    var categoryName = arrayOfLocation[arrayOfLocation.length - 2];
    var previousCategory = categories[categories.indexOf(categoryName) - 1];
    var previousCategoryLink = '../' + previousCategory + '/0.htm';
    window.location.href = previousCategoryLink;
}

function navigatePage(page) {
    var arrayOfLocation = window.location.pathname.split('/');
    var fileName = arrayOfLocation[arrayOfLocation.length - 1];
    var fileName = (parseInt(fileName.split('.')[0]) + page).toString() + '.htm';

    if (fileName === '-1.htm') {
        navigateToPreviousCategory(arrayOfLocation);
    } else {
        window.location.href = fileName;
    }
}

function createPages(index, category) {
    var html = '<ul>';
    for (var i=0; i <= pages[index]; i++) {
        html += '<li><a href="' + category + '/' + i +'.htm">S.' + i + '</a></li>';
    }
    return html + '</ul>';
}

function createMenu() {
    var html = '';
    categories.forEach(function (category, index) {
        var categoryName = category.replace(/-/g, ' ').toUpperCase();
        html += '<p><b>'+categoryName+'</b></p>';
        html += createPages(index, category);
    });
    return html;
}


$(document).on('ready pjax:scriptcomplete',function(){
    /**
     * Code included inside this will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
     * @see https://learn.jquery.com/using-jquery-core/document-ready/
     */
    $('#ls-button-submit').click(function (event) {
        event.preventDefault();
        navigatePage(1);
    });
    $('#ls-button-previous').click(function (event) {
        event.preventDefault();
        navigatePage(-1);
    });
    $('.logo-middle').click(function () {
        window.location.href = '../menu.html'
    });
    $('#survey-menu').html(createMenu());
});


/* 2017-05-05 Marcel: Highlighting images as answers as when */
$(document).on('ready pjax:scriptcomplete',function()
{
    /* highlighting answers as selected */
    $(".osrating .radio-item .radio-label").click(function(){
    	$(this).parent("li.radio-item").parent("ul").parent("div.answers-list").find(".radio-label.radio-selected").removeClass("radio-selected");
		$(this).parent("li.radio-item").parent("ul").find(".radio-label").addClass("radio-selected ");
	});
});


/* 2017-06-19 Marcel: Mark selected answers on page reload */
$(document).on('ready pjax:scriptcomplete',function()
{
    $('.list-radio.osrating input.radio:checked').each(function(i) 
    {
         $(this).nextAll('.radio-label:eq(0)').addClass('radio-selected');

    });

});

/* 2018-07-16 Marcel: Disable "Enter" key for text inputs */
$(document).on('ready pjax:scriptcomplete',function()
{
    $('input[type="text"]').on('keypress', function(event){ 
		if (event.keyCode == 13){
			event.preventDefault();
		}
	});
});
