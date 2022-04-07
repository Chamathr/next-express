import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addUsers, userSelector, editUsers } from '../redux/slice/userSlice';
import { useRouter } from 'next/router'
import styles from '../styles/UserForm.module.scss'

const UserForm = () => {

    const { editData } = useSelector(userSelector)

    const router = useRouter()

    const [name, setName] = useState(editData?.name ? editData.name : '')
    const [age, setAge] = useState(editData?.age ? editData.age : '')
    const [email, setEmail] = useState(editData?.email ? editData.email : '')

    const data = {
        name: name,
        email: email,
        age: age
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editData?._id) {
            data._id = editData._id
            dispatch(editUsers(data))
             router.push('/')
        }
        else {
            dispatch(addUsers(data))
            router.push('/')
        }
    }

    return (
        <>
            <div className={styles.root}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder={!editData?.name ? "Enter Name" : editData.name} onChange={(e) => setName(e.target.value)} value = {name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder={!editData?.email ? "Enter email" : editData.email} onChange={(e) => setEmail(e.target.value)} value = {email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder={!editData?.age ? "Enter Age" : editData.age} onChange={(e) => setAge(e.target.value)} value = {age}/>
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