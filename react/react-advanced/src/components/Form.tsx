import { FormEvent } from 'react'

const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    console.log(form.selectGenre.value, Object.fromEntries(data.entries()))
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Post:{' '}
        <textarea
          name="postContent"
          defaultValue="I love React!"
          rows={4}
          cols={100}
          style={{ display: 'block' }}
        />
      </label>
      <label>
        Pick a genre:{' '}
        <select name="selectGenre" defaultValue="jazz">
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="r&b ">R&B</option>
        </select>
      </label>
      <button type="reset">reset</button>
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
