export default class contactFileModel {
    public id:string=""
    public url:string=""
    


    constructor(item:any) {
      this._id(item);
      this._url(item);

    }
  

    private _id(item: any) {
      this.id = item.id;
    };
    private _url(item: any) {
        this.url= item.url;
      };

  }
