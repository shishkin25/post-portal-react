import styles from './PostFilter.module.css';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

const PostFilter = (props) => {
  const { filter, setFilter } = props;
  return (
    <div className={styles.container}>
      <Input
        value={filter.searchQuery}
        onChange={(e) => {
          setFilter({ ...filter, searchQuery: e.target.value });
        }}
        placeholder="Поиск постов"
      />
      <Select
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
          { value: 'id', name: 'По id' },
        ]}
        chooseSort={(sortKey) => {
          setFilter({ ...filter, sortKey: sortKey });
        }}
      />
    </div>
  );
};

export default PostFilter;
