// Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
// React Testing Library is a library that provides utilities to test React components.


// Render is a function that takes a React element and renders it into a virtual DOM.
// Screen is an object that contains functions to query the virtual DOM.
// getByText is a function that takes a string and returns the first element that matches the string.
// expect is a function that takes a value and returns an object with functions to test the value.
// toBeInTheDocument is a function that takes no arguments and returns true if the element is in the document.
// getByText with the string 'Hello' returns the div element with the text 'Hello'.
// getByText with the regex /hello/i returns the div element with the text 'Hello'.


// Test Driven Development
// 1. Write a test
// 2. Run all tests and see if the new test fails
// 3. Write the code to pass the test
// 4. Run all tests and see if they pass
// 5. Refactor code
// 6. Repeat


//////////////////// ALL ABOUT JEST ////////////////////
//////////////////// ALL ABOUT JEST ////////////////////

// What is Jest Watch mode?
// Jest Watch mode is a feature of Jest that watches for changes in the code and runs the tests automatically.


// Filtering tests
// Jest provides a way to filter tests by name using the -t flag.
    // For example, to run only the tests that contain the word 'Greet' in the name, run the following command:
    // npm test -- -t Greet

    // To run only the tests that contain the word 'Greet' in the name and are in the Greet.test.js file, run the following command:
    // npm test -- -t Greet -f Greet.test.js

// Jest provides a way to filter tests by filename using the -f flag.
    // For example, to run only the tests that are in the Greet.test.js file, run the following command:
    // npm test -- -f Greet.test.js

    // To run only the tests that are in the Greet.test.js file and are in the src/components folder, run the following command:
    // npm test -- -f Greet.test.js -c src/components

// Jest provides a way to filter tests related to changed files using the -o flag.
    // For example, to run only the tests that are related to the changed files, run the following command:
    // npm test -- -o
    
// Jest provides a way to run only the failed tests using the -f flag.
    // For example, to run only the failed tests, run the following command:
    // npm test -- -f


// Using test.only or fit
// Jest provides a way to run only one test using the test.only function.
// Jest provides a way to run only one test using fit instead of test.only.


// Using test.skip or xit
// Jest provides a way to skip a test using the test.skip function.
// Jest provides a way to skip a test using xit instead of test.skip.

// What is describe?
// describe is a function that takes a string and a function as arguments.
// describe can also use describe.only and describe.skip to run only one describe block or skip a describe block.


// Code coverage
// Code coverage is a metric that measures the percentage of code that is covered by tests.
// Jest provides a way to measure code coverage using the --coverage flag.

// Statement coverage is a metric that measures the percentage of statements that are covered by tests.
// Branch coverage is a metric that measures the percentage of branches that are covered by tests.
// Function coverage is a metric that measures the percentage of functions that are covered by tests.
// Line coverage is a metric that measures the percentage of lines that are covered by tests. 

// Add to package.json "coverage": "npm test -- --coverage --watchAll=false"
// npm run coverage
// Add --collectCoverageFrom: ["src/**/*.{js,jsx}"] to package.json
// Add --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{js,jsx}' to package.json
// Add coverageThreshold to package.json to set a minimum coverage percentage for statements, branches, functions, and lines.


// Assertions
// Jest provides a way to make assertions using the expect function.
// Jest provides a way to make assertions using the expect function and matchers.

// Matchers numeric comparison
// toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTo, toHaveLength

// Matchers string comparison
// toMatch, toMatchObject, toHaveProperty

// Matchers array comparison
// toContain, toContainEqual

// Matchers boolean comparison
// toBeTruthy, toBeFalsy

// Matchers object comparison
// toEqual, toStrictEqual

// Matchers exception comparison
// toThrow, toThrowError, toThrowErrorMatchingSnapshot



// Jest DOM custom matchers - github.com/testing-library/jest-dom
// toBeChecked, toBeDisabled, toBeEmpty, toBeEmptyDOMElement, 
// toBeEnabled, toBeInTheDocument, toBeInvalid, toBeRequired, 
// toBeValid, toBeVisible, toContainElement, toContainHTML, 
// toHaveAttribute, toHaveClass, toHaveFocus, toHaveFormValues, 
// toHaveStyle, toHaveTextContent, toHaveValue, toHaveDisplayValue, 
// toHaveDescription, toHaveErrorMessage, toHaveFocusWithin, 
// toHaveNoErrorMessage, toHaveNoValue, toHaveSelectedOption


//////////////////// ALL REACT TESTING LIBRARY ////////////////////
//////////////////// ALL REACT TESTING LIBRARY ////////////////////

// What to test?
// Test the component renders without crashing
// Test component renders with props
// Test component renders in different states
// Test component reacts to events

// What not to test?
// Don't test implementation details
// Don't test third party libraries
// Code that is not important from a user point of view

// RTL queries
// Every test we write will have the same structure:
// 1. Render the component
// 2. Find the element
// 3. Assert something about the element

// Queries
// To find a single element on the page, we can use the following queries:
// getByLabelText, getByPlaceholderText, getByText, getByDisplayValue, getByAltText, getByTitle, getByRole, getByTestId
// queryByLabelText, queryByPlaceholderText, queryByText, queryByDisplayValue, queryByAltText, queryByTitle, queryByRole, queryByTestId
// findByLabelText, findByPlaceholderText, findByText, findByDisplayValue, findByAltText, findByTitle, findByRole, findByTestId

