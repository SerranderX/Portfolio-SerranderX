import React from 'react';
import { CarouselFiltersInterface } from '@interfaces/carouselFilters.interface';
import { useCarouselFilters } from './useCarouselFilters/useCarouselFilters';
import { AppInitialState } from '@interfaces/appInitialState.interface'; 

export const useAppInitialState = ():AppInitialState => {
    const carouselFiltersState: CarouselFiltersInterface = useCarouselFilters();

    return {
        ...carouselFiltersState
    }
};