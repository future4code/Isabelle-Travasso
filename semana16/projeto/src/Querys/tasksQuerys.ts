import { connection } from "../Connections/connection"
import { Task, TaskResponsible, Status } from '../types'

export const createTask = async (taskData: Task): Promise<void> => {
  await connection
    .insert({
      id: taskData.id,
      title: taskData.title,
      description: taskData.description,
      limitDate: taskData.limitDate,
      status: taskData.status,
      creatorUserId: taskData.creatorUserId
    })
    .into("Tasks")
}

export const getAllTasks = async (): Promise<any> => {
  const result = await connection
    .select("*")
    .from("Tasks")

  return result
}

export const getTaskByCreatorUserId = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("Tasks")
    .where(`${id}`, "creatorUserId")

  return result
}

export const createResponsible = async (taskData: TaskResponsible): Promise<void> => {

  await connection
    .insert({
      task_id: taskData.task_id,
      user_id: taskData.user_id
    })
    .into("Task_Responsible")
}

export const getUserResponsible = async (id: string): Promise<any> => {
  const result = await connection
    .select("Task_Responsible.user_id", "Users.nickname")
    .from('Task_Responsible')
    .where("Task_Responsible.task_id", `${id}`)
    .join('Users', 'Task_Responsible.user_id', 'Users.id')
  return result
}

export const getTaskById = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from('Tasks')
    .where("Tasks.id", `${id}`)
    .join('Task_Responsible', 'Tasks.id', 'Task_Responsible.task_id')
  return result
}

export const addStatus = async (id: string, status: Status): Promise<void> => {
  await connection("Tasks")
    .update({
      status: status,
    })
    .where("id", id)
}

export const getTasksSearch = async (search: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("Tasks")
    .where("status", "like", `%${search}%`)
    .orWhere("title", "like", `%${search}%`)
    .orWhere("description", "like", `%${search}%`)

  return result
}

export const getTasksDelayed = async (): Promise<any> => {
  const result = await connection
    .select("*")
    .from("Tasks")
    .whereNot("status", "done")
    .where('limitDate', '<', connection.raw('CURRENT_TIMESTAMP'))
  return result
}

export const deleteResponsible = async (taskId: string, responsibleUserId: string): Promise<any> => {
  try {

    if (!taskId) {
      throw new Error("Invalid task id")
    } else if (!responsibleUserId) {
      throw new Error("Invalid user id")
    }

    const result = await connection
      .delete()
      .from("Task_Responsible")
      .where("task_id", `${taskId}`)
      .andWhere("user_id", `${responsibleUserId}`)

    return result

  } catch (err) {
    throw new Error(err.sqlMessage || err.message)
  }
}