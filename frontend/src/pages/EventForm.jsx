import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const LocationPicker = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    location: [51.505, -0.09],
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const communityId = window.location.pathname.split("/")[2];

    try {
      const response = await fetch(
        `http://localhost:5001/api/community/${communityId}/event`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );

      const data = await response.json();
      console.log("Submitted:", data);

      if (response.ok) {
        alert("Event submitted successfully!");
        setEventData({
          name: "",
          description: "",
          date: "",
          location: [51.505, -0.09],
        });
      } else {
        console.error("Backend error:", data);
        alert(data.message || "Failed to submit event.");
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Something went wrong while submitting the event.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Submit an Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Event Name"
            value={eventData.name}
            onChange={handleChange}
            required
          />
          <Textarea
            name="description"
            placeholder="Event Description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
          <Input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />

          <div className="text-sm text-gray-500">
            Location: {eventData.location[0].toFixed(4)}, {eventData.location[1].toFixed(4)}
          </div>

          <div className="h-64 rounded-lg overflow-hidden">
            <MapContainer
              center={eventData.location}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={eventData.location} />
              <LocationPicker
                setLocation={(coords) =>
                  setEventData({ ...eventData, location: coords })
                }
              />
            </MapContainer>
          </div>

          <Button type="submit" className="w-full">
            Submit Event
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
