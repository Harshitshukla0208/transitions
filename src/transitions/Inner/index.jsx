import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import styles from './style.module.scss'; // Import the CSS Module

const Inner = ({ children }) => {
    const anim = (variants) => ({
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    });

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        exit: {
            opacity: 1
        }
    };

    const perspective = {
        initial: {
            scale: 1,
            y: 0,
        },
        enter: {
            scale: 1,
            y: 0,
        },
        exit: {
            scale: 0.9,
            y: -100,
            opacity: 0.5,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    const slide = {
        initial: {
            top: "100vh"
        },
        enter: {
            top: "0"
        },
        exit: {
            top: "0",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <div className={styles.inner}>
            <motion.div {...anim(slide)} className={styles.slide} />
            <motion.div {...anim(perspective)} className={styles.content}>
                <motion.div {...anim(opacity)}>
                    <header className={styles.header}>
                        <div className={styles.headerContainer}>
                            <Link href="/" className={styles.headerLink}>
                                Home
                            </Link>
                            <Link href="/contact" className={styles.headerLink}>
                                Contact
                            </Link>
                            <Link href="/about" className={styles.headerLink}>
                                About
                            </Link>
                        </div>
                    </header>
                    <main className={styles.mainContent}>
                        {children}
                    </main>
                </motion.div>

            </motion.div>
        </div>
    );
}

export default Inner;
