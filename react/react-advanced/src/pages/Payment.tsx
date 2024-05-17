import useMutation from '../hooks/useMutation'
import { addPayment, getPayments } from '../services/api'
import useQuery from '../hooks/useQuery'
import { useState } from 'react'

const Payment: React.FC = () => {
  const { data, isError, isFetching, isLoading } = useQuery(
    'payment',
    getPayments
  )

  const [optimisticData, setOptimisticData] = useState(data)

  const mutation = useMutation('payment', addPayment)

  if (isError) return <p>is error</p>

  if (isLoading) return <p>loading</p>

  return (
    <div>
      <ul>
        {(isFetching ? optimisticData : data).map((item: any) => (
          <li
            key={item.id}
            style={{ backgroundColor: item.isPending ? 'gray' : '' }}
          >
            {item.paid}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            paid: '000000',
          })
          setOptimisticData([
            ...data,
            { id: '-1', paid: '000000', isPending: true },
          ])
        }}
      >
        add
      </button>
    </div>
  )
}

Payment.whyDidYouRender = true

export default Payment
