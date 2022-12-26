import { Injectable } from '@nestjs/common';
import { Aircraft } from './types';
import { query } from './db';

const relationName = 'aircraft';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Best airshow!';
  }

  async getAll(): Promise<Aircraft[]> {
    let results;

    try {
      results = await query(`SELECT * FROM ${relationName}`);
    } catch (error) {
      console.log('Failed to fetch aircrafts');
      throw error;
    }

    return results;
  }

  async create(aircraftData: Aircraft) {
    try {
      await query(
        `INSERT INTO ${relationName} values (DEFAULT, '${
          aircraftData.name
        }', '${aircraftData.category}', '${aircraftData.image || ''}')`,
      );
    } catch (error) {
      console.log('Faild to create aircraft');
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await query(
        `DELETE FROM ${relationName} WHERE id = ${id} RETURNING id`,
      );
    } catch (error) {
      console.log('failed to delete aircraft');
      throw error;
    }
  }
}
