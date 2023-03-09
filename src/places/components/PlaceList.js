import React from 'react'

import './PlaceList.css'
import Card from '../../shared/Components/UIelements/Card/Card'
import PlaceItem from './PlaceItem'

function PlaceList(props) {
    if (props.places.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No places found. May be create one?</h2>
                    <button className='place-list__button' onClick={() => props.history.push('/create-place')}>Create a place</button>
                </Card>
            </div>
        )
    }
    return (
        <ul className='place-list'>
            {props.places.map(place =>
                <PlaceItem key={place.id}
                    id={place.id}
                    title={place.title}
                    image={place.imageURL}
                    description={place.description}
                    address={place.address}
                    creator={place.creator}
                    coordinates={place.coordinates} />
            )}
        </ul>
    )
}

export default PlaceList