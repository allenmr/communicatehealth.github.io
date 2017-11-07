jQuery( document ).ready(function( $ ) {
  "use strict";

  // Automate text boxes preceeded by checkboxes
  $("input[type=text][data-checkbox]").each(function(index,el){
    var txbox = $(this);
    var ckbox = $("#"+txbox.data("checkbox"));
    txbox.on("input",function(){
      ckbox.prop('checked', true);
    });
    ckbox.on("click",function(){
      if(ckbox.prop('checked')){
        txbox.focus();
      }
    });
  });

  // Form validation
  $("#ch_form").validate({
    rules: {
      confirm_email: {
        equalTo: "#email"
      },
      confirm_password: {
        equalTo: "#password"
      }
    }
  });

  // Autocomplete states (instead of really long dropdown select)
  $('#states').removeAttr('required').removeAttr('aria-required').parent().hide();

  $('#state').attr('required', '').attr('aria-required', 'true').parent().parent().show();

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

$( function() {
  $( "#dob" ).datepicker({
    changeMonth: true,
    changeYear: true,
    defaultDate: -7300
  });
} );

