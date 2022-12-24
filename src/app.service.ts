import { Injectable } from '@nestjs/common';
import { Aircaft } from './aircraft';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Hello World!';
  }

  getAll(): Aircaft[] {
    return [
      {
        id: 0,
        name: '',
        category: '',
        image: ''
      }
    ]
  }

  create(aircraftData: Aircaft) {
    console.log('>> ', aircraftData)
  }
}
