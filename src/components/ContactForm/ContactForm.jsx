import { Formik, Form, Field } from 'formik';
import { FormLabel, Button } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormLabel htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <br />
        <FormLabel htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="^[0-9\+]{1,}[0-9\-]{3,15}$"
            required
          />
        </FormLabel>
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
