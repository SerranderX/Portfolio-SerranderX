import { es } from '@utils/lenguage/es';
import { us } from '@utils/lenguage/us';

export const lenguageHandler = (lenguageSelected: string) => {
    let lenguageResult: any = us;

    switch(lenguageSelected){
        case "es":
            lenguageResult = es;
            break;
        case "us":
            lenguageResult = us;
            break;
        default:
            lenguageResult = us;
            break;
    }

    return lenguageResult;
}