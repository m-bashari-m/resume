import React, { useRef } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FullScreenSection from '../screen/FullScreenSection'
import Centralized from '../screen/Centralized'
import emailjs from "@emailjs/browser"

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.').min(3, 'At least 3 characters needed.'),
  email: Yup.string().email("Email is not valid").required('Please enter an email.'),
  message: Yup.string().required("Message is a required field") ,
})


function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("send")
    emailjs.sendForm("service_tbimuto", "template_s4atuzr", e.target, "CwtULAhTg4l8H-HVC")
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <FullScreenSection className="relative" bg="bg-slate-400">
      <Centralized className="max-w-9/10 w-[800px]">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}  
          validationSchema={loginSchema}
        >
          <Form 
            className='flex flex-col bg-white p-5 rounded-lg mx-auto shadow-2xl'
            onSubmit={handleSubmit}>
            <div className="grid xs:grid-cols-[3fr_4fr] xs:gap-6 grid-cols-1">
              <div className="contact--group">
                <label className="contact--label" htmlFor='name'>
                  Name
                </label>
                <Field 
                  type="text"
                  className="contact--field" 
                  id='name' 
                  name='name'
                  placeholder="Name"
                />

                <ErrorMessage
                  component='a'
                  className="contact--message"
                  name='name'
                />
              </div>

              <div className="contact--group">
                <label className="contact--label" htmlFor='email'>
                  Email
                </label>
                <Field
                  type="email"
                  className="contact--field" 
                  id='email' 
                  name='email'
                  placeholder="Email" />
                <ErrorMessage 
                  component='a' 
                  className="contact--message"
                  name='email' />
              </div>
            </div>
            <div className="contact--group">
              <label className="contact--label" htmlFor='message'>
                Message
              </label>
              <Field 
                as="textarea"
                className="contact--field h-[200px] resize-none" 
                id='message' 
                name='message'
                placeholder="Type your message here..."
                />
              <ErrorMessage 
                component='a' 
                className="contact--message"
                name='message' />
              </div>
            
            <div className='mt-8 mx-auto rounded-md p-4 bg-blue-600 w-[100px] text-center hover:bg-blue-700'>
              <button type='submit' className="text-white font-bold">
                Send
              </button>
            </div>

          </Form>
        </Formik>
      </Centralized>
    </FullScreenSection>
  )
}

export default Contact