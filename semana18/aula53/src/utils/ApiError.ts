export class ApiError {
    constructor(public code: number, public message: string) {}
  
    static wrongParams(message: string) {
      return new ApiError(406, message)
    }
  
    static badRequest(message: string) {
      return new ApiError(400, message)
    }
  
    static notFound(message: string) {
      return new ApiError(404, 'Cant found what you want!')
    }
  
    static internal() {
      return new ApiError(500, 'Internal error')
    }
  }