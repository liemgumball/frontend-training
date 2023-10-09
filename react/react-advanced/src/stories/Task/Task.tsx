import './task.css'

export type TTask = {
  id: string
  title: string
  state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
}

type TaskProps = {
  task: TTask
  onArchiveTask?: (id: string) => void
  onPinTask?: (id: string) => void
}

const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const {
    task: { id, title, state },
  } = props

  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  )
}

export default Task
