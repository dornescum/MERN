import {render, screen, cleanup} from "@testing-library/react";
import App from "./App";
import {createStore} from "redux";
import {Provider, useDispatch} from "react-redux";

afterEach(cleanup);
const startingState = [];
 function reducer(state =startingState, action){
	switch (action.type){
		case 'FETCH_ALL':
			return  {...state. post}
		default:
			return state
	}
}

function renderWithRedux (component, {
	initialState, store = createStore(reducer, initialState)} ={} )
{
	return {
		...render(<Provider store={store}>{component}< /Provider>)
	}
}

test('Memories', ()=>{
	renderWithRedux(<App />);
	const searchTEST = screen.getByText('Memories');
	expect(searchTEST).toBeInTheDocument();
})
afterEach(cleanup);
// test('Memories', ()=>{
// 	render(<App />);
// 	const searchTEST = screen.getByText('Memories');
// 	expect(searchTEST).toBeInTheDocument();
// })