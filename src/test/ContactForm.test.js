import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from '../components/ContactForm';


test("renderiza inputs de nome, email e telefone", () => {
    render (<ContactForm />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
});

test("chama onSubmit com dados corretos", () => {
    const handlerSubmit = jest.fn();
    render(<ContactForm onSubmit={handlerSubmit} />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'João' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'joao@email.com' } });
    fireEvent.change(screen.getByLabelText(/telefone/i), { target: { value: '123456789' } });

    fireEvent.submit(screen.getByRole('form'));

    expect(handlerSubmit).toHaveBeenCalledWith({
        nome: 'João',
        email: 'joao@email.com',
        telefone: '123456789'
    });
});