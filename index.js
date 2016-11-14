

///these are changes in order to best udnerstand git


var state= {
	items : ['apples', 'oranges', 'milk', 'bread']
};

var addItem = function(state, item){
	state.items.push(item);
	console.log('add '+ item+ ' called');
	$('#shopping-list-entry').val('');
}


var renderItem = function(state, element){
	var itemsHTML = state.items.map(function(item){
		//var index = state.items.length-1;
		///var item = state.items[index];
		///item = state.items.indexOf(state.items.length-1);
		//$("ul").append('<li><span class="shopping-item shopping-item__checked">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
		//	) ;
		return '<li><span class="shopping-item shopping-item__checked">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
	});
	//console.log('render ' +item +' called');
	element.html(itemsHTML);
}



function deleteItem(event){
	var currentItem = $(event.currentTarget).closest('li');
	currentItem.remove();
	console.log('deleteItem called on the '+ $(event.currentTarget));
	state.items.splice(state.items.indexOf(currentItem.text()), 1);
}



////not working properly
function toggleCheck(event){
	$(event.currentTarget).parent().siblings('span').toggleClass('shopping-item__checked');
}





//event listener for check item:

$(document).ready(function(){


		$(document).on('click', '.shopping-item-toggle', function(event){
			//$('.shopping-item-toggle').on('click', function(event){
				console.log('toggle event listener called');
				toggleCheck(event);
		});

		$(document).on('click', '.shopping-item-delete', function(event){
		//$('.shopping-item-delete').on('click', function(event){
			console.log('delete event listener called');
			deleteItem(event);
		});



		///event listener for form submittal:
		$('form, js-shopping-list-form').submit(function(event){
			event.preventDefault();
			addItem(state, $("#shopping-list-entry").val());
			renderItem(state, $('.shopping-list'));
		});
});






