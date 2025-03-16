import React, { useEffect, useState } from "react"
import axios from 'axios'
import icon from "../assets/tiktok-icon.svg"; // Replace with actual icon path

const CarouselCard1 = ({
    images,
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
            <div className="images-container">
                {/* Render all images */}
                {images.map((imgSrc, index) => (
                    <img key={index} className="image" src={imgSrc} alt={`Property ${index + 1}`} />
                ))}
            </div>
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
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/api/properties?populate=images`, {
                    responseType: "json",
                    'Access-Control-Allow-Origin': '*',
                });
                console.log("Fetched Data:", response?.data); // Debugging
                console.log("📌 API Response:", response?.data)

                // const propertiesData = response?.data?.data ?? [];

                const propertiesData = response?.data?.data || response.data

                if (!Array.isArray(propertiesData)) {
                    throw new Error("Invalid response structure");
                }
                if (propertiesData.length === 0) {
                    console.warn("⚠️ No properties found, but API responded successfully.");
                } else {
                    console.log("✅ Properties found:", propertiesData);
                }
                const parsedProperties = propertiesData.map((property) => ({
                    id: property.id,
                    address: property.address,
                    price: property.price,
                    bedrooms: property.bedrooms,
                    bathrooms: property.bathrooms,
                    sqft: property.sqft,
                    listingstatus: property.listingstatus,
                    zillowlink: property.zillowlink,
                    images: property.images || [], // Directly use backend-provided URLs
                }));

                console.log("✅ Parsed Properties:", parsedProperties);
                setProperties(parsedProperties);
            } catch (err) {
                setError('Failed to fetch property data');
                console.error("Error fetching properties:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    // if (!properties.length) return <p>No properties available</p>;

    return (
        <section className="carousel-section">
            <h1 className="title">{title}</h1>
            <div className="carousel-container">
                {properties.map((property, index) => {
                    console.log(`Rendering property ID ${property.id}, Image URL:`, property.images[0]); // ✅ Inside map()

                    return (
                        <CarouselCard1
                            key={property.id || index}
                            images={property.images}
                            icon={icon}
                            iconLink={property.zillowlink || '#'}
                            address={property.address}
                            price={`$${property.price}`}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            sqft={property.sqft}
                            listingstatus={property.listingstatus}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default CarouselSection