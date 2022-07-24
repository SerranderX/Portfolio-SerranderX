import React from 'react';

interface FilterButtonProps {
    children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({children}) => {
    

    return (
        <>
            {children}
        </>
    );
};

export default FilterButton;