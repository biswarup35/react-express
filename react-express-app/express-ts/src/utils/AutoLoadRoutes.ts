import { Express } from "express";
import { readdirSync, statSync } from "fs";
import { join, parse } from "path";

export class AutoLoadRoutes {
  constructor(private app: Express) {
    this.app = app;
  }
  async loadFrom(dir: string, baseRoutePath: string = "/api") {
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const fileStat = statSync(filePath);

      if (fileStat.isDirectory()) {
        // Recursively load routes from subdirectories
        await this.loadFrom(filePath, `${baseRoutePath}/${file}`);
      } else {
        const { name } = parse(file);
        const route = await import(filePath);
        const routePath =
          name === "index" ? baseRoutePath : `${baseRoutePath}/${name}`;

        console.log({ routePath, route: route.default });

        this.app.use(routePath, route.default);
      }
    }
  }
}
