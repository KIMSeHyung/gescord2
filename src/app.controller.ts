import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { Public } from "./auth/guards/jwt.auth.guard";
import { LocalAuthGuard } from "./auth/guards/local.auth.guard";

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
