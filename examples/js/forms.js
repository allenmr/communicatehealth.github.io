jQuery( document ).ready(function( $ ) {
  "use strict";

  // Auto formats phone number (instead of using a mask)
  $('#phone').formatter({
    'pattern': '({{999}}) {{999}}-{{9999}}',
    'persistent': true //show pattern always "(###) ###-####"
  });

  $('#states').parent().hide();

  $('#state').parent().parent().show();

  // https://jqueryui.com/autocomplete/
  $( function() {
    var availableStates = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    $( "#state" ).autocomplete({
      source: availableStates
    });
  } );

});
