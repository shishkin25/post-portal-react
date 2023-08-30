import styles from './Select.module.css';

const Select = (props) => {
  const { options, chooseSort } = props;

  return (
    <select
      className={styles.select}
      onChange={(e) => chooseSort(e.target.value)}
      defaultValue="id"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
