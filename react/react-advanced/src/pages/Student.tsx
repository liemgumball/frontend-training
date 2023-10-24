import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addStudent, getStudents } from '../services/api'

const Student: React.FC = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
    // refetchInterval: 5000,
  })

  // Mutations
  const mutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['students'] })
      queryClient.fetchQuery({ queryKey: ['students'] })
    },
  })

  if (query.isError) return <p>Loading error</p>

  if (query.isLoading) return <p>Loading...</p>

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {query.data?.map((item: any) => (
          <li key={item.id}>
            {item.id}
            {<img src={item.avatar} style={{ margin: 20 }} />}
          </li>
        ))}
      </ul>
      <button
        disabled={mutation.isLoading}
        onClick={() => {
          mutation.mutate({
            name: 'Test',
            avatar: 'https://loremflickr.com/60/60',
          })
          console.log(query)
        }}
      >
        Add Student
      </button>
    </div>
  )
}

Student.whyDidYouRender = true

export default Student
