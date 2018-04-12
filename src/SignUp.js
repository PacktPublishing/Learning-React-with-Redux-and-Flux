import React from "react";
import { validator } from "validate-this";
import email from "email-validator";
import { Form as FinalForm, Field } from "react-final-form";
import { Container, Content, Form, Input } from "./styles";

function FormInput({ input, meta, placeholder = "", type = "text" }) {
  const hasError = meta.touched && meta.error;
  const errors =
    hasError &&
    meta.error.map((e, index) => (
      <p key={index} style={{ color: "red" }}>{e}</p>
    ));

  return (
    <div>
      <Input
        {...input}
        placeholder={placeholder}
        error={hasError}
        type={type}
        style={{ marginBottom: "1rem" }}
      />
      {errors}
    </div>
  );
}

const required = val => {
  if (!val) {
    return "Required Field";
  }
};

const validEmail = val => {
  if (val && !email.validate(val)) {
    return "Not a Valid Email Address";
  }
};

const matches = fieldname => (val, values) => {
  if (val !== values[fieldname]) {
    return `Does not match ${fieldname}`;
  }
};

function validate(values) {
  return validator(values, form => {
    form.validateChild("user", user => {
      user.validate("email").satisfies(required, validEmail);
      user.validate("password", "confirm").satisfies(required);
      user.validate("confirm").satisfies(matches("password"));
    });
  });
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
              <Field
                name="user.password"
                component={FormInput}
                placeholder="Password"
                type="password"
              />
              <Field
                name="user.confirm"
                component={FormInput}
                placeholder="Confirm Password"
                type="password"
              />
            </Form>
          )}
        />
      </Content>
    </Container>
  );
}
