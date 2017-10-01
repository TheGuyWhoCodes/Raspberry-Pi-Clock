function refreshTime(){
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  if(hour > 12){
    hour = hour -12;
  }
  if(min.toString().length == 1){
    min = "0" + min;
  }
  $("#time").text(hour + ":" + min);
}
refreshTime();
$(function(){
  setInterval(refreshTime, 15000);
});
