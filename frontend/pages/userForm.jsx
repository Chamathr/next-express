import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/slice/userSlice';
import { useRouter } from 'next/router'
import styles from '../styles/UserForm.module.scss'

const UserForm = () => {

    const router = useRouter()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const data = {
        name: name,
        email: email,
        age: age
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUsers(data))
        router.push('/')
    }

    return (
        <>
            <div className={styles.root}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )

}

export default UserForm