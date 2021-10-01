import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    //Arrange
    const firstNameInput = screen.queryByLabelText(/first name:/i);
    const lastNameInput = screen.queryByLabelText(/last name:/i);
    const addressInput = screen.queryByLabelText(/address:/i);
    const cityInput = screen.queryByLabelText(/city:/i);
    const stateInput = screen.queryByLabelText(/state:/i);
    const zipInput = screen.queryByLabelText(/zip:/i);
    const button = screen.getByRole('button');

    //Act
    userEvent.type(firstNameInput, 'Irvin');
    userEvent.type(lastNameInput, 'Arevalos');
    userEvent.type(addressInput, '123 Test Dr.');
    userEvent.type(cityInput, 'Testing');
    userEvent.type(stateInput, 'California');
    userEvent.type(zipInput, '90210');
    userEvent.click(button);

    //Assert
    await waitFor(() => {
        const successMessage = screen.queryByTestId('successMessage');
        expect(successMessage).toBeInTheDocument();
    })
});

//Extra Tests
describe("All input fields are present and can be filled", () => {

    test("First name field can be filled", () => {
        render(<CheckoutForm />);
        const firstNameInput = screen.queryByLabelText(/first name:/i);
        userEvent.type(firstNameInput, 'Irvin');
        expect(firstNameInput).toBeInTheDocument();
    })

    test("Last name field can be filled", () => {
        render(<CheckoutForm />);
        const lastNameInput = screen.queryByLabelText(/last name:/i);
        userEvent.type(lastNameInput, 'Arevalos');
        expect(lastNameInput).toBeInTheDocument();
    })

    test("Address field can be filled", () => {
        render(<CheckoutForm />);
        const addressInput = screen.queryByLabelText(/address:/i);
        userEvent.type(addressInput, '123 Test Dr.');
        expect(addressInput).toBeInTheDocument();
    })

    test("City field can be filled", () => {
        render(<CheckoutForm />);
        const cityInput = screen.queryByLabelText(/city:/i);
        userEvent.type(cityInput, 'Testing');
        expect(cityInput).toBeInTheDocument();
    })

    test("State field can be filled", () => {
        render(<CheckoutForm />);
        const stateInput = screen.queryByLabelText(/state:/i);
        userEvent.type(stateInput, 'California');
        expect(stateInput).toBeInTheDocument();
    })

    test("Zip field can be filled", () => {
        render(<CheckoutForm />);
        const zipInput = screen.queryByLabelText(/zip:/i);
        userEvent.type(zipInput, '90210');
        expect(zipInput).toBeInTheDocument();
    })
})