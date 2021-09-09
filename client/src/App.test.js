import {render, screen} from "@testing-library/react";
import App from "./App";

test('Memories', ()=>{
	render(<App />);
	const searchTEST = screen.getByText('Memories');
	expect(searchTEST).toBeInTheDocument();
})