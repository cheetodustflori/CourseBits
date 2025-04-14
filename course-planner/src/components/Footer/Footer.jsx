import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Made with&nbsp;
                <a style={{color: '#FF8181'}} href="https://github.com/cheetodustflori/UIC-Course-Planner">{`<`}3</a>
                &nbsp;by the WiCS Dev Team © 2024</p> 
        </div>
    )
};