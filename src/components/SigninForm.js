import React from "react";
import {Form, Field} from "react-final-form";
import {Navigate} from "react-router";

class SigninForm extends React.Component {
    onSubmit = (form) => {
        this.props.action(form.userName, form.password);
    }
    render () {
        if (this.props.loggedIn) {
            return (
                <Navigate to='/' />
            )
        }

        return (
            <div>
                <Form onSubmit={this.onSubmit} render={({handleSubmit}) => {
                    return (<form onSubmit={handleSubmit}>
                            <Field name='userName' render={(props) => {
                                return (
                                    <div>
                                        <label htmlFor='userName'>Username</label>
                                        <input {...props.input} />
                                    </div>
                                )
                            }}/>
                            <Field name='password' render={(props) => {
                                return (
                                    <div>
                                        <label htmlFor='password'>Password</label>
                                        <input {...props.input} type='password' />
                                    </div>
                                )
                            }}/>
                            <button>Submit</button>
                        </form>
                    )
                }} >
                </Form>
                {this.props.message ?  <div className='message'>{this.props.message}</div> : ''}
            </div>
        )
    }
}

export default SigninForm;
