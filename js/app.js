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
      // add btns

      eventContainer.append('<span type="vehicles" class="view-modal-btn vehicle-btn">View All</span>'); // vehicles
      //eventContainer.append('<span type="clusters" class="view-modal-btn clusters-btn">Show Clusters</span>');
      eventContainer.append('<i class="icon ion-android-add-circle toggle-items"></i>');
      eventContainer.append('<i class="icon ion-android-add-circle toggle-clusters"></i>');
      

      // // add item rows
      // for (var j = 0; j < itemCount; j++) {
      //   var randNum2 = Math.floor(Math.random() * 10);
      //   var itemFileName = "img/items/i-" + randNum2 + ".png";
      //   itemContainer.append('<img src="' + itemFileName + '">');
      // } // end item loop

      // // add cluster rows
      // for (var k = 0; k < clusterCount; k++) {
      //   var randNum3 = Math.floor(Math.random() * 10);
      //   var clusterFileName = "img/clusters/c-" + randNum3 + ".png";
      //   clusterContainer.append('<img src="' + clusterFileName + '">');
      // } // end cluster loop


    } // end of loop
  } // end of function

  loadTable();

  $('.toggle-clusters').click(function() {
    $('.table-container').find('.cluster-container').toggleClass('hide-section');
  });

  // scroll function
  $('.table-wrapper').on('scroll',function(event){
    var val =event.target.scrollLeft;
    $('img.table-header').css('left', (val * -1) + 'px');
    
  });

  // click modal btn
  $('.row-container').delegate('.view-modal-btn', 'click', function() {
    var type = $(this).attr('type');
    if (type === "vehicles"){
      window.alert("Opens modal that shows all " + type);
    }
  });

  // click to expand selection
  $('.row-container').delegate('.ion-android-add-circle', 'click', function() {
    $(this).toggleClass('showing-children');
  });

  
});