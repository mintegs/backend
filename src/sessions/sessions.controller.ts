import { Controller } from '@nestjs/common';

/**
 * The SessionController handles incoming requests related to sessions.
 * It is decorated with the Controller decorator, indicating that it
 * is a NestJS controller responsible for processing routes that start
 * with 'sessions'. Additional route handling methods can be added in
 * this class to define specific actions for session management.
 */
@Controller('sessions')
export class SessionsController {}
