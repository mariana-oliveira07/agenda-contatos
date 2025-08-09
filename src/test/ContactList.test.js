import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ContactList from "../components/ContactList";
import * as service from "../services/contactService";

jest.mock("../services/contactService");

test('Exibe mensagem quando não há contatos cadastrados', async () => {
    // Simula reposta vazia do serviço
    service.getContacts.mockResolvedValue([]);

    render(<ContactList />);


    // Aguarda renderização assíncrona
    await waitFor(() => {
        expect(screen.getByText(/nenhum contato cadastrado/i)).toBeInTheDocument();
    });
});
