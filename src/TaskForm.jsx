import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

export default function TaskForm({ addTask }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, 'Name must be at least 5 characters')
      .required('Name is required'),
    count: Yup.number()
      .min(1, 'Count must be greater than 0')
      .required('Count is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', count: 0 }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        addTask(values); 
        navigate('/');
      }}
    >
      {({ handleSubmit }) => (
        <Form style={styles.formContainer}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Task Name:</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter task name"
              style={styles.inputField}
            />
            <ErrorMessage name="name" component="div" style={styles.errorMessage} />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Task Count:</label>
            <Field
              type="number"
              name="count"
              placeholder="Enter task count"
              style={styles.inputField}
            />
            <ErrorMessage name="count" component="div" style={styles.errorMessage} />
          </div>

          <Button onClick={handleSubmit} type="submit" style={styles.submitButton}>
            Add Task
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const styles = {
  formContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  fieldContainer: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
    display: 'block',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  errorMessage: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  },
};
