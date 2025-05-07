export default class estateModel {
    public id: string = "";
    public title: string = "";
    public description: string = "";
    public url: string = ""
    public amount :string="";
    public comission :string="";
    public period :string="";
    // features

    constructor(item:any) {
      this._id(item);
      this._about(item);
      this._description(item);
      this._url(item);
      this._amount(item);
      this._comission(item);
      this._period(item);
    }
  

    private _id(item: any) {
      this.id = item.id;
    }
    private _about(item: any) {
        this.title = item.about.title;
      }
    private _description(item: any) {
      this.description = item.about.description;
    }
    private _url(item: any) {
        this.url = item.file.url;
      }
      private _amount(item: any) {
        this.amount = item.features.amount;
      }
      private _comission(item: any) {
        this.comission = item.features.comission;
      }
      private _period(item: any) {
        this.period = item.features.period;
      }


  }
