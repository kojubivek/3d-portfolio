import React, { useState } from "react";
import styled from "styled-components";
import Map from "../map/Map";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  gap: 58px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #f9f7f7;
  border-radius: 5px;
  border: none;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f4eeee;
`;
const Title = styled.h1`
  font-weight: 200px;
  font-size: 50px;
`;

const Right = styled.div`
  flex: 1;
`;
const Button = styled.button`
  background-color: #d80c9e;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer:
  font-weight: bold;
  padding: 20px;
`;

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2e2ad0f",
        "template_01quyer",
        form.current,
        "PYIeAILSYrk1-fy9n"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input type="text" name="name" placeholder="Name" required />
            <Input type="email" name="email" placeholder="Email" required />
            <TextArea
              rows={10}
              type="text"
              name="message"
              placeholder="Write Your Message"
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent!. I'll get back to you soon!"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
