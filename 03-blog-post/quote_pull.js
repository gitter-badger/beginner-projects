// version 0.2, with help from StackExchange
var right = pullQuote("right"),
    left = pullQuote("left");

function pullQuote(direction) {
  var qo = $('article').find("span." + direction).each(function() {
    var $this = $(this);

    $("<blockquote></blockquote>", {
      class: direction,
      text: $this.text()
    }).prependTo( $this.closest("p") );
  });
}
