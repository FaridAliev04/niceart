export default class leadsModel {
    public id: string = "";
    public tag :string="";
    public heading :string="";
    public description:string="";
    public title:string =""

    constructor(item:any) {
      this._id(item);
      this._tag(item);
      this._heading(item);
      this._description(item)
      this._title(item)
    }
  

    private _id(item: any) {
      this.id = item.id;
    }
    private _tag(item: any) {
        this.tag = item.tag;
      }

    private _heading(item: any) {
        this.heading = item.heading;
    }

    private _description(item: any) {
      this.description = item.description;
  }
  private _title(item: any) {
    this.title = item.title;
}

  }
