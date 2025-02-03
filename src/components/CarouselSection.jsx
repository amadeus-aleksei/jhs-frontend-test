import React, { useEffect, useState } from "react"
import axios from 'axios'
import icon from "../assets/tiktok-icon.svg"; // Replace with actual icon path

const CarouselCard1 = ({
    imgSrc,
    iconLink,
    icon,
    address,
    price,
    bedrooms,
    bathrooms,
    sqft,
    listingstatus
}) => {
    return (
        <article className="carousel-card-1">
            {/* <img className="image" src={imgSrc} alt="Property" /> */}
            <div className="content">
                <div className='content-left'>
                    <address className='row-top'>{address}</address>
                    <p className='row-middle'>{price}</p>
                    <ul className='row-bottom'>
                        <li>{bedrooms} Beds</li>
                        <li>{bathrooms} Baths</li>
                        <li>{sqft} Sq Ft</li>
                    </ul>
                </div>
                <div className='content-right'>
                    <div className='banner'>
                        {listingstatus}
                    </div>
                    <a href={iconLink}>
                        <img className="icon" src={icon} alt="icon" />
                    </a>
                </div>
            </div>
        </article>
    )
}

const CarouselSection = ({ title }) => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/properties')
                console.log("Fetched Data:", response.data); // Debugging
                let data = response.data

                // Ensure data is an array and contains at least one property
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error("No properties found");
                }

                setProperty(data[0])
            } catch (err) {
                setError('Failed to fetch property data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!property) return <p>No properties available</p>;

    return (
        <section className="carousel-section">
            <h1 className="title">{title}</h1>
            <CarouselCard1
                // imgSrc={property.images[0]?.url || 'property-showcase.png'} // Use a default image if none provided
                icon={icon}
                iconLink={property.zillowlink || '#'}
                address={property.address}
                price={`$${property.price}`}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                sqft={property.sqft}
                listingstatus={property.listingstatus}
            />
        </section>
    )
}

export default CarouselSection