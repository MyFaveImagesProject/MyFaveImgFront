import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import UpLoadForm from "../src/components/UploadForm";

test('should render app title', () => { 
    render(<UpLoadForm />); 
    const titleElement = screen.getAllByPlaceholderText(/URL/i); 
    expect(titleElement).toBeInTheDocument(); 
});