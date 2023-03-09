import React, { useRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FullScreenSection from '../screen/FullScreenSection'
import Centralized from '../screen/Centralized'
import PopUp from './PopUp'
import emailjs from "@emailjs/browser"
import { withTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'

function Contact({ t }) {
  const form = useRef()
  const [popUp, setPopUp] = useState({show: false, error: false})
  const { lang } = useLanguage()

  const messageSchema = Yup.object().shape({
    name: Yup.string().required(t("FormNameError")).min(3, t("FormNameError")),
    email: Yup.string().email(t("FormEmailError")).required(t("FormEmailErrorRequired")),
    message: Yup.string().required(t("FormMessageErrorRequired")) ,
  })

  const handleSubmit = (values, {resetForm}) => {    
    emailjs.sendForm("service_3ozlpxn", "template_wivq72j", form.current, "6v5qfMemGfHsTItju")
    .then((result) => {
      setPopUp({show: true, error: false});
      resetForm()
    }, (error) => {
      setPopUp({show: true, error: true});
    });

    setTimeout(() => {setPopUp({show: false, error: false})}, 4000)

  }

  return (
    <FullScreenSection className={`relative`} bg="bg-slate-400" id="contact">
      <Centralized className="max-w-9/10 w-[800px]">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}  
          validationSchema={messageSchema}
          onSubmit={handleSubmit}
        >
          <Form 
            className='flex flex-col bg-orange-100 p-5 rounded-lg mx-auto shadow-2xl'
            ref={form}
            >
            <div className="grid xs:grid-cols-[3fr_4fr] xs:gap-6 grid-cols-1">
              <div className="contact--group">
                <label className="contact--label" htmlFor='name'>
                  {t("FormNamePlaceholder")}
                </label>
                <Field 
                  type="text"
                  className="contact--field" 
                  id='name' 
                  name='name'
                  placeholder={t("FormNamePlaceholder")}
                />

                <ErrorMessage
                  component='a'
                  className="contact--message"
                  name='name'
                />
              </div>

              <div className="contact--group">
                <label className="contact--label" htmlFor='email'>
                  {t("FormEmailPlaceholder")}
                </label>
                <Field
                  type="email"
                  className="contact--field" 
                  id='email' 
                  name='email'
                  placeholder={t("FormEmailPlaceholder")} />
                <ErrorMessage 
                  component='a' 
                  className="contact--message"
                  name='email' />
              </div>
            </div>
            <div className="contact--group">
              <label className="contact--label" htmlFor='message'>
                {t("FormMessageField")}
              </label>
              <Field 
                as="textarea"
                className="contact--field h-[200px] resize-none" 
                id='message' 
                name='message'
                placeholder={t("FormMessagePlaceholder")}
                />
              <ErrorMessage 
                component='a' 
                className="contact--message"
                name='message' />
              </div>
            
              <button type='submit' className="text-white font-bold mt-8 mx-auto rounded-md p-4 bg-blue-600 w-[100px] text-center hover:bg-blue-700">
                {t("FormSend")}
              </button>
          </Form>
        </Formik>
        {
            popUp.show 
            ? (popUp.error 
              ? <PopUp type='error'/> 
              : <PopUp type='succuss'/>) 
            : null
        }
      </Centralized>
    </FullScreenSection>
  )
}

export default withTranslation()(Contact)