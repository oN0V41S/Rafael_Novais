import '@/styles/home.css';
import Aside from '../components/layout/navigation'
import Playlist from '../components/playlists';

export default function Home() {
    return (
        <>
            <Aside />
            <section className='about'>
                <h1 className='about-h1'>Rafael Novais</h1>
                <h2>Desenvolvedor Front-End</h2>
                <p className='about-p'>Meu nome é Rafael tenho 17 anos, sou apaixonado por programação desde os 14 anos, sou Desenvolvedor de Sistemas, atualmente tenho conhecimento em Front-End, com foco em ReactJS, mas estou estudando novas habilidades em Back-End para me Tornar um Desenvolvedor FullSatck.</p>
                <Playlist/>
            </section>
        </>
    )
}