function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
jQuery.isSubstring = function(haystack, needle) {
  return haystack.indexOf(needle) !== -1;
};
function goToNews(title,img,description,text){
  document.cookie = "title_news="+title;
  document.cookie = "img_news="+img;
  document.cookie = "description_news="+description;
  document.cookie = "text_news="+text;
  window.location.href = window.location.origin+"/news.html";
}
$("#searchBtn").click(function() {
  $("#searchList").empty();
  var searchText = $("#searchInput").val();
  if(searchText !== "") {
    $.getJSON(window.location.origin+"/data/json/cs-go.json", function(data) {
      $.each(data, function(i, v) {
        AddToSearchList(v,searchText);
      });
      $.getJSON(window.location.origin+"/data/json/dota-2.json", function(data) {
        $.each(data, function(i, v) {
          AddToSearchList(v,searchText);
      });});
      $.getJSON(window.location.origin+"/data/json/lol.json", function(data) {
        $.each(data, function(i, v) {
          AddToSearchList(v,searchText);
      });});
      $.getJSON(window.location.origin+"/data/json/valorant.json", function(data) {
        $.each(data, function(i, v) {
          AddToSearchList(v,searchText);
      });});

      if($('#searchList').is(':empty')){
        $("#searchList").append("<h3 class=\"text-white\">Нічого не знайдено!</h3>");
      }
      $('#searchModal').modal('show')
    });
  }
});
function AddToSearchList(v,searchText){
  var isContains = false;
  if($.isSubstring(v.title,searchText) || $.isSubstring(v.description,searchText) || $.isSubstring(v.text,searchText)){
    isContains = true;
  }
  if(isContains){
    $("#searchList").append("<div class=\"col-12 mb-3\"><div onClick=\"goToNews('"+v.title+"','"+v.img+"','"+v.description+"','"+v.text+"');\" class=\"news-block p-2\"><div class=\"rounded-3\" width=\"100%\" height=\"200\" style=\"background: url("+v.img+"); min-height: 200px; background-size: cover; background-repeat: no-repeat; background-position: center;\"></div><h4 class=\"text-white\">"+v.title+"</h4><p>"+v.description+"</p></div></div>");
  }
}