import React from 'react' //siempre debe importar aquí
import '../utils/css/Cuerpo.css'
//importacion de imagenes
import Mishell from '../utils/images/Mishell.png'
import telefono from '../utils/images/celular.png'
import email from '../utils/images/email.png'
import ubica from '../utils/images/ubicacion.png'

//CONTENEDOR IZQUIERDO
//sobre mi
//cantacto
//habilidades blandas

//CONTENEDOR DERECHO
//mi perfil 
//educación
//idiomas
//habilidades, barra de habilidades
const Cuerpo = () => {
	return (
		<div className="ContainerPrincipal">
			<div className="ConteAll">
				<div className="Parteiz">
					<div className="ConteImg">
						<img src={Mishell} alt="es mishell"/></div>
						<div className="Iztext"> 
							<h2>About me</h2> 
								<div className="cont2"><h4>Like an organized and highly motivated person, I am able to adapt to any circumstance and always give my best in any project, while I strive to work as a team player and promote values such as teamwork and fellowship, which I bring from my knowledge.</h4></div>
				
								<div className="cont2"><h4>My main goal is to develop professionally and evolve in my sector, so I look for opportunities that allow me to do so, while I will try to fully align myself with the objectives of the company.</h4></div>
						
							<h2>Contact</h2>
								<p><img src={telefono} className="cont" alt="Telefono"/><b>3194646329</b></p>
								<p><img src={email} className="cont" alt="Email"/><b>mishelluribe0987@gmail.com</b></p>
								<p><img src={ubica} className="cont" alt="Ubicacion"/><b>Bogotá, Colombia</b></p>
						

							<h2>Personal abilities</h2>
							<div className="cont2"><h4>➤Teamwork<br/><br/>➤Proactive<br/><br/>➤Autonomy in tasks<br/><br/>➤Flexibility<br/><br/>➤Adaptability </h4></div>
						</div>
				</div>
				
				<div className="Parteder">
					<div className="Text">
					<h1>MISHELL NIKOL URIBE GUERRERO</h1>
						<h3>Junior Front End Developer</h3>
					<div className="textder">
					
						<h2>Profile</h2>
						<div className="cont2">I currently have a background in software development, coding and decoding through informal education, I am studying a technical course with emphasis in front end developer and in languages such as English, in addition to basic A2 knowledge in French. </div>
						<h2>Academic Training</h2>
					
						<div className="cont2">➤I finished high school in 2019 at the Liceo Femenino Merecedes Nariño school, with emphasis in French and English languages, with participation in Astronomy and technology workshops. <br/><br/> ➤In 2020 I started studying English at the smart language academy.<br/>I certify in the English language<br/>Non-certified French<br/><br/>➤Diploma in 2020 to 2021 in software programming and coding using e-learning: C+, Python, Scratch, Arduino among other skills.<br/><br/>➤Currently studying a Web Development Technician, in frond end.</div>
						<h2>Languages learning</h2>
						<div className="cont2">➤I certify in the English language: Written B2: |Spoken B1<br/>➤Non-certified French: Spoken A1| Written A1</div>
					
						<h2>Skills</h2>
						<div className="cont3">
							<ul id="skill">
								<li><span class="bar graphic-design"></span><h4>Grephic-desing</h4></li>
								<li><span class="bar html-css"></span><h4>Html5 // Css3</h4></li>
								<li><span class="bar jquery"></span><h4>JS // JSX</h4></li>
								<li><span class="bar wordpress"></span><h4>Logic</h4></li>
							</ul>
							<h3>Software</h3>
							<ul id="skill">
								<li><span class="bar graphic-design"></span><h4>Algorithm</h4></li>
								<li><span class="bar html-css"></span><h4>Arduino</h4></li>
								<li><span class="bar jquery"></span><h4>Python</h4></li>
								<li><span class="bar wordpress"></span><h4>C++</h4></li>
							</ul>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Cuerpo