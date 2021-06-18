import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { LambdaStack } from "../stack/LambdaStack";

function getParams(keyName: string, environment = "ENV") {
  return app.node.tryGetContext(keyName)[app.node.tryGetContext(environment)];
}

const app = new cdk.App();

new LambdaStack(app, "LambdaStack", {
  env: getParams("aws_env_details"),
});
