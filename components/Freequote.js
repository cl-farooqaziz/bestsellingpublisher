import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'


import { useState } from "react";


const Freequote = (props) => {






  return (
   <>
   
   <div className={styles[props.formsaspire]}>
                 <h4 className="t-center font30 fw100 colortextgrey font-f">Get A Free Quote</h4>

                    <form className={styles.formalign}  >
                        <label className={styles.label}>Full Name*</label>
                        <input type="text" className={styles.formfree} required  name="first" placeholder="Your name..." />

                        <label className={styles.label}>Email Address*</label>
                        <input type="text" className={styles.formfree} required name="last" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Type Email Address" />

                        <label className={styles.label}>Phone *</label>
                        <input type="number" className={styles.formfree} required name="phone" placeholder="123-456-7890" /> 

                        <label className={styles.label}>Message *</label>
                        <textarea className={styles.formfree} required name="message"  rows="2" placeholder="Type Your Message Here"></textarea>
                        <button className={styles.freebtn} type="submit">Submit </button>
                    </form>

                    
                    { props.show ? 

                      <div className='mt-4'>
                        <Link className={styles.freediscuss} href="#">LET'S DISCUSS</Link>  
                        <Link className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</Link>
                      </div>


                    : '' }
                    


            </div>
   
   
   </>
  )
}

export default Freequote