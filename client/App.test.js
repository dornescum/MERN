import {render, screen} from "@testing-library/react";
import App from "./src/App";

test('Memories', ()=>{
	render(<App />);
	const serch = screen.getByText('Memories');
	expect(serch).toBeInTheDocument()
})