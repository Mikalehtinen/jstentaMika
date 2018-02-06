(function($) {

	// hämtar ett entry element för post-titlen.
	const $ENTRYTITLE = $('.entry-title');

	//Skapar två knappar, en för edit och en för save

    $ENTRYTITLE.after( '<button class="edit-button edit-title">ÄNDRA TITEL</button><button class="edit-title save" style="display: none">SPARA</button>' );

	//skapar en ajax funktion som tar den nya titlen.
	// URL:en som vi ska skicka "ändringen" till + strängen "wp/v2/posts" + current ID. Detta ger fullständig REST API väg.
	// vi kan genom denna URL:en genomföra aktioner som tex post, delete, osv osv.
	// vi skickar med nuonce (via XHR metoden). vi gör detta för att skickar vi inte med nuonce så känner inte wordpress->
	//till vem det är som försöker genomföra ändringen, så utan detta kommer vi få ett 401 error som säger att vi inte har rätt rättighet
	// för att modifiera posten.
	//sätter sedan datans titel till en ny titel genom 'title': NewTitle.
	function runAjax(newTitle)
	{
		$.ajax(
			{
			url: WPsettings.root + 'wp/v2/posts/' + WPsettings.current_ID,
			method: 'POST',
			beforeSend: function(xhr)
			{
				xhr.setRequestHeader( 'X-WP-Nonce', WPsettings.nonce);
			},
			data: {
				'title': newTitle
			}
		})
	}

	//targetar knappen on-click. sätter den ursprungliga titlen och togglar den (sätter display to none).
	//sedan sedan en ny input till entrytitle med ett textfält som ersätter entrytitle när vi klickar på knappen
	//skapar ett nytt textfält och sätter dit originaltitle texten.
	//gömmer edit title buttin (this toggle)
	//gömmer save knappen.
	$('.edit-title.edit-button').click(function()
	{
		let $originalTitle = $ENTRYTITLE.text();
		$ENTRYTITLE.toggle();
		$ENTRYTITLE.after('<input id="title-input" type="text">');
		document.querySelector('#title-input').value = $originalTitle;
		$(this).toggle();
		$('.edit-title.save').toggle();
	});


	//Detta är i princip samma sak som föregående kod-stycke fast det är properties för save knappen.
	$('.save').click(function()
	{
		let newTitle = document.querySelector('#title-input').value;
		$ENTRYTITLE.text(newTitle);
		$ENTRYTITLE.toggle();
		$('#title-input').toggle();
		$('.edit-title.edit-button').toggle();
		$(this).toggle();
		//kör ajaxfunktionen
		runAjax(newTitle);
	});

})(jQuery);
