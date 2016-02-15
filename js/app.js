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
    var eventCount = 60;
    var itemCount = 15;
    var clusterCount = 12;

    for (var i = 0; i < eventCount; i++) {

      var randNum = Math.floor(Math.random() * 10);
      var eventFileName = "img/events/e-" + randNum + ".png";
      // make wrapper and container
      var eventWrapper = $('<div class="event-wrapper"></div>').appendTo(rowContainer);
      var eventContainer = $('<div class="event-container"></div>').appendTo(eventWrapper);
      var itemContainer = $('<div class="item-container hide-section"></div>').appendTo(eventWrapper);
      var clusterContainer = $('<div class="cluster-container hide-section"></div>').appendTo(eventWrapper);
      
      // add event header
      eventContainer.append('<img src="' + eventFileName + '">');
      // add btns

      eventContainer.append('<span type="vehicles" class="view-modal-btn vehicle-btn">View All</span>'); // vehicles
      //eventContainer.append('<span type="clusters" class="view-modal-btn clusters-btn">Show Clusters</span>');
      eventContainer.append('<i class="icon ion-android-add-circle toggle-items"></i>');
      eventContainer.append('<i class="icon ion-android-add-circle toggle-clusters"></i>');
      eventContainer.append('<input type="checkbox" class="toggle-ready">');
      

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
  $('.row-container').delegate('.ion-android-add-circle.toggle-clusters', 'click', function() {

    
    var parentContainer = $(this).parents('.event-wrapper');
    var itemWrapper = parentContainer.find('.item-container');
    var clusterWrapper = parentContainer.find('.cluster-container');
    var otherIcon = parentContainer.find('.ion-android-add-circle.toggle-items');

    if ( $(this).hasClass('showing-children') ){

      clusterWrapper.addClass('hide-section');
      $(this).removeClass('showing-children');

    } else {
      clusterWrapper.removeClass('hide-section');
      $(this).addClass('showing-children');
      parentContainer.addClass('clusters-open')
      if( parentContainer.hasClass('items-open') ){
        itemWrapper.addClass('hide-section');
        otherIcon.removeClass('showing-children');
      }
    }

    
  });


    // click to expand selection
  $('.row-container').delegate('.ion-android-add-circle.toggle-items', 'click', function() {
    
    var parentContainer = $(this).parents('.event-wrapper');
    var itemWrapper = parentContainer.find('.item-container');
    var clusterWrapper = parentContainer.find('.cluster-container');
    var otherIcon = parentContainer.find('.ion-android-add-circle.toggle-clusters');

    // add classes
    if ( $(this).hasClass('showing-children') ){
      itemWrapper.addClass('hide-section');
      $(this).removeClass('showing-children');
      console.log('log');
    } else {
      console.log('asd');
      itemWrapper.removeClass('hide-section');
      $(this).addClass('showing-children');
      parentContainer.addClass('items-open')
      if( parentContainer.hasClass('clusters-open') ){
        clusterWrapper.addClass('hide-section');
        otherIcon.removeClass('showing-children');
      }
    }
    
    
  });

  // click on input toggle

  $('.row-container').delegate('.toggle-ready', 'click', function() {
    var val = $(this).prop( "checked");
    var others = $(this).parents('.row-container').find('.toggle-ready');
    others.each(function() {
      var status = $(this).prop( "checked");
      console.log(status)
      if( status === true){
        nextBtn.addClass('active-btn');
      } else {
        nextBtn.removeClass('active-btn');
      }
    });

    //console.log(others);

  });
  
});