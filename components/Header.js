import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { FaPhoneAlt, FaAngleDown } from 'react-icons/fa';
import logo from '../public/images/logo.png';


const Header = () => {

    const [click, setclick] = useState(false);

    function toggle() {
        setclick((prevState) => !prevState);
    }

    return (
        <>
            <div className={styles.header}>
                <Navbar expand="lg">
                    <Container fluid className='px-5'>
                        <Link href="/">
                            <Image className={styles.logo}
                                src={logo}
                                alt='logo' />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>
                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={`${styles.menuLinks} active`} href="/">Home</Link>
                                </li>
                                <li onClick={toggle} className={`${styles.navLinks} ${styles.servHover}`}>
                                    <Link className={styles.menuLinks} href="">Services
                                        <FaAngleDown size={12} />
                                    </Link>
                                    <ul className={click ? `${styles.megaMenu} ${styles.active}` : `${styles.megaMenu}`}>
                                        <li className={styles.navLinks}>
                                            <Link className={styles.menuLinks} href="/amazon-publishing">Amazon Publishing</Link>
                                        </li>
                                        <li className={styles.navLinks}>
                                            <Link className={styles.menuLinks} href="/book-publishing">Book Publishing</Link>
                                        </li>
                                        <li className={styles.navLinks}>
                                            <Link className={styles.menuLinks} href="/digital-book-publishing">Digital Book Publishing</Link>
                                        </li>
                                        <li className={styles.navLinks}>
                                            <Link className={styles.menuLinks} href="/ebook-publishing">Ebook Publishing</Link>
                                        </li>
                                        <li className={styles.navLinks}>
                                            <Link className={styles.menuLinks} href="/self-publishing">Self Publishing</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/pricing">Pricing</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/blogs">Blogs</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/about">About</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/contact">Contact</Link>
                                </li>
                                <li className={`${styles.navLinks} ${styles.headerTel}`}>
                                    <Link className={`${styles.headerIcon}`} href="tel:(302) 883-8877">
                                        <FaPhoneAlt className={styles.valueNum} size={14} />
                                        | (800) 781-9093 </Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header