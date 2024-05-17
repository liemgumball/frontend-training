import Task, { TTask } from '../Task/Task'
import './taskList.css'

type TaskListProps = {
  error?: Error
  loading?: boolean
  tasks: TTask[]
}

const TaskList: React.FC<TaskListProps> = ({ error, loading, tasks }) => {
  if (error) {
    return <div className="error">{error.message}</div>
  }

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading cool state .........</span>
      </span>
    </div>
  )
  if (loading) {
    return (
      <div className="list-items" data-testId="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={'empty'} data-testId="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ]
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
