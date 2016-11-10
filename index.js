

var state= {
	items: []
};

var addItem = function(state, item){
	state.items.push(item);
	console.log('add '+ item+ ' called');
	$('#shopping-list-entry').val('');
}


var renderItem = function(state, element){
	var itemsHTML = state.items.map(function(item){
		$("ul").append($.parseHTML( '<li><span class="shopping-item shopping-item__checked">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
			) );
	});
	console.log('render ' +element +' called');
	//element.html(itemsHTML);
}



function deleteItem(event){
	$(event.currentTarget).closest('li').remove();
	console.log('deleteItem called on the '+ $(event.currentTarget) );
}



////not working properly
function toggleCheck(event){
	$(event.currentTarget).parent().siblings('span').toggleClass('shopping-item__checked');
}





//event listener for check item:
$('.shopping-item-toggle').on('click', function(event){
	console.log('toggle event listener called');
	toggleCheck(event);
});


$('.shopping-item-delete').on('click', function(event){
	console.log('delete event listener called');
	deleteItem(event);
})



///event listener for form submittal:
$('form, js-shopping-list-form').submit(function(event){
	event.preventDefault();
	addItem(state, $("#shopping-list-entry").val());
	renderItem(state, $('.shopping-list'));
});