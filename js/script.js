// The 'Click Counter' created using jQuery

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {
	// Attach a function to the click event. On click, increment the current cow's counter
	$('#cow-img').click(function() {
		$('#counter').html(+$('#counter').html()+1);
    });

	// 'Reset' button function
	$('#btn').click(function() {
		// html() - sets / returns the content of selected element '#counter'	
    	$('#counter').html('0');
    });
});
