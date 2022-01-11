var title = getCookie("title_news");
var img = getCookie("img_news");
var description = getCookie("description_news");
var text = getCookie("text_news");
if(title !== ""){
    $("#img_news").attr('src', img);
    $("#title_news").text(title);
    $("#description_news").text(description);
    $("#text_news").html(text);
}else{
    $("#title_news").text("Вибачте виникла помилка 😅");
}
