import { Controller, Get, Post, Delete, Body, HttpCode} from '@nestjs/common';
import { Aircraft } from './types';
import { AppService } from './app.service';
import { Request,} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/v1/aircraft')
  async getAircrafts(): Promise<Aircraft[]> {
    const aircraft: Aircraft[] = await this.appService.getAll()
    return aircraft
  }

  @HttpCode(201)
  @Post('/v1/aircraft')
  async createAircraft(@Body() aircraftData: Aircraft): Promise<string> {
    try {
      await this.appService.create(aircraftData)
    } catch(error) {
      throw error
    }

    return 'Aircraft added successfully'
  }
}
