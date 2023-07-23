import { render, screen, logRoles } from '@testing-library/react'
import { Skill } from './Skill'

describe('Skill', () => {
    const skills = ['HTML', 'CSS', 'JavaScript']

    test('renders', () => {
        render(<Skill skills={skills} />)

        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })    

    test('renders a list of skills', () => {
        render(<Skill skills={skills} />)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(skills.length)
    })

    test('renders Login button', () => {
        render(<Skill skills={skills} />)
        const loginButton = screen.getByRole('button', {name: 'Login'})
        expect(loginButton).toBeInTheDocument()

    })

     test('Start Learning button is not rendered', () => {
        render(<Skill skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {name: 'Start learning'})
        expect(startLearningButton).not.toBeInTheDocument()
    })

     test('Start Learning button is eventually displayed', async () => {
        render(<Skill skills={skills} />)
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', 
            {name: 'Start learning'},
            {timeout: 2000} // default is 1000
        )
        // screen.debug()
        expect(startLearningButton).toBeInTheDocument()
    })

    test('Start Learning button is eventually displayed', async () => {
        const view = render(<Skill skills={skills} />)
        logRoles(view.container)
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', 
            {name: 'Start learning'},
            {timeout: 2000} // default is 1000
        )
        screen.debug()
        expect(startLearningButton).toBeInTheDocument()
    })
})
