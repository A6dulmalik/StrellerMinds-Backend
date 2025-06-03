import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    check() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
        };
    }

    @Get('db')
    async checkDatabase() {
        return this.healthService.checkDatabase();
    }
} 