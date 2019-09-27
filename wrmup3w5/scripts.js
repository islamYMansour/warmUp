$('.add').click(function() {
	addNumber()
})

function addNumber() {
	var input = $('#no_box').val()
		var textColor = "red"
		if(!isNaN(input)){
		if(input > 100) {
			textColor = "blue" 
		}
		$('#list').append($('<li>').append($('<div>').text(input)).css('color',textColor))
	}
}