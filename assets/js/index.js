Start();
function Start(){
  $.getJSON(window.location.origin+"/data/json/cs-go.json", function(data) {
    $.each(data, function(index, value) {
      AddNewsToList("#news-cs-go",value);
    });
  });
  $.getJSON(window.location.origin+"/data/json/dota-2.json", function(data) {
    $.each(data, function(index, value) {
      AddNewsToList("#news-dota-2",value);
    });
  });
  $.getJSON(window.location.origin+"/data/json/lol.json", function(data) {
    $.each(data, function(index, value) {
      AddNewsToList("#news-lol",value);
    });
  });
  $.getJSON(window.location.origin+"/data/json/valorant.json", function(data) {
    $.each(data, function(index, value) {
      AddNewsToList("#news-valorant",value);
    });
  });
}
function AddNewsToList(id,value){
  $(id).append("<div class=\"col-lg-4 mb-3\"><div onClick=\"goToNews('"+value.title+"','"+value.img+"','"+value.description+"','"+value.text+"');\" class=\"news-block p-2\"><div class=\"rounded-3\" width=\"100%\" height=\"200\" style=\"background: url("+value.img+"); min-height: 200px; background-size: cover; background-repeat: no-repeat; background-position: center;\"></div><h4 class=\"text-white\">"+value.title+"</h4><p>"+value.description+"</p></div></div>")
}