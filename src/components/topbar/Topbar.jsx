import React from 'react'
import "./topbar.scss"
import EmailIcon from '@material-ui/icons/Email';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left"> <a href="#intro" className='logo'> logo.</a></div>
                <div className="right">
                    <div>
                        <EmailIcon /> <span><a href="manishmanny1212@gmail.com">manishmanny1212@gmail.com</a> </span>


                    </div>

                </div>
            </div>
        </div>
    )
}
