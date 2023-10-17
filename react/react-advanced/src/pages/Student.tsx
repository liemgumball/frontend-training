import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addStudent, getStudents } from '../services/api'

const Student = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  })

  // Mutations
  const mutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['students'] })
    },
  })

  if (query.isError) return <p>Loading error</p>

  if (query.isLoading) return <p>Loading...</p>

  return (
    <div>
      <ul>
        {query.data?.map((item: any) => (
          <li key={item.id}>
            {item.id}
            {<img src={item.avatar} style={{ margin: 20 }} />}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            name: 'Test',
            email: 'liem1762001@gmail.com',
            phone: '0931009009',
            enrollNumber: 131231314,
            createdAt: '2023-09-28T02:50:15.162Z',
            avatar: 'https://loremflickr.com/60/60',
          })
        }}
      >
        Add Student
      </button>
    </div>
  )
}

export default Student
