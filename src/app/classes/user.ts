export class User {
  name: string;
  email: string;
  phone: number;
  address: {
    street: string;
    suite: number;
    city: string;
    zipcode: number;
  }
}
