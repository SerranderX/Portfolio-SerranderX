import { AppLenguageData } from '@interfaces/appLenguageData.interface';
import { es } from '@utils/lenguage/es';
import { us } from '@utils/lenguage/us';
import { useEffect, useState } from 'react';

export interface AppLenguageInterface {
    lenguageSelected: string;
    changeLenguageSelected: (lenguage:string) => void;
    lenguageSelectedData: AppLenguageData;
    lenguageList: AppLenguageData[];
}


const getLenguage = (lenguageSelected: string) => {
    switch (lenguageSelected) {
        case 'es':
            return es;
        case 'us':
            return us;
        default:
            return es;
    }
}

export const useLenguage = (): AppLenguageInterface => {
    const [lenguageSelected, setLenguageSelected] = useState("es");
    const [lenguageSelectedData, setLenguageSelectedData] = useState(getLenguage(lenguageSelected));
    const lenguageList = [es, us];

    const changeLenguageSelected = (lenguage: string) => {
        const lenguageFinded: AppLenguageData | undefined = lenguageList.find(lenguageItem => lenguageItem.lenguage === lenguage);

        if(lenguageFinded){
            setLenguageSelected(lenguageFinded.lenguage);
        }
    }

    useEffect(() => {
        if(lenguageSelectedData.lenguage !== lenguageSelected){
            setLenguageSelectedData(getLenguage(lenguageSelected));
        }
    }, [lenguageSelected]);

    return {
        lenguageSelected,
        changeLenguageSelected,
        lenguageSelectedData,
        lenguageList
    }
}