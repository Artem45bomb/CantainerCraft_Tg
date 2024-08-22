export class StatusError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
}
