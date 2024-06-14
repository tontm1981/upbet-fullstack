import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogoModule } from './jogo/jogo.module'; // Importe o JogoModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'jogo',
      password: 'jogo',
      database: 'jogo',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
    }),
    JogoModule, // Adicione o JogoModule aos imports
  ],
})
export class AppModule {}
