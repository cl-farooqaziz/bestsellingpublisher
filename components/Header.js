import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { FaPhoneAlt, FaAngleDown } from 'react-icons/fa';

//image
import logo from '../public/images/logo.png';


const Header = () => {

    const [click, setclick] = useState(false);

    function toggle() {
        setclick((prevState) => !prevState);
    }

    return (
        <>
            <header className={styles.header}>
                <Navbar expand="lg">
                    <Container fluid className='px-md-5'>
                        <Link href="/">
                            <Image className={styles.logo}
                                src={logo}
                                alt='Best_Publisher' />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>
                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={`${styles.menuLinks} active`} href="/">Home</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/about">About</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="pricing">Pricing</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/contact">Contact</Link>
                                </li>
                                <li className='btns1 bg-prime'>
                                    <Link className={`${styles.headerIcon} color-white`} href="tel:(302) 883-8877">
                                        <FaPhoneAlt className={styles.valueNum} size={14} />
                                        (800) 781-9093 </Link>
                                </li>
                                <li className='btns1 bg-prime'> <Link className={`${styles.headerIcon} color-white`} href="#">
                                     Get A Quote </Link>
                                </li>
                                <li className={styles.lastlink}> <Link className={`${styles.headerIcon} color-white`} href="#">
                                    <span>initial consultation</span>
                                    <span>  Contact: <strong>Jessica</strong> </span>
                                </Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header