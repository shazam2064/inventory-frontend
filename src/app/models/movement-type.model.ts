export class MovementType {
  constructor(
    public id: string,
    public name: string
  ) {
  }

  getId(): string {
    return this.id;
  }

  setId(value: string) {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }
}
