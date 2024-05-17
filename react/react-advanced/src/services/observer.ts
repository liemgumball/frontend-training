export class Observer {
  private _key: string
  private _callback: (...args: any[]) => unknown
  public results: any

  constructor(key: string, callback: () => void) {
    this._key = key
    this._callback = callback
    callback()
  }

  get key(): string {
    return this._key
  }

  get callback(): () => void {
    return this._callback
  }
}
