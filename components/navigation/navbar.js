import React from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";
import styles from "../navigation/navbar.module.css";

const Navbar = (props) => {
    const { userName } = props;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href='/'>
                    <div className={styles.logoWrapper}>
                    parasol
                    </div>
                </a>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    Home
                </li>
                <li className={styles.navItem2}>
                    List
                </li>
            </ul>
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn}>
                        <p className={styles.userName}>{ userName }</p>
                        {/* {Expand More Icon} */}
                    </button>
                    <div className={styles.navDropdown}>
                        <div>
                            <a className={styles.linkName}>Sign Out</a>
                        </div>
                    </div>
                    <div className={styles.lineWrapper}>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    
    
 
    );
};

export default Navbar;