import "./SortControl.css";

const SORT_BY = "Sort by";
const TYPE_SORT_NAME = {
  date: "Release Date",
  title: "Title",
};

const SortControl = ({ onChange }) => {
  return (
    <div className='sort'>
      <label className='sortBy' htmlFor='sortControl'>
        {SORT_BY}
      </label>
      <select className='sortSelect' name='sortControl' onChange={onChange}>
        <option value={TYPE_SORT_NAME.date}>{TYPE_SORT_NAME.date}</option>
        <option value={TYPE_SORT_NAME.title}>{TYPE_SORT_NAME.title}</option>
      </select>
    </div>
  );
};
export default SortControl;
