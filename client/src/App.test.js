import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import PlayerCard from './components/PlayerCard';
import Navigation from './components/Navigation';


//This test is default and checks if the App 
//component renders w/out crashing.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//Test: Makes sure each player only show country text once. If 
//more Country text are found we should get an error.
test("gg: Contains Country text once", () => {
  const expectedCountryCount = 1;
  const container = render(<PlayerCard/>);
  const getAllByText = container.getAllByText;

  const countryCountElements = getAllByText(/country/i);
  getAllByText(/country/i);

  expect(countryCountElements.length).toBe(expectedCountryCount);
})

//Test: Makes sure each player only show searches text once. If 
//more searches text are found we should get an error.
test("gg: Contains Searches text once", () => {
  const expectedSearchesCount = 1;
  const container = render(<PlayerCard/>);
  const getAllByText = container.getAllByText;

  const searchesCountElements = getAllByText(/searches/i);
  getAllByText(/searches/i);

  expect(searchesCountElements.length).toBe(expectedSearchesCount);
})

////Test: makes sure dark mode button is always present in the Navigation.
//If it is removed/modified it will cause error.
test("gg: Contains a Dark Mode button", () => {
  const { getByTestId } = render(<Navigation />);

  getByTestId("dark-mode-button");
});