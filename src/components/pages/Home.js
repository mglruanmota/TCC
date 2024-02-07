import  styles from './Home.module.css'
import  Imagem from '../../image-removebg-preview (1).png'


function Home() {
 return ( 
  <section className={styles.home_container}>
    <h1> Seja Bem-Vindo </h1>
    <h2> Techinic Connect </h2>
    <a> A Techinic Connect é uma inovadora plataforma de assistência técnica para </a>
    <a> eletrônicos, projetada para simplificar e agilizar a conexão entre técnicos</a>
    <a> especializados e cliente em busca de soluções para seus dispositivos. Com </a>
    <a> a Tecnic Connect, oferecemos uma experiência conveniente e confiável,</a>
    <a> garantindo que seus eletrônicos sejam reparados com experise e rapidez.</a>
    <span><img src={Imagem} alt="Iphone" /></span>
  </section>
 )
}
export default Home