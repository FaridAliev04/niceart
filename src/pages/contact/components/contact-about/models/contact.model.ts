export default class contactModel {
    public phone:string=""
    public email:string="";
    public location:string="";
    public callcenter: string = "";
    


    constructor(item:any) {
      this._phone(item);
      this._email(item);
      this._location(item);
      this._callcenter(item);
    }
  

    private _callcenter(item: any) {
      this.callcenter = item.record.callcenter;
    };
    private _email(item: any) {
        this.email = item.record.email;
      };
      private _location(item: any) {
        this.location = item.record.location;
      };
      private _phone(item: any) {
        this.phone = item.record.phone;
      }

  }
