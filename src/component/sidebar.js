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
					<li><a href=''> Leads</a></li>                    
                    </ul>
			</div>
		</nav>  
</div>
    )
}

export default Sidebar
