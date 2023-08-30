import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Описание:</div>
      <div className={styles.text}>
        Это учебное веб-приложение, созданное для изучения React и других его
        библиотек. В нем используются данные, взятые с{' '}
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          фейкового API JSONPlaceholder
        </a>
        , такие как посты, комментарии, авторы и другие.
      </div>
    </div>
  );
};

export default About;
