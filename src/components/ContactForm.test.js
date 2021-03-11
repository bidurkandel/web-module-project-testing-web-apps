import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders ContactForm", () => {
    render(<ContactForm/>);
});

test("Can Fill in the form and display", () =>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText('Edward');
    const lastNameInput = screen.getByPlaceholderText('Bucannon');
    const emailInput = screen.getByPlaceholderText('crazybluebill1049@hotmail.com');
    const messageInput = screen.getByLabelText(/message/i);

    userEvent.type(firstNameInput, "bidur");
    userEvent.type(lastNameInput, "kandel");
    userEvent.type(emailInput, "bidur-kandel@lambdastudents.com");
    userEvent.type(messageInput, "Hello!");

    expect(firstNameInput).toHaveValue("bidur");
    expect(lastNameInput).toHaveValue("kandel");
    expect(emailInput).toHaveValue("bidur-kandel@lambdastudents.com");
    expect(messageInput).toHaveValue("Hello!");

});