import './ItemProject.css'
import img1 from '../../static/nav/icons8-github-384.png'

function ItemProject(props){
    return(
        <div className='project'>
            <div className='img-project'>
                <img alt='' src={img1}/>
            </div>
            <div className='desc-project'>
                <h1>{props.tittle}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default ItemProject;