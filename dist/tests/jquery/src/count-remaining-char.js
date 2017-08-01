// Initialize Count Remaining Characters
(function($) {
  var parentElement = $('#count');
  // countFld is the id of the field where you want the 'remaining chars. count' number
  // to be displayed.
  parentElement.find('.messageArea').countRemainingChars( {
    countFld: 'charRemainingCntFld',
    charsMaxLimit: 100,
    charsWarnRemaining: 5,
    blockInputAtMaxLimit: false} );


  eval('console.log(parentElement.find(".messageArea"))');

  // taId is the id of the textArea field which triggered the event
  parentElement.find('.messageArea').on("overCharsMaxLimitEvent", function( event, taId ) {
    $('#postBtn').prop("disabled",true);
  });
  parentElement.find('.messageArea').on("underCharsMaxLimitEvent", function( event, taId) {
    $('#postBtn').prop("disabled",false);
  });
})(jQuery);
