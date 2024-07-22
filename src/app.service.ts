import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
   if(process.env.NODE_ENV === 'production'){
      return 'Hello World! This is a production environment';
    }else{
      return 'Hello World! This is a development environment';
    }
  }
}
