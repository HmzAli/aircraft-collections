import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { Aircaft } from './aircraft';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/v1/aircraft')
  getAircrafts(): Aircaft[] {
    return this.appService.getAll()
  }

  @Post('/v1/aircraft')
  async createAircraft(@Body() aircraftData: Aircaft) {
    return this.appService.create(aircraftData)
  }
}
