//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}
Header.defaultProps = {
    title: 'task tracker',
}
Header.propType = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header
