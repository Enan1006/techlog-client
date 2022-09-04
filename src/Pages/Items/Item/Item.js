import React from 'react';

const Item = (props) => {
    const { image, name, price, category } = props.item;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-52 h-52' src={image} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p> <strong>Price: ${price}</strong> </p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">{category}</div>
                    </div>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary"><i class="fa-solid fa-bag-shopping mr-3"></i>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;