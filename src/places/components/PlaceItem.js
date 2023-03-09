import React, { useState } from 'react'

import Card from '../../shared/Components/UIelements/Card/Card'
import './PlaceItem.css'
import Button from '../../shared/Components/FormElements/Button/Button'
import Modal from '../../shared/Components/UIelements/Modal/Modal';

function PlaceItem(props) {
    const [showMap, setShowMap] = useState(false);

    const showMapHandler = () => {
        setShowMap(true);
    }
    const closeMapHandler = () => {
        setShowMap(false);
    }
    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place_item__modal-content"
                footerClass="place_item__modal-actions"
                footer={<button onClick={closeMapHandler}>Close</button>}
            >
                <div className='map-container'>
                    <h2>The map</h2>
                </div>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'><img src={props.image} alt={props.title} /></div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={showMapHandler}>View on Map</Button>
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>

        </React.Fragment>
    )
}

export default PlaceItem