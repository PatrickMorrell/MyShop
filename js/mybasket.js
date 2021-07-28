var basket = [];
if (localStorage.getItem('basket')) {
	basket = localStorage.getItem('basket').split(',').map(Number);
}
// console.log(basket)

function displayBasket() {
	var quantities = [];

	$('#tblBasket').append('<tr><td>Product</td><td>Cost</td><td>Quantity</td></tr>');
	basket.forEach(function(item){
		var product;
		product = quantities.find(q => q.id === item)
		if (product !== undefined) {
			product.amount ++
		}
		else {		
			quantities.push({
				id: item,
				amount: 1
			})
		}
	})
	var total = 0;
	quantities.forEach(function(item) {
		var pdt;
		//console.log(item.id);
		pdt = products.find(p => p.id == item.id);
		$('#tblBasket').append('<tr>')
		$('#tblBasket').append('<td>' + pdt.name + '</td>')
		$('#tblBasket').append('<td>&#163;' + pdt.price + '</td>')	
		$('#tblBasket').append('<td>' + item.amount + '</td>')
		$('#tblBasket').append('<td><button id="btnAdd' + pdt.id + '" onclick="removeFromBasket(' + pdt.id + ')">Remove Item</button></td>')
		$('#tblBasket').append('/<tr>')
		total += (pdt.price * item.amount)
	})

	$('#tblBasket').append('<tr>')
	$('#tblBasket').append('<td>Total</td>')
	$('#tblBasket').append('<td>&#163;' + total + '</td>')
	$('#tblBasket').append('</tr>')
}


function removeFromBasket(id) {
	if (basket.indexOf(id) > -1) {
		basket.splice(basket.indexOf(id),1);
		localStorage.setItem('basket', basket)
		$('#tblBasket').empty()
		checkBasket();
	}
}

function checkBasket() {
	if (localStorage.getItem('basket')) {
		displayBasket();
	}
	else {
		$('#tblBasket').append("<tr><td>Oh no, there's nothing in your basket</td></tr>");
	}
}

checkBasket();