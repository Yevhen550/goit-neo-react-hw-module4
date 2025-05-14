import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import fetchPhotoCard from "../../API/unsplashApi";

const initialValues = {
  name: "",
};

const handleSubmit = async (values, actions) => {
  const photos = await fetchPhotoCard(values.name);
  console.log(photos.results);
  actions.resetForm();
};

const SearchBar = () => {
  return (
    <div className={s.formBox}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="name"
            className={s.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
