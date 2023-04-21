import React from 'react'
import styles from '@/styles/Formdata.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formdata = () => {
    return (
        <>
            <div className={styles.bookshelfForm}>
                <Form className='mx-auto p-5'>
                    <h3 className='font-30 fw-700 font-primary txt-secondary text-center mb-5'>
                        Get A <span className='txt-primary'>Free</span> Quote
                    </h3>
                    <Form.Group className="mb-4" controlId="name">
                        <Form.Label className='font-13 font-secondary'>Full Name *</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label className='font-13 font-secondary'>Email Address *</Form.Label>
                        <Form.Control type="email" placeholder="Type Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="phone">
                        <Form.Label className='font-13 font-secondary'>Phone *</Form.Label>
                        <Form.Control type="tel" placeholder="(123)-456-789" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="comments">
                        <Form.Label className='font-13 font-secondary'>Comments</Form.Label>
                        <Form.Control type="text" placeholder="Message" />
                    </Form.Group>

                    <Button className='btns quoteBtns mt-3' type="submit">Let's discuss</Button>
                </Form>
            </div>

        </>

    )
}

export default Formdata