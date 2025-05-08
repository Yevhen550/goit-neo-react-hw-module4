import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const initialValues = {
  name: "",
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const SearchBar = () => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="name"
            className="input"
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
