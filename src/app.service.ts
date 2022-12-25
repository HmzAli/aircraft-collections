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

    return results
  }

  async create(aircraftData: Aircraft) {
    // simple validation
    if (!aircraftData.name || !aircraftData.category) {
      throw new HttpException('Invalid post data', HttpStatus.BAD_REQUEST);
    }

    try {
      await query(`INSERT INTO ${relationName} values (DEFAULT, '${aircraftData.name}', '${aircraftData.category}', '${aircraftData.image || ''}')`)
    } catch(error) {
      console.log('Faild to create an aircraft')
      throw error
    }
  }
}
