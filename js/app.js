/*jshint devel:true */

$(document).ready(function(){
  

  var newEventBtn = $('.collapse-btn');
  var newEventBucket = $('.collapse-content');

  newEventBtn.click(function() {
    console.log('go');
    newEventBucket.toggleClass('hide-section');
  });


  function loadTable (){
    var rowContainer = $('.row-container ');
    var eventCount = 20;
    var itemCount = 20;
    var clusterCount = 20;

    for (var i = 0; i < eventCount; i++) {

      var randNum = Math.floor(Math.random() * 10);
      var eventFileName = "img/events/e-" + randNum + ".png";
      // make wrapper and container
      var eventWrapper = $('<div class="event-wrapper"></div>').appendTo(rowContainer);
      var eventContainer = $('<div class="event-container"></div>').appendTo(eventWrapper);
      var itemContainer = $('<div class="item-container"></div>').appendTo(eventWrapper);
      var clusterContainer = $('<div class="cluster-container"></div>').appendTo(eventWrapper);
      
      // add event header
      eventContainer.append('<img src="' + eventFileName + '">');

      // add item rows
      for (var j = 0; j < itemCount; j++) {
        var randNum2 = Math.floor(Math.random() * 10);
        var itemFileName = "img/items/i-" + randNum2 + ".png";
        itemContainer.append('<img src="' + itemFileName + '">');
      } // end item loop

      // add cluster rows
      for (var k = 0; k < clusterCount; k++) {
        var randNum3 = Math.floor(Math.random() * 10);
        var clusterFileName = "img/clusters/c-" + randNum3 + ".png";
        clusterContainer.append('<img src="' + clusterFileName + '">');
      } // end cluster loop


    } // end of loop
  } // end of function

  loadTable();

  $('.toggle-clusters').click(function() {
    $('.table-container').find('.cluster-container').toggleClass('hide-section');
    console.log('switch');
  });
});