//import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
// Header.defaultProps = {
//     title: 'task1 tracker',
// }
Header.propType = {
    title: PropTypes.string.isRequired
}
export default Header
