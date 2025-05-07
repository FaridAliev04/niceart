export default class partnersModel {
    public id: string = "";
    public name :string="";
    public url :string="";
    public description :string=""
    
  
    constructor(item:any) {
      this._id(item);
      this._name(item);
      this._url(item);
      this._description(item);
    }
  

    private _id(item: any) {
      this.id = item.record.id;
    }
    private _name(item: any) {
        this.name = item.record.name;
      };
      private _description(item: any) {
        this.description = item.record.description;
      };
    private _url(item: any) {
        this.url = item.record.file.url;
      };

  }
