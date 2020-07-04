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

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(value: string) {
    this.brand = value;
  }

  getUnit(): string {
    return this.unit;
  }

  setUnit(value: string) {
    this.unit = value;
  }

  getGroup(): string {
    return this.group;
  }

  setGroup(value: string) {
    this.group = value;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(value: string) {
    this.location = value;
  }

  getWarehouse(): string {
    return this.warehouse;
  }

  setWarehouse(value: string) {
    this.warehouse = value;
  }

  getMin(): number {
    return this.min;
  }

  setMin(value: number) {
    this.min = value;
  }

  getMax(): number {
    return this.max;
  }

  setMax(value: number) {
    this.max = value;
  }

  getReorderPoint(): number {
    return this.reorderPoint;
  }

  setReorderPoint(value: number) {
    this.reorderPoint = value;
  }

  getEntryDate(): Date {
    return this.entryDate;
  }

  setEntryDate(value: Date) {
    this.entryDate = value;
  }

  getDepartureDate(): Date {
    return this.departureDate;
  }

  setDepartureDate(value: Date) {
    this.departureDate = value;
  }

  getUltimateValue(): number {
    return this.ultimateValue;
  }

  setUltimateValue(value: number) {
    this.ultimateValue = value;
  }
}
