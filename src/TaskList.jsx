import TaskItem from "./TaskItem";


export default function TaskList({ tasks, deleteTask }) {

    return (
        <div>
            {
                tasks.map((el, i) => <TaskItem deleteTask={deleteTask} key={i} i={i} {...el} />)
            }

        </div>
    )
}