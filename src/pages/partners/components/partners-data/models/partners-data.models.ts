export default class partnersDataModel {
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
      this.id = item.id;
    }
    private _name(item: any) {
        this.name = item.name;
      };
    private _url(item: any) {
        this.url = item.file.url;
      }
      private _description(item: any) {
        this.description = item.description;
      }
  }
