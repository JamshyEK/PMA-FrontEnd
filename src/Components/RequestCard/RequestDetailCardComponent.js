import React from 'react'
import './RequestDetailCard.css'
import { baseUrl } from "../../shared/baseUrl";
function RequestDetailCard(props) {
    return (
        <div>

<div className="recipe-card">

	<aside>


		<img src={baseUrl+props.request.image} alt="Chai Oatmeal" />

	</aside>

	<article>

		<h2>{props.request.requestType.toUpperCase()}</h2>
		<h3 ><i className="fa fa-archive fa-1x" aria-hidden="true"></i> {props.request.quantity}<span> kg</span></h3>

		<ul>
        <li ><span className="icon fa fa-calendar"></span><span> Requested: {props.request.requestedDate}</span> </li>
		
			{/*<li><span class="icon icon-level"></span><span>Beginner level</span></li>
			<li><span class="icon icon-calories"></span><span>248</span></li> */}
		</ul>

		
	</article>

</div>
        </div>
    )
}

export default RequestDetailCard
