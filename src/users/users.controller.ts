import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-errors.class";

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: "/register", method: "post", func: this.register },
			{ path: "/login", method: "post", func: this.login },
		]);
	}
	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "register");
	}

	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(200, "auth error", "login"));
	}
}
