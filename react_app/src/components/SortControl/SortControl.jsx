import "./SortControl.css";

const SORT_BY = "Sort by";
export const TYPE_SORT_NAME = {
  date: "Release Date",
  title: "Title",
};

const SortControl = ({ onChange, activeSortControl }) => {
  const isSelected = activeSortControl === TYPE_SORT_NAME.date ? true : false;

  return (
    <div className='sort'>
      <label className='sortBy' htmlFor='sortControl'>
        {SORT_BY}
      </label>
      <select className='sortSelect' name='sortControl' onChange={onChange}>
        <option value={TYPE_SORT_NAME.date} selected={isSelected}>
          {TYPE_SORT_NAME.date}
        </option>
        <option value={TYPE_SORT_NAME.title} selected={!isSelected}>
          {TYPE_SORT_NAME.title}
        </option>
      </select>
    </div>
  );
};
export default SortControl;
