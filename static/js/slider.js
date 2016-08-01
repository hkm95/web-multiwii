  $(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#Throttle" ).val( ui.value );
      }
    });
    $( "#Throttle" ).val( $( "#slider-vertical" ).slider( "value" ) );
  });

