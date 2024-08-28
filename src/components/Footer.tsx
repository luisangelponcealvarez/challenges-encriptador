import styles from "../styles/styles.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        ©Luis Angel Ponce Alvarez
        <div>
          <a
            href="https://github.com/luisangelponcealvarez"
            className={styles.footer__links}
          >
            GitHib
          </a>

          <a
            href="https://www.linkedin.com/in/luisangelponcealvarez/"
            className={styles.footer__links}
          >
            Linkedin
          </a>

          <a
            href="https://www.tiktok.com/@luisangelpocealvarez"
            className={styles.footer__links}
          >
            TikTok
          </a>

          <a
            href="https://www.youtube.com/@luisangelponcealvarez"
            className={styles.footer__links}
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61560375478901"
            className={styles.footer__links}
          >
            Facebook
          </a>
        </div>
      </footer>
    </>
  );
}
