import { LambdaStack } from "./LambdaStack";
import * as cdk from "@aws-cdk/core";
import { SynthUtils } from "@aws-cdk/assert";
import "@aws-cdk/assert/jest";

const mockedEnv = {
  env: {
    account: "111111111111",
    region: "eu-west-2",
  },
};

describe("LambdaStack", () => {
  it("should match the snapshot", () => {
    const app = new cdk.App();
    const stack = new LambdaStack(app, "Test", mockedEnv);
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });

  it("should contain a lambda function with the correct name", () => {
    const app = new cdk.App();
    const stack = new LambdaStack(app, "Test", mockedEnv);
    expect(stack).toHaveResource("AWS::Lambda::Function");
  });
});
