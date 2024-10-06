interface NeonCursorOptions {
    el?: HTMLElement;
    shaderPoints?: number;
    curvePoints?: number;
    curveLerp?: number;
    radius1?: number;
    radius2?: number;
    velocityTreshold?: number;
    sleepRadius?: number;
    sleepRadiusY?: number;
    sleepTimeCoefX?: number;
    sleepTimeCoefY?: number;
  }
  
  export default  function neonCursor({
    el = document.body,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shaderPoints = 16,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    curvePoints = 80,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    curveLerp = 0.5,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    radius1 = 5,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    radius2 = 30,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    velocityTreshold = 10,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sleepRadius = 100,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sleepRadiusY = 100,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sleepTimeCoefX = 0.0025,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sleepTimeCoefY = 0.0025,
  }: NeonCursorOptions): void {
    // Implement neon cursor logic here
    console.log("Neon cursor initialized", el);
    // Use the parameters to manipulate the cursor's behavior
  }
  