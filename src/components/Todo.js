//IMPORTACION
import React from 'react'
import '../utils/css/Todo.css'
import plus from '../utils/images/plus_icon-icons.com_69476.png'
import home from '../utils/images/homebutton_99695.png'

//DESCARGA E IMPORTACION DE REACT-ROUTER
import {Link} from "react-router-dom"

//BOTONES DE TRANSICION
function Todo() {
	return (
		<div className="Container_Todo">
			<h1 id="PrincipalTodo">My presentation portfolio</h1>
			<Link to="/contact">
				<button type="button"><img src={plus} className="cont5" alt="Libro"/><div className="boton"><b>More about me</b></div></button>
			</Link>
			<Link to="/">
				<button type="button"><img src={home} className="cont5" alt="Libro"/><div className="boton"><b>Go to Home</b></div></button>
			</Link>
		</div>
	)
}

export default Todo