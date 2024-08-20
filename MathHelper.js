export class MathHelper {
    constructor() {}

    static distance(_x1, _y1 , _x2, _y2) {
        const result = Math.sqrt(Math.pow((_x2 -_x1),2) + Math.pow((_y2 -_y1),2));
        return result;
    }
}