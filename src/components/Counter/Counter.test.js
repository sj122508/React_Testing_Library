import {render, screen} from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
    test('renders correctly', () => {
    render(<Counter />)
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toBeInTheDocument()
    
    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    expect(incrementButton).toBeInTheDocument()
    })

    test('renders a count of 0', () => {
        render(<Counter />)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("0")
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        await user.click(incrementButton)
        const counterElement = screen.getByRole('heading')
        
        expect(counterElement).toHaveTextContent("1")
    })
    

    test('renders a count of 2 after clicking the increment button twice', async () => {
        user.setup();
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        await user.dblClick(incrementButton)

        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("2")
    })

    test('renders a count of 10 after clicking the set button', async () => {
        user.setup()
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const buttonSet = screen.getByRole('button', {
            name: /set/i
        })

        await user.click(buttonSet)

        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("10")
    })

    test('elements are focused in the right order', async () => {
        user.setup()
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', {name: /increment/i})
        const amountInput = screen.getByRole('spinbutton')
        const buttonSet = screen.getByRole('button', {name: /set/i})
        
        await user.tab()
        expect(buttonIncrement).toHaveFocus()

        await user.tab()
        expect(amountInput).toHaveFocus()

        await user.tab()
        expect(buttonSet).toHaveFocus()

    })
})