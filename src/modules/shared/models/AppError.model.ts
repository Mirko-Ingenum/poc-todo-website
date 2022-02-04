class AppError extends Error {
  messages: string[];

  constructor(messages: string[]) {
    super();
    this.messages = messages;
  }
}

export default AppError;
