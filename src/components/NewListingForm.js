import { useState } from 'react';

export default function NewListingForm({addNewListing}) {

    const BLANK_FORM_DATA = {
        description: '',
        image: '',
        location: '',
    }

    const [formData, setFormData] = useState(BLANK_FORM_DATA)

    function handleChange(e) {
        const key = e.target.name;
        const val = e.target.value;
        setFormData({...formData, [key]: val})
    }

    function handleSubmit(e) {
        e.preventDefault();
        addNewListing(formData)
        setFormData(BLANK_FORM_DATA);
    }

    return (
        <div className="new-listing-form">
            <h2>Add a new listing!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description" 
                    placeholder="Description..."
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL..."
                    value={formData.image}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="location"
                    placeholder="Location..."
                    value={formData.location}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                />
            </form>
        </div>
    )
}