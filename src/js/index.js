// Javascript Entry Point

import $ from 'jquery';

var url = 'https://api.github.com/users/jisaacks/orgs?access_token=0f62fa85dcadf163e998010823e1dba5e9dff3eb'

$.ajax(url).then(function(data){
	
	// grabbing the <ul> from the page
	var $ul = $('ul');

	// iterating each login for each data item
	data.forEach(function({login, avatar_url}){
		// creating a new <li> for the login
		// and adding/appending that <li> to the <ul>
		$ul.append(`
			<li>
				<img src="${avatar_url}">
				<span class="text">${login}</span>
			</li>

			`);
	});
});
