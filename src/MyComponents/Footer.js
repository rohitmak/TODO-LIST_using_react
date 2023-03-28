import React from 'react'
// import './footer.css'

const Footer = () => {
  // not better to use ↓
  // let footerStyle = {
  //   position: "relative",
  //   top: "100vh",
  //   width: "100%",
  //   border: "2px solid red"
  // }
  return (
    <footer className="bg-dark text-light py-3">
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer