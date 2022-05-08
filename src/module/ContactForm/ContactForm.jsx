import { Formik, Field, Form } from 'formik';
// import PropTypes from 'prop-types';
import schema from '../../helpers/validationForm';
import Button from '../Utils/Button/Button';
import style from './ContactForm.module.css';
import Error from './ErrorMessage';
import finderName from 'helpers/finderNameInArray';
import { useContactList } from 'helpers/useContactList';
import { notify } from 'helpers/notify';
const { phonebook, phonebook__label, phonebook__input } = style;

const ContactForm = () => {
  const { allContacts, onSave } = useContactList();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(value, { resetForm }) => {
        finderName(allContacts, value).then(onSave).catch(notify);
        resetForm();
      }}
    >
      <Form className={phonebook}>
        <label className={phonebook__label}>
          Name
          <Field className={phonebook__input} type="text" name="name" />
          <Error name="name" />
        </label>

        <label className={phonebook__label}>
          Number
          <Field className={phonebook__input} type="tel" name="number" />
          <Error name="number" />
        </label>
        <Button type="submit" styleFor="submit" text={'Add contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   allContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onSubmit: PropTypes.func.isRequired,
// };
