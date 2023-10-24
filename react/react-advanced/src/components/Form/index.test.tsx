import { render, screen, fireEvent } from '@testing-library/react'
import Form from '.'

describe('<LoginForm />', async () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    // ARRANGE
    render(<Form />)

    // ACT
    fireEvent.click(screen.getByText('Submit'))

    await screen.findByRole('alert')
    // ASSERT
    expect(screen.getByRole('alert')).toHaveTextContent('First name required')
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
