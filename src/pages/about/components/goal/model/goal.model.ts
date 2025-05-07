export default class purposesModel {
    public id: string = "";
    public url: string = "";
    public title: string = "";
    public description:string=""

    constructor(item:any) {
      this._id(item);
      this._url(item);
      this._title(item);
      this._description(item);
    }
  

    private _id(item: any) {
      this.id = item.id;
    }
    private _url(item: any) {
        this.url = item.file.url;
      }
      private _title(item: any) {
        this.title = item.title;
      }
      private _description(item: any) {
        this.description = item.description;
      }

  }
