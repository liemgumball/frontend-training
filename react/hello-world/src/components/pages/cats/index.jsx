import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import './Cat.scss'
import Button from '../../button'

const Cats = () => {
  const selectedRef = useRef(null)
  const [index, setIndex] = useState(0)

  return (
    <div className="cats">
      <nav>
        <Button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            })
          }}
          label="Next"
        />
      </nav>
      <div>
        <ul className="cats-list">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
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

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}

export default Cats
