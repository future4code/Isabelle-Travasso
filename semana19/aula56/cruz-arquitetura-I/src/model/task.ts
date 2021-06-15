export const toTaskModel = (result: any): task => {
   const {id, title, description, deadline, authorId} = result

   return {
      id: id,
      title: title,
      description: description,
      deadline: deadline,
      authorId: authorId
   }
}


export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }