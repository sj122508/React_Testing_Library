import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

// Render is a function that takes a React element and renders it into a virtual DOM.
// Screen is an object that contains functions to query the virtual DOM.
// getByText is a function that takes a string and returns the first element that matches the string.
// expect is a function that takes a value and returns an object with functions to test the value.
// toBeInTheDocument is a function that takes no arguments and returns true if the element is in the document.
// getByText with the string 'Hello' returns the div element with the text 'Hello'.
// getByText with the regex /hello/i returns the div element with the text 'Hello'.
