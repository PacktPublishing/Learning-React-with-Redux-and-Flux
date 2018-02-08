import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Container, Content, Form, Input } from "./styles";

function FormInput({ input, meta, placeholder = "" }) {
  const hasError = meta.touched && meta.error;

  return <Input {...input} placeholder={placeholder} error={hasError} />;
}

function validate(values) {
  const { user = {} } = values;

  if (!user.email) {
    return { user: { email: ["Required Field"] } };
  }

  return {};
}

export default function SignUp() {
  return (
    <Container>
      <Content>
        <h1>Sign Up</h1>
        <FinalForm
          onSubmit={data => console.log(data)}
          validate={validate}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="user.email"
                component={FormInput}
                placeholder="Email Address"
              />
            </Form>
          )}
        />
      </Content>
    </Container>
  );
}
