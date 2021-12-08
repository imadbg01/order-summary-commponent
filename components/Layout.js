import Nav from "./Nav"
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <dev className={styles.container}>
                <main className={styles.main}>
                    <h1>hello there , how's Live </h1>
                    {children}
                </main>
            </dev>
        </>
    )
}

export default Layout
