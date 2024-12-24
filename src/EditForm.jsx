import { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

export default function EditForm({ tasks, editTask }) {
    const { index } = useParams();
    const navigate = useNavigate();

    const task = tasks.find((_, i) => i === Number(index));

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(5, 'Name must be at least 5 characters')
            .required('Name is required'),
        count: Yup.number()
            .min(1, 'Count must be greater than 0')
            .required('Count is required'),
    });

    const handleSubmit = (values) => {
        editTask(values, Number(index));
        navigate('/');
    };

    return (
        <Formik
            initialValues={task || { name: '', count: 0 }}
            validationSchema={validationSchema}
            enableReinitialize={true} 
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => (
                <Form style={styles.formContainer} onSubmit={handleSubmit}>
                    <div>
                        <label style={styles.label}>Task Name:</label>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Enter task name"
                            style={styles.inputField}
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: 'red', fontSize: '12px' }}
                        />
                    </div>

                    <div>
                        <label style={styles.label}>Task Count:</label>
                        <Field
                            type="number"
                            name="count"
                            placeholder="Enter task count"
                            style={styles.inputField}
                        />
                        <ErrorMessage
                            name="count"
                            component="div"
                            style={{ color: 'red', fontSize: '12px' }}
                        />
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        style={styles.submitButton}
                    >
                        Save Changes
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
    label: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '8px',
    },
    inputField: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '15px',
        width: '100%',
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
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
};
