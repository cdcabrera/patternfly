$(document).ready(function() {
// matchHeight the contents of each .card-pf and then the .card-pf itself
  var parentElement = $('#horizontalnav');

  var elemOne = parentElement.find(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title"),
      elemTwo = parentElement.find(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body"),
      elemThr = parentElement.find(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer"),
      elemFou  = parentElement.find(".row-cards-pf > [class*='col'] > .card-pf");

  eval('console.log(elemOne, elemTwo, elemThr, elemFou)');

  elemOne.matchHeight();
  elemTwo.matchHeight();
  elemThr.matchHeight();
  elemFou.matchHeight();

// initialize tooltips
  parentElement.find('[data-toggle="tooltip"]').tooltip();

// Initialize the vertical navigation
  $().setupVerticalNavigation(true);
});


/*<script>
$(document).ready(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();

  // initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
</script>*/
