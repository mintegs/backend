import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * The LocalAuthGuard class extends the AuthGuard from '@nestjs/passport'
 * and specifies the 'local' strategy for authentication.
 * This guard will be used to protect routes that require local authentication,
 * ensuring that users are authenticated via the local strategy before accessing
 * the corresponding resources.
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
