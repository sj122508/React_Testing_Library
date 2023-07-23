import { render, screen } from '../../test-utils'
import { MuiMode } from './MUI-Mode'

describe('MuiMode', () => {
    test('renders text correctly', () => {
        // render(<MuiMode />, { wrapper: AppProviders })
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })
}) 