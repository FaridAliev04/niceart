export default class strategyModel {
    public id: string = "";
    public title: string = "";
    public description: string = "";
    public url: string = "";

    constructor(item:any) {
      this._id(item);
      this._title(item);
      this._description(item);
      this._url(item);

    }
  

    private _id(item: any) {
      this.id = item.id;
    }
    private _title(item: any) {
        this.title = item.title;
      }
      private _description(item: any) {
        this.description = item.description;
      }
      private _url(item: any) {
        this.url = item.file.url;
      }
  }
