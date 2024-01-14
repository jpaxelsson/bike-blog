import * as React from "react"
import { Link } from "gatsby"
import '../style/style.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Form from "../components/Form"

const ContactPage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Form />
      </main>
      <Footer/>
    </div>
  )
}

export default ContactPage

export const Head = () => <title>Bike Blog - Home</title>
