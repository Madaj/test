//Ampliacion del espacio de la lupa
var url = document.location.href;
url = url.split("/");
if (url[url.length - 2] == "shoppingbag") {
    var cabeza = document.getElementsByTagName("head")[0];
    var styleS = document.createElement("link");
    styleS.rel = "stylesheet";
    styleS.type = "text/css";
    styleS.href = "https://ww9.ikea.com/es/es/css/stilosCheck.css";
    cabeza.appendChild(styleS);
	function testea(){
		//Cambio de posicion del btn
		$('.show-products-item > .five >.product-image > .Product_Compact__quickpip').each(function (i) {
			$(this).prependTo($('.show-products-needed-inner > .item-wrapper >.row').eq(i));
		})
		//Add nueva clase

		$('.item-wrapper >.row >.Product_Compact__quickpip').addClass("metrik");
		$('.metrik').on('click', function () {
			//Info del atributo 
			var refProduct = $(this).attr("data-panel-href");
			//Medicion
			utag.link({ visit_country: "es", visit_language: "es", site_platform: "nw", event_category: "ecommerce", event_action: "zoom_in_cart", event_label: refProduct });
			console.log("Lanzado a " + refProduct);
		});
	}	
	testea();

	function review_class(){
		console.log("Chequeo cada 1000");
		if(!$('.metrik').length){
			testea();
			console.log("No existe y lo creo");
		};
	}
	
	setInterval(review_class, 1000);
}



//San Valentin
var cajaMod = document.querySelectorAll("#a-1364673558316 >.ContentBlock__items >.ContentBlock__block")[2];
$(cajaMod).removeClass('ContentBlock__block--25').addClass('ContentBlock__block--50');





//Boton añadir + de 1 producto

var addMultipleItemsToShopping = function (itemList) {

    var count = 0;

    var itemString = '';

    for (var k in itemList) {

        count += itemList[k].qty;

 

        itemString += '<so:SalesOrderItem><so:ItemNo>' + itemList[k].ref + '</so:ItemNo>';

        itemString += '<so:ItemType>' + itemList[k].type + '</so:ItemType>';

        itemString += '<so:SalesOrderQty>' + itemList[k].qty + '</so:SalesOrderQty>';

        itemString += '<so:SalesOrderQtyType>PIECES</so:SalesOrderQtyType></so:SalesOrderItem>';

    }

 

    var payload = '<?xml version="1.0" encoding="UTF-8"?><os:SalesOrderItemList xmlns:os="ikea.com/iows/SalesOrderService/2.0/" xmlns:p="ikea.com/cem/SalesOrder/2.0/" xmlns:so="ikea.com/iows/SalesOrder/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="ikea.com/iows/SalesOrderService/2.0/ ikea.com.iows.SalesOrderService.2.4.xsd ">' + itemString + '</os:SalesOrderItemList>';

 

    $.ajax({

        url: 'https://secure.iows.ikea.com/es/es/retail/iows/customer/irw/sessioncontext',

        method: 'GET',

        cache: true,

        xhrFields: { withCredentials: true },

        crossDomain: true,

        headers: {

            'Consumer': 'VISTA',

            'Contract': '38406',

            'Accept': 'application/vnd.ikea.iows+json; version=1.1'

        }

    }).done(function (data) {

        $.ajax({

            url: 'https://secure.iows.ikea.com/es/es/retail/iows/customer/irw/' + data.SessionContext.UserId.$ + '/orders/@cart/items',

            method: 'POST',

            xhrFields: { withCredentials: true },

            crossDomain: true,

            headers: {

                'Consumer': 'VISTA',

                'Contract': '38406',

                'Accept': 'application/vnd.ikea.iows+json; version=2.0',

                'Content-Type': 'application/vnd.ikea.iows+xml;version=2.0'

            },

            data: payload

        }).done(function (data, status, request) {

            var counter = parseInt($('.IKEA-Component-Cookie-ShoppingBag-counter').text()) + count;

            IKEA.Component.Cookie.ShoppingBag.set(counter);

 

            var notification = $('<div class="IKEA-Component-Notification-Notification"></div>');

            notification.append(

                '<div class="IKEA-PageModule-ShoppingBag-AddItem" aria-live="assertive">' +

                '<div class="inner-wrap IKEA-Component-Notification-Notification-hide">' +

                '<h2 class="fs3">Art\u00EDculos a\u00F1adidos a tu carrito de la compra</h2>' +

                '</div>' +

                '<div class="inner-wrap  text-center">' +

                '<a href="https://secure.ikea.com/es/es/order/shoppingbag/" id="view-shoppingbag-button" class="btn btn-color-form-secondary btn-block margin-top-1 margin-bottom-2">Ver carrito de la compra</a>' +

                '</div>' +

                '</div>'

            );

            $('body').append(notification);

 

            notification.animate({ right: '1em', opacity: 1 }).delay(3000).animate({ right: '-36em' });

        })

    })

};

 

 

// SAN VALENTIN

try {

    var bus = document.location.href.split("/");

    if (bus[6] == "regalos-san-valentin") {

        //SET 1

        var prue = document.getElementById('a-1364673528709');

        var ban = document.createElement("div");

        prue.insertBefore(ban, prue.childNodes[4]);

        ban.id = 'sanValentin_1';

 

        var inputButton = document.createElement("button");

        inputButton.type = "submit";

        inputButton.value = "A\u00F1adir al carrito";

        inputButton.className = "btn btn-color-add-to-bag btn-icon IKEA-Component-Form-Submit-Submit-button";

        inputButton.innerHTML = "<span class='Product_Compact__cta-btn-text Product_Compact__cta-shopping-bag'>Ll\u00E9vate este pack con descuento</span>";

        inputButton.onclick = function () {

            var items = [

                { 'ref': '50373610', 'type': 'ART', 'qty': 1 },

                { 'ref': '00402238', 'type': 'ART', 'qty': 1 },

                { 'ref': '00303399', 'type': 'ART', 'qty': 1 }

            ];

            addMultipleItemsToShopping(items);

        }

        ban.appendChild(inputButton);

    }

} catch (err) { }

 



