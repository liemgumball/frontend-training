export const getStudents = async () => {
  try {
    const response = await fetch('http://localhost:3000/students')

    if (!response.ok) throw new Error('Failed to get students')

    const data = await response.json()

    console.log(data)

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getPayments = async () => {
  try {
    const response = await fetch('http://localhost:3000/payments')

    if (!response.ok) throw new Error('Failed to get payments')

    const data = await response.json()

    console.log(data)

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const addStudent = async (variables: any) => {
  try {
    const response = await fetch('http://localhost:3000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(variables),
    })

    if (!response.ok) throw new Error('Failed to get students')

    const data = await response.json()

    console.log(data)

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const addPayment = async (variables: any) => {
  try {
    const response = await fetch('http://localhost:3000/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(variables),
    })

    if (!response.ok) throw new Error('Failed to get students')

    const data = await response.json()

    console.log(data)

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
