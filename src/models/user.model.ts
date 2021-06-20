export class User {
  constructor(
    public userName: string = '',
    public coins: number = 100,
    public moves: Array<move>,
    public _id?: string
  ) {}

  setId?() {
    this._id = makeId();
  }
}
export interface move {
  toId: string;
  to: string;
  transferAt: any;
  transferTime: any;
  amount: number;
}
function makeId(length = 5) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
