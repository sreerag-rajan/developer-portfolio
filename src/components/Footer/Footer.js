import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { DesignBase } from '../../data/designData'

function Footer() {

    // const shortname = (name) => {
    //     if(name.length > 10) {
    //         return name.split(" ")[0]
    //     } else {
    //         return name
    //     }
    // }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Design base by <a href="https://reactjsexample.com/">{DesignBase.name}</a>
            </p>
        </div>
    )
}

export default Footer

