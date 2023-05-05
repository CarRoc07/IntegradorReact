import React from 'react'
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { ContainerFilters } from './filtersStyles'

const Filters = () => {
    const filters = useSelector( state => state.filters.filters)
    return (
        <ContainerFilters>
            {filters.map(type => <Filter key={type.id} {...type} />)}
        </ContainerFilters>
    )
}

export default Filters; 