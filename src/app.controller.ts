import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./auth/local.auth.guard";
import { AuthService } from "./auth/auth.service";
import { Public } from "./auth/jwt.auth.guard";

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
}
