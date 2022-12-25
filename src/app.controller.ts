import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
  Param,
} from '@nestjs/common';

import { Aircraft, DeleteParam } from './types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/v1/aircraft')
  async getAircrafts(): Promise<Aircraft[]> {
    const aircraft: Aircraft[] = await this.appService.getAll();
    return aircraft;
  }

  @HttpCode(201)
  @Post('/v1/aircraft')
  async createAircraft(@Body() aircraftData: Aircraft): Promise<string> {
    // simple validation
    if (!aircraftData.name || !aircraftData.category) {
      throw new HttpException('Invalid post data', HttpStatus.BAD_REQUEST);
    }

    try {
      await this.appService.create(aircraftData);
    } catch (error) {
      throw error;
    }

    return 'Aircraft added successfully';
  }

  @HttpCode(202)
  @Delete('/v1/aircraft/:id')
  async deleteAircraft(@Param() { id }: DeleteParam): Promise<string> {
    if (typeof Number(id) != 'number') {
      throw new HttpException(
        `Invalid aircraft id ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const deletedAircraft: Aircraft[] = await this.appService.delete(id);
      if (deletedAircraft.length == 0) {
        throw new HttpException(
          `Aircraft id ${id} doesn't exist`,
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw error;
    }

    return 'Aircraft deleted successfully';
  }
}
