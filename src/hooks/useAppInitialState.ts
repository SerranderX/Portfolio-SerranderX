import React from 'react';
import { CarouselFiltersInterface } from '@interfaces/carouselFiltersa.interface';
import { useCarouselFilters } from './useCarouselFilters/useCarouselFilters';
import { AppInitialState } from '@interfaces/appInitialStatea.interface'; 
import { AppLenguageInterface, useLenguage } from '@hooks/useLenguage';

export const useAppInitialState = ():AppInitialState => {
    const carouselFiltersState: CarouselFiltersInterface[] = useCarouselFilters();
    const lenguageState: AppLenguageInterface = useLenguage();

    return {
        filters: carouselFiltersState,
        lenguageState: lenguageState
    }
};