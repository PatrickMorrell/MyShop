var basket = [];
if (localStorage.getItem('basket')) {
	basket = localStorage.getItem('basket').split(',').map(Number);
}


function displayProducts() {
	$('#tblProducts').append('<tr><td>Product</td><td>Cost</td></tr>');
	products.forEach( function(pdt) {
		$('#tblProducts').append('<tr>')
		$('#tblProducts').append('<td>' + pdt.name + '</td>')
		$('#tblProducts').append('<td>&#163;' + pdt.price + '</td>')
		$('#tblProducts').append('<td><button id="btnAdd' + pdt.id + '" onclick="addToBasket(' + pdt.id + ')">Add Item</button></td>')
		$('#tblProducts').append('/<tr>')
	})
}

function addToBasket(id) {
	basket.push(id)
	localStorage.setItem('basket', basket)
	$('#tblProducts').empty()
	displayProducts();
}

displayProducts();


