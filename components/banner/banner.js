import styles from "../banner/banner.module.css"

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
            PARASOL
            </h1>
            <p className={styles.subTitle}>Find Your Inner Peace</p>
            <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
            </div>
        </div>
    )
};

export default Banner;