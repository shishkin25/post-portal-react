import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './PostForm.module.css';

const PostForm = (props) => {
  const { addPost } = props;
  const [post, setPost] = useState({ title: '', body: '' });

  function formIsFull() {
    let isFull = true;
    for (const prop in post) {
      if (!post[prop]) {
        isFull = false;
        break;
      }
    }

    return isFull;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsFull()) {
      addPost({ ...post, id: Date.now() });
      setPost({ title: '', body: '' });
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Введите название поста"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Введите описание поста"
      />
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default PostForm;