// To find multiple elements on the page, we can use the following queries:
// getAllByLabelText, getAllByPlaceholderText, getAllByText, getAllByDisplayValue, getAllByAltText, getAllByTitle, getAllByRole, getAllByTestId
// queryAllByLabelText, queryAllByPlaceholderText, queryAllByText, queryAllByDisplayValue, queryAllByAltText, queryAllByTitle, queryAllByRole, queryAllByTestId
// findAllByLabelText, findAllByPlaceholderText, findAllByText, findAllByDisplayValue, findAllByAltText, findAllByTitle, findAllByRole, findAllByTestId

// The suffix can be one of the following:
// Text, PlaceholderText, LabelText, DisplayValue, AltText, Title, Role, TestId

// ************************ GETBY ************************
// ************************ GETBY ************************
// ************************ GETBY ************************
// ************************ GETBY ************************
// ************************ GETBY ************************

// getBy... queries is class of queries that will return the first matching node for a query, 
// and throw an error if no elements match or if more than one match is found (use getAllBy... queries instead).

// getByRole refer to the accessible roles exposed in the ARIA API.
// role examples: alert, alertdialog, button, checkbox, dialog, grid, link, listbox, log, marquee, menu, menubar, menuitem, menuitemcheckbox, menuitemradio, option, progressbar, radio, radiogroup, scrollarea, scrollbar, searchbox, slider, spinbutton, status, tab, tablist, tabpanel, textbox, timer, toolbar, tooltip, tree, treegrid, treeitem

// getByLabelText is the recommended query to use when working with form elements.
// getByLabelText will look for the label that is associated with the input using the for attribute.

// getByPlaceholderText is the recommended query to use when working with form elements.

// getByText is the recommended query to use when searching for text content inside a component.

// getByDisplayValue returns the input, textarea or select element that has the given value.

// getByAltText is the recommended query to use when searching for elements that have an alt text.

// getByTitle is the recommended query to use when searching for elements that have a title attribute.

// getByTestId is the recommended query to use when searching for elements by a test id.

// Priority order for queries
// 1. getByRole
// 2. getByLabelText
// 3. getByPlaceholderText
// 4. getByText
// 5. getByDisplayValue
// 6. getByAltText
// 7. getByTitle
// 8. getByTestId


// ************************ GETALLBY ************************
// getAllBy... queries is class of queries that will return an array of all matching nodes for a query,


// ************************ TEXTMATCH ************************
// ************************ TEXTMATCH ************************
// ************************ TEXTMATCH ************************
// ************************ TEXTMATCH ************************

// textMatch is a function that can be used to match text content using a regular expression.
// Full string match: getByText('Hello World')
// Partial string match: getByText(/Hello/)
// Case insensitive partial string match: getByText(/hello/i)
// Full regular expression match: getByText(/hello/i)
// Substring match: getByText('ello Worl', { exact: false })
// Custom match: getByText((content, element) => content.startsWith('Hello'))

// ************************ QUERYBY ************************
// ************************ QUERYBY ************************
// ************************ QUERYBY ************************
// ************************ QUERYBY ************************

// queryBy... queries is class of queries that will return the first matching node for a query,
// and return null if no elements match (use queryAllBy... queries instead).
// queryAllBy... queries is class of queries that will return an array of all matching nodes for a query,
// and return an empty array if no elements match (use getBy... queries instead).


// ************************ FINDBY ************************
// ************************ FINDBY ************************
// ************************ FINDBY ************************
// ************************ FINDBY ************************

// findBy... queries is class of async queries that will return a promise which resolves when an element is found which matches the given query.
// findBy queries can be useful when waiting for DOM nodes to update due to a user interaction or a state change.
// findBy queries can be used with async/await or with .then() and .catch().

// findAllBy... queries is class of async queries that will return a promise which resolves to an array of elements when any elements are found which match the given query.
// findAllBy queries can be useful when waiting for DOM nodes to update due to a user interaction or a state change.
// findAllBy queries can be used with async/await or with .then() and .catch().

// default timeout for findBy queries is 1000ms.
// Add timeout option to findBy queries to override the default timeout.

// ************************ MANUAL QUERIES ************************
// ************************ MANUAL QUERIES ************************
// ************************ MANUAL QUERIES ************************
// ************************ MANUAL QUERIES ************************

// Manual queries are useful when you need to find an element by a complex selector that is not supported by one of the built-in queries.
// Syntax: query(selector, [container])


// ************************ DEBUG ************************
// ************************ DEBUG ************************
// ************************ DEBUG ************************
// ************************ DEBUG ************************

// debug is a function that will log the current HTML of the selected element to the console.
// Syntax: screen.debug()
// logRole is a function that will log the current accessible role of the selected element to the console.



// Testing Playground
// The Testing Playground is a tool that allows you to interact with the DOM tree outside of your tests.




// ************************ USER INTERACTIONS ************************
// ************************ USER INTERACTIONS ************************
// ************************ USER INTERACTIONS ************************
// ************************ USER INTERACTIONS ************************

// user-event is a library that provides a set of custom events that you can fire on DOM nodes to simulate real user interactions.
// user-event is a wrapper around fireEvent with a simpler API.





