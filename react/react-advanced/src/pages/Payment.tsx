import useMutation from '../hooks/useMutation'
import { addPayment, getPayments } from '../services/api'
import useQuery from '../hooks/useQuery'

const Payment: React.FC = () => {
  const query = useQuery('payment', getPayments)

  const mutation = useMutation('payment', addPayment)

  return (
    <div>
      <ul>
        {query.data?.map((item: any) => (
          <li key={item.id}>
            {item.id}
            {item.paid}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            paid: '000000',
          })
        }}
      >
        run
      </button>
    </div>
  )
}

export default Payment
