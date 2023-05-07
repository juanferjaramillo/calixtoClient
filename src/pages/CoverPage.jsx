import style from './coverPage.module.css'

function CoverPage() {
  return (
    <div className={style.container}>
      <img
        src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1682391978/calixto/Cover_lrghp5.jpg"
        alt="CoverImage"
      ></img>
    </div>
  );
}
export default CoverPage;
