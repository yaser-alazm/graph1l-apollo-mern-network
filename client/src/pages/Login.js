import React, {useState} from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'

import {Grid,Form, Button} from 'semantic-ui-react'

import {useForm} from '../utils/hooks'

function Login(props) {

    // TODO: setup errors
    const [errors, setErrors] = useState({})

    const {values, onChange,onSubmit} = useForm(loginUserCallback, {
        username: '',
        password: '',
    })


    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_,result) {
            props.history.push('/')

        },
        onError(err) {
            // setErrors(err.graphQLErrors[0].extensions.exception.errors)
            console.log(err)
        },
        variables: values
    })

    // a function to make loginUser() function recognized in useForm()
    // passing loginUser function directly to useForm will not work because loginUser not declared before
    function loginUserCallback(){
        loginUser()
    }

    return (
        <Grid centered columns={2}>
            <Grid.Row>
                <h2 className="ui center aligned container">Register a new user</h2>
            </Grid.Row>
            <Grid.Column>
                <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                    <Form.Input
                        label="Username"
                        placeholder="Username"
                        name="username"
                        type="text"
                        value= {values.username}
                        onChange={onChange}
                        // error= {errors.username ? true : false}
                    />
                    <Form.Input
                        label="Password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value= {values.password}
                        onChange={onChange}
                        // error= {errors.password ? true : false}
                    />
                    <Button
                        type="submit"
                        content="Login"
                    />
                </Form>

                {Object.keys(errors).length > 0 && (
                    <div className="ui message error">
                        <ul className="list">
                            {Object.values(errors).map(error => (
                                <li key={error}>{error}</li>
                            )
                            )}
                        </ul>
                    </div>
                )}
            </Grid.Column>
        </Grid>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username
            password: $password
        ){
            id username email createdAt token
        }
    }
`

export default Login;
