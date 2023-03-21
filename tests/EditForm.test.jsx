import { render, screen } from "@testing-library/react";
import EditForm from "../src/components/EditForm"

vi.mock('react-router-dom', () => ({ 
    useLoaderData: vi.fn(() => ({ 
        image: { 
            category:"society",
            id: 9,
            idWeb: "00000000-0000-0000-0000-000000000000",
            imageName: "Holi: love and colors",
            imageSource: "https://static.dw.com/image/64899271_303.jpg",
            insertDate: "2023-03-21T13:05:01.9683216",
            isActive: true,
            isPublic: true
        }, 
    })), 
}));




test('should render image title', () => { 
    render(<EditForm />); 
    const titleElement = screen.(/Holi: love and colors/i); 
    expect(titleElement).toBeInTheDocument(); 
});

// test('should sum to 2', () => { 
//     expect(1 + 1).toBe(2); 
// });