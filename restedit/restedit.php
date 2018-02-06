<?php
/*
Plugin Name: Mikas front-end plugin
Description: Extendar cookie auth till rest-API:Et så man kan edita front-end. Denna plugin är ämnad för hemtentan i Javascript för WCM17.
Version:     0.1
Author:      Mika "e-type" Lehtinen
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: restedit
*/

function restedit_scripts()
{
	//Kollar att vi inte är admins samt att vi är inne på en enskild post.
	if( !is_admin() && is_single())
	{
		// kollar om user är inloggad samt om användaren kan edita andras poster.
		//uppfylles kraven så kallas restedit.ajax.js in.
		if ( is_user_logged_in() && current_user_can( 'edit_others_posts'))
		{
			wp_enqueue_script('restedit_script', plugin_dir_url(__FILE__) . 'js/restedit.ajax.js', array('jquery'), '0.1', true );
			wp_localize_script('restedit_script', 'WPsettings',
			//en array av värden vi vill skicka till Javascripten.
			//hämtar root (rest URL), Nonce värde och current ID.
				array(
				'root' => esc_url_raw( rest_url() ),
				'nonce' => wp_create_nonce( 'wp_rest' ),
				'current_ID' => get_the_ID()
				)
			);
		}
	}
}
add_action( 'wp_enqueue_scripts', 'restedit_scripts');
