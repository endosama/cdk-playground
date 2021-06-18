import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(`${"./src/lambda/"}`),
      handler: "BaseLambda.handler",
      tracing: lambda.Tracing.ACTIVE,
    });
  }
}
