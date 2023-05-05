import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as filtersActions from '../../redux/filtros/filters-actions'
import {
    ContainerFilter,
    ImgWatch,
    Title
} from './filtersStyles'

export const Filter = ({img ,title, category}) => {
    const categoryselected = useSelector(
        state => state.filters.selectedCategory
    );

    const dispatch = useDispatch();

    return (
        <ContainerFilter
            selected={category === categoryselected}
            onClick={ () => dispatch(filtersActions.selectCategory(category))}
        >
            <ImgWatch src={img} alt={title}/>
            <Title selected={category === categoryselected}>{title}</Title>
        </ContainerFilter>
    )
}

export default Filter