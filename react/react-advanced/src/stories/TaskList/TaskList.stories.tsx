import type { Meta, StoryObj } from '@storybook/react'
import TaskList from './TaskList'

import * as TaskStories from '../Task/Task.stories'
import { TTask } from '../Task/Task'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'TaskList',
  component: TaskList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    loading: { control: 'boolean' },
    error: {
      control: 'select',
      options: [undefined, { message: 'NOT FOUND' }],
    },
  },
} satisfies Meta<typeof TaskList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [
      { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' } as TTask,
      { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' } as TTask,
      { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' } as TTask,
      { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' } as TTask,
      { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' } as TTask,
      { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' } as TTask,
    ],
    loading: false,
    error: undefined,
  },
}

export const WithPinnedTasks: Story = {
  args: {
    ...Default.args,
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6', state: 'TASK_PINNED' },
      { id: '7', title: 'Task 7', state: 'TASK_PINNED' },
    ],
  },
}

export const Erroring: Story = {
  args: {
    error: new Error('PAGE NOT FOUND 404'),
    tasks: [],
  },
}

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
}
