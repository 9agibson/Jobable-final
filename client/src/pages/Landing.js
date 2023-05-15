
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import React from 'react'


const Landing = () => {
    const {user} = useAppContext()
  return (
    <React.Fragment>
        {user && <Navigate to='/' />}
    <Wrapper>
        <Logo/>
        <div className='container page'>
            <div className='info'>
                <h1>Job <span>Tracking</span> App</h1>
                <p>
                    I'm baby offal locavore ennui roof party cornhole pitchfork. 
                    Sustainable adaptogen tonx meggings knausgaard everyday carry. 
                    Man bun drinking vinegar gentrify leggings four loko whatever 
                    praxis lo-fi venmo woke hell of meggings neutral milk hotel 
                    synth neutra. 8-bit normcore helvetica venmo vice direct trade, 
                    air plant af big mood.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
    </React.Fragment>
  )
}




export default Landing