export class User{
  static count = 0;
  id:number = 0;
  name:string = '';
  email:string = '';
  password:string = '';

  constructor(name:string,email:string,password:string) {
    if(!name || !email || !password) return;
    User.count++
    this.id = User.count;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
