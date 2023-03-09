import React from 'react'
import { useParams } from 'react-router-dom'

function UpdatePlace() {
    const placeId = useParams().placeId;
    const items = [
        {
            id: 'p1',
            title: 'Minar-e-Pakistan',
            address: 'Lahore, Pakistan',
            description: 'Minar-e-Pakistan is a national monument located in the city of Lahore, Pakistan. It was built to commemorate the Lahore Resolution of 1940, which was a key moment in the movement for an independent Pakistan.',
            imageURL: 'https://t4.ftcdn.net/jpg/00/88/44/85/360_F_88448574_l3HsAC45s70FoG5Vq1KHFvoqjytQxywY.jpg',
            creator: 'u1',
            coordinates: {
                lat: '31.5924979',
                lng: '74.3073145'
            }
        },
        {
            id: 'p2',
            title: 'Mizar-e-Quaid',
            address: 'Karachi, Pakistan',
            description: 'Mazar-e-Quaid, also known as Jinnah Mausoleum or the National Mausoleum, is the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, it was completed in 1971, and is an iconic symbol of Karachi as well as one of the most popular tourist sites in the city.',
            imageURL: 'https://blog.graana.com/wp-content/uploads/2022/03/0f62dd7db5572ff8e87d34d957464495.jpg',
            creator: 'u1',
            coordinates: {
                lat: '24.8746285',
                lng: '67.0373531s'
            }

        },
        {
            id: 'p3',
            title: 'Pakistan Monument',
            address: 'Islamabad, Pakistan',
            description: 'The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. It is dedicated to the people of Pakistan who sacrificed their "today" for a better "tomorrow".',
            imageURL: 'https://www.pakistanhc.lk/wp-content/uploads/2018/10/Sleeve-Cover-Pakistan-Monument-Islamabad-a-national-monument-representing-the-nations-four-provinces-and-three-territories-Courtesy-WikiPedia-960x640.jpg',
            creator: 'u2',
            coordinates: {
                lat: '33.6930765',
                lng: '73.0667101'
            }
        },
    ]
    const identifiedPlace = items.find(p => p.id === placeId);
    if (!identifiedPlace) {
        return <div className='center'><h2>Could not find this place.</h2></div>
    }
    return (
        <div>UpdatePlace</div>
    )
}

export default UpdatePlace