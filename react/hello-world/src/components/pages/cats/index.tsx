import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import './Cat.scss'
import Button from '../../button'

const Cats: React.FC = () => {
  const selectedRef = useRef<HTMLLIElement | null>()
  const [index, setIndex] = useState<number>(0)

  return (
    <div className="cats">
      <nav>
        <Button
          onClick={(): void => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            selectedRef.current!.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            })
          }}
        >
          Next
        </Button>
      </nav>
      <div>
        <ul className="cats-list">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(el) => {
                if (index === i) {
                  selectedRef.current = el
                }
              }}
              className={index === i ? 'active' : ''}
            >
              <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const catList: any[] = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}

export default Cats
