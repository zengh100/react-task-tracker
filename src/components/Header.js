//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button color='red' text='Hello 2'/>
            <Button color='orange' text='Hello 3'/>
        </header>
    )
}
Header.defaultProps = {
    title: 'task tracker',
}
Header.propType = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color:'red', 
    backgroundColor:'black'
}

export default Header
