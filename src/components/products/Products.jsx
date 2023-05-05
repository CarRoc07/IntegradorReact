import React, { useEffect, useState } from 'react'
import ProductCard from './Cardproduct';
import { ProductsData } from '../../data/ProductData';
import { useSelector } from 'react-redux';
import { ContainerProducts, PaginationContainer, ButtonPagination } from './ProductsStyles';


let INITIAL_LIMIT = 8;

const Products = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);

    const selectedCategory = useSelector(
        state => state.filters.selectedCategory
    )

    let products = ProductsData;

    if(selectedCategory) {
        products = ProductsData.filter(product => product.category === selectedCategory)
    }

    useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

    return (
        <>
        <ContainerProducts >
            { !selectedCategory 
                ? (ProductsData.map((product, i) => limit > i ? (<ProductCard key={product.id} {...product} />) : null))
                : (products.map(product => (<ProductCard key={product.id} {...product} />)))   
            }
        </ContainerProducts>
        {
            !selectedCategory && (
                <PaginationContainer>
                    <ButtonPagination
                        onClick={ () => setLimit(limit - INITIAL_LIMIT)}
                        disabled= { INITIAL_LIMIT === limit }
                        >
                        Ver menos
                    </ButtonPagination>
                    <ButtonPagination
                        onClick={ () => setLimit(limit + INITIAL_LIMIT)}
                        disabled={ ProductsData.length <= limit }
                        >
                        Ver más
                    </ButtonPagination>
                </PaginationContainer>
            )
        }
        </>
        
    )
};

export default Products