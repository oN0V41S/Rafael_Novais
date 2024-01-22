import '@/styles/home.css';
import Aside from '@/components/layout/navigation'
import ItemPlaylist from '../components/ItemPlaylists';

export default function Home() {
    return (
        <main>
            <Aside />
            <section className='about'>
                <h1 className='about-h1'>Rafael Novais</h1>
                <h2>Desenvolvedor Front-End</h2>
                <p className='about-p'>Meu nome é Rafael tenho 17 anos, sou apaixonado por programação desde os 14 anos, sou Desenvolvedor de Sistemas, atualmente tenho conhecimento em Front-End, com foco em ReactJS, mas estou estudando novas habilidades em Back-End para me Tornar um Desenvolvedor FullSatck.</p>
            </section>
            <section className="playlist">
                    <ItemPlaylist
                        src=""
                        href="/skills"
                        name="Tecnologias e Ferramentas"
                        desc="Algumas das tecnologias e ferramentas que possuo conhecimento ou estou estudando."
                    />
                    <ItemPlaylist
                        src=""
                        href="/projects"
                        name="Projetos"
                        desc="Alguns dos Projetos que desenvolvi ou participei."
                    />
                </section>
        </main>
    )
}