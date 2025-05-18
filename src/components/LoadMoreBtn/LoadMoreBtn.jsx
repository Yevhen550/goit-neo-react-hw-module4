import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={s.loadMoreBtn}>
      <button className={s.btn} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
