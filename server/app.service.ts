import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import assetJson from "../assets.json"

type InitialRenderData = {
  bundlePath: string,
}

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  renderApp(): InitialRenderData {
    const env = this.configService.get("NODE_ENV")
    const assetPrefix = env == "development" ? "http://localhost:4000/" : "/dist/";
    return { bundlePath: assetPrefix + assetJson.main.js }
  }
}