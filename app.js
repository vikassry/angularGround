(function(){
	
	var app = angular.module('store',[]);

	app.controller('storeController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: 'ruby',
		price: 567890.5,
		desc: 'A red coloured beautiful and precious gem.',
		canBePurchased: true,
		isSoltOut: false
	},
	{
		name: 'diamond',
		price: 67871.5,
		desc: 'A toughest substance.',
		canBePurchased: false,
		isSoltOut: true
	},
	{
		name: 'pearl',
		price: 76789.5,
		desc: 'A white precious gem found in oceans.',
		canBePurchased: true,
	},
	{
		name: 'sapphire',
		price: 252890.5,
		desc: 'A hard gem.',
		canBePurchased: false,
	}];

})();
