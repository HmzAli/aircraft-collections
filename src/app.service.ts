import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Aircraft } from './types';
import { query } from './db';

const relationName: string = 'aircraft'

@Injectable()
export class AppService {
  getHome(): string {
    return 'Hello words!';
  }

  async getAll(): Promise<Aircraft[]> {
    let results;

    try {
      results = await query(`SELECT * FROM ${relationName}`)
    } catch (error) {
      console.log('Failed to fetch aircrafts')
      throw error
    }
     
    console.log(results);
    return results
  }

  create(aircraftData: Aircraft) {
    
  }
}
