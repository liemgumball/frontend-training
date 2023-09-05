import { useRef, useState } from 'react'

const Form: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [info, setInfo] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    })

    setInfo(emailRef.current?.value + ' ' + passwordRef.current?.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
      <p>{info}</p>
    </>
  )
}

export default Form
