import React from 'react'
import logo from '../endless-logo.png';

function Sidebar() {
    return (
        <div class="msb" id="msb">
		<nav class="navbar" role="navigation">
			<div class="navbar-header">
				<div class="">
					
					<div class="">
						<a class="" href="/"><img src={logo} alt="/"/></a>
					</div>

				</div>

			</div>
        <div class="side-menu-container">
				<ul class="nav navbar-nav">
                    
                    <li><a href="https://github.com/Mailtrain-org/mailtrain/wiki"><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span> </a></li>
                    <li><a href="https://mailtrain.wordpress.com/"><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span></a></li>
				</ul>
			</div>
		</nav>  
</div>
    )
}

export default Sidebar
