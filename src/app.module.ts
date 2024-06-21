import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './Users/users.module';
import { SesionesModule } from './sesiones/sesiones.module';
import { SalasModule } from './salas/salas.module';
import { EspaciosModule } from './espacios/espacios.module';
import { ReservasModule } from './reservas/reservas.module';
import { endpointsModule } from './endpoints/endpoints.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // No usar en producción
      extra: {
        ssl:true
      }
    }),
    UsersModule,
    SesionesModule,
    SalasModule,
    EspaciosModule,
    ReservasModule,
    endpointsModule,
  ],
})
export class AppModule {}
