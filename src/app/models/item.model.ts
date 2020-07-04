export class Item {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public brand: string,
    public unit: string,
    public group: string,
    public location: string,
    public warehouse: string,
    public min: number,
    public max: number,
    public reorderPoint: number,
    public entryDate: Date,
    public departureDate: Date,
    public ultimateValue: number
  ) {
  }
}
