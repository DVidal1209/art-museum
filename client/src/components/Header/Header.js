import React from 'react'
import Navigation from '../Navigation/Navigation';

export default function Header(props) {
  return (
    <> 
    <Navigation changePage={props.changePageFunction}></Navigation>
    </>
  )
}
