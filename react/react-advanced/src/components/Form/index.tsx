import { useId } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const id = useId()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, submitCount },
  } = useForm({ reValidateMode: 'onChange' })

  return (
    <form
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: 5,
        textAlign: 'left',
      }}
      method="post"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label htmlFor={`firstName-${id}`}>First Name</label>
      <input
        id={`firstName-${id}`}
        style={{ padding: 10 }}
        {...register('firstName', { required: true })}
      />
      {errors.firstName && (
        <p
          role="alert"
          style={{
            color: 'red',
            margin: 0,
            fontSize: 'small',
          }}
        >
          First name required
        </p>
      )}
      <input style={{ padding: 10 }} {...register('lastName')} />
      <input style={{ padding: 10 }} {...register('age')} />
      <button disabled={(!isValid && submitCount) as boolean} type="submit">
        Submit
      </button>
      {isValid && <p>Valid</p>}
      {submitCount > 3 && <p>to many times</p>}
    </form>
  )
}

export default Form
