import './FormComponent.css'
import { Field, Formik, Form, } from "formik"
import { useState } from 'react'
import * as yup from 'yup'

// Valudation Schema
const validationSchema = yup.object({
    name: yup.string().required('Insert name'!).min(2, 'Too short').max(30, 'Too long'),
    email: yup.string().required('Insert an email address!').min(8, 'Too short').max(35, 'Too long'),
    message: yup.string().required('Insert a message!').min(10, 'Too short').max(400, 'Too long')
});


// Initial Values type
interface InitialValues extends yup.InferType<typeof validationSchema> {
    name: string,
    email: string,
    message: string,
}


// Form Component
export default function FormComponent() {
    const [isSubmiteed, setSubmit] = useState<boolean>(false);
    const initialValues: InitialValues = { name: '', email: '', message: '' }

    // Submit Function
    function handdleSubmit(values: InitialValues) {
        return console.log(values)

    }

    return (
        <div className='Form-Container'>
            <Formik
                initialValues={initialValues}
                onSubmit={handdleSubmit}
                validateOnBlur={false}
                validateOnChange={false}
                validateOnMount={false}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h2 className='Form-Title'>Contact me!</h2>

                        <div className='Field'>
                            <label htmlFor='name' className='label' style={{ color: touched.email && errors.email ? '#9f0000' : 'white' }}>{touched.name && errors.name ? errors.name : 'Name:'}</label>
                            <Field type='text' name="name" id='name' className='small-field' ></Field>
                        </div>

                        <div className='Field'>
                            <label htmlFor='email' className='label' style={{ color: touched.email && errors.email ? '#9f0000' : 'white' }}>{touched.email && errors.email ? errors.email : 'Email:'}</label>
                            <Field type='email' name="email" id='email' className='small-field' ></Field>
                        </div>

                        <div className='Field'>
                            <label htmlFor='message' className='label' style={{ color: touched.email && errors.email ? '#9f0000' : 'white' }}>{touched.message && errors.message ? errors.message : 'Message:'}</label>
                            <Field as='textarea' name="message" id='message' className="big-field" ></Field>
                        </div>

                        <div className='Submit-Container'>
                            <button type='submit' className='Submit-btn'>Submit</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div >
    )
}