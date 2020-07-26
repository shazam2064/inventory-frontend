export class MovementHeader {
  constructor(
    public id: string,
    public dateMovHeader: Date,
    public hourMovHeader: Date,
    public total: number,
    public docType: string,
    public numDoc: number,
  ) {
  }
}
