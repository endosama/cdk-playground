const baseLambda = () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Hello: "world" }),
  };
};

// exports.handler = baseLambda;
export { baseLambda };
