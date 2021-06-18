import React from 'react' //IMPORTACION
import '../utils/css/Footer.css'
import inge from '../utils/images/astronave.png'
import progra from '../utils/images/inteligencia-artificial.png'
import science from '../utils/images/atom.png'

//PARTE INFERIOR QUE SE TRASLADA CON LOS BOTONES
const Footer = () => {
	return (
		<div className="ContainerFooter">
			<div className="plan">
				 <h2 className="foot">Other activities in which I am involved</h2>
				 <h3 className="more">Academic training in others areas</h3>
				<div><img src={inge} className="cont1" alt="Inge"/><b>➤Practical course with bases in Aerospace Engineering in Rionegro, Antioquia year 2020</b></div>
				<div><img src={progra} className="cont1" alt="Progra"/><b>➤Certification of course in experimental physics at the University National of Colombia year 2020</b></div>
				<div><img src={science} className="cont1" alt="Science"/><b>➤Certification of course in theoretical physics at the University National of Colombia year 2020</b></div>
				<div className="bot"><a class="boton_personalizado" href="https://github.com/mishellconese">GitHub</a></div>
			</div>

		</div>
		
		)
}

export default Footer