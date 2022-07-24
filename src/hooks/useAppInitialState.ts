import React from 'react';
import { CarouselFiltersInterface } from '@interfaces/CarouselFilters.interface';
import { useCarouselFilters } from './useCarouselFilters/useCarouselFilters';
import { AppInitialState } from '@interfaces/AppInitialState.interface'; 

export const useAppInitialState = ():AppInitialState => {
    const carouselFiltersState: CarouselFiltersInterface = useCarouselFilters();

    return {
        ...carouselFiltersState
    }
};