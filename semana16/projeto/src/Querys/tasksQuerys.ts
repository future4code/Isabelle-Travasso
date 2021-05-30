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

export const getTaskAndUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT t.*, u.id as id_user, u.nickname as nicknameUser FROM Tasks t
    JOIN Users u ON t.creatorUserId = u.id
    WHERE ${id} = creatorUserId
  `)
  return result[0][0]
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
      user_id: taskData.user_id.join()
    })
    .into("Task_Responsible")
}

export const getUseResponsible = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT tr.use_id, u.nickname as nicknameUser FROM   tr
  JOIN Users u ON tr.use_id = u.id
  WHERE ${id} = tr.task_id
`)
  return result[0][0]
}

export const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT *.t, *.tr FROM Tasks t 
  JOIN Task_Responsible tr ON t.taskId = tr.task_id
  WHERE t.taskId = '${id}'
`)
  return result[0][0]
}

export const addStatus = async (id: string, status: Status): Promise<void> => {
  await connection("Tasks")
    .update({
      status: status,
    })
    .where("id", id)
}

export const getTasksSearch = async (search: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Tasks WHERE status LIKE '%${search}%' OR title LIKE '%${search}%' OR description LIKE '%${search}%'
  `)
  return result[0][0]
}

export const getTasksDelayed = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Tasks WHERE status != "done" and limitDate < curdate()
  `)
  return result[0][0]
}

export const deleteResponsible = async (taskId: string, responsibleUserId: string): Promise<any> => {
  try{

    if(!taskId){
      throw new Error("Invalid task id")
    } else if (!responsibleUserId) {
      throw new Error("Invalid user id")
    }

    const result = await connection("Task_Responsible")
    .delete("*")
    .where("task_id", taskId && "user_id", responsibleUserId) 

    return result[0][0]

  } catch (err){
    throw new Error(err.sqlMessage || err.message)
  }
}