$(function() {
    $('input').click(function(){

        var total = 0;
        $('input:checked').each(function(index, item) {
            total += parseFloat(item.value);
        });
        $('.total').text(total);
     
    });
});
//pokaż miejsca 
var names = $(':checkbox:checked').map(function(){ return this.name; });
if (names.length) {
    console.log(names.get().join(','));
}
$(function(){
  var $allTickets = $('.ticket');
  var $selectedTicketsListing = $('#selectedTickets');
  var $selectedTicketsLabel = $('#selectedTicketsLabel');
    //klik w checkbox
  $allTickets.on('click', function(){
  $selectedTicketsListing.html(
      //zwracać tylko znaznaczone miejsca
   $allTickets.filter(':checked').map(function(index, checkbox){
        //zwracać tak, żeby ładnie wyglądało
        return '<div>'+ checkbox.name +'</div>';
      }).get().join('') 
    );
    
    //ukryj komunikat kiedy nie ma wybranego miejsca
    if ($selectedTicketsListing.text().trim().length) {
      $selectedTicketsLabel.show();
    } else {
      $selectedTicketsLabel.hide();
    }
  });
});