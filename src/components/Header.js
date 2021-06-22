//import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1 style={{color:'red'}}>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'task tracker',
}
Header.propType = {
    title: PropTypes.string.isRequired
}
export default Header
