const { useState } = React;

export function EventRSVPForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    totalAttandees: 0,
    dietaryPreference: "",
    isBrigingGuests: false,
  });

  const handleFormChange = (e) => {
    const { name, value, checked } = e.target;

    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="main-heading">Event RSVP Form</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleFormChange}
            placeholder="Your Email"
            required
          />
        </label>
        <label htmlFor="">
          Number of Attendees:
          <input
            type="number"
            name="totalAttandees"
            id=""
            min="1"
            value={formData.totalAttandees || ""}
            onChange={handleFormChange}
            placeholder="Number of Attendees"
            required
          />
        </label>
        <label htmlFor="">
          Dietary Preferences:
          <input
            type="text"
            name="dietaryPreference"
            id=""
            value={formData.dietaryPreference}
            onChange={handleFormChange}
            placeholder="Dietary Preferences (Optional)"
          />
        </label>
        <label htmlFor="">
          Bringing additional guests?
          <input
            type="checkbox"
            name="isBrigingGuests"
            id=""
            checked={formData.isBrigingGuests}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit" className="submit-btn">
          Submit RSVP
        </button>
      </form>
      {isSubmitted && (
        <div className="form-data-container">
          <h2 className="data-heading">RSVP Submitted</h2>
          <p>
            <span className="bold">Name:</span> {formData.name}
          </p>
          <p>
            <span className="bold">Email:</span> {formData.email}
          </p>
          <p>
            <span className="bold">Number of attendees:</span>{" "}
            {formData.totalAttandees}
          </p>
          <p>
            <span className="bold">Dietary Preferences:</span>{" "}
            {formData.dietaryPreference || "None"}
          </p>
          <p>
            <span className="bold">Bringing additional guests:</span>{" "}
            {formData.isBrigingGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
