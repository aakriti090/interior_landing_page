import React from 'react';
import '../styles/collections.css';

function Collections() {
  const rooms = [
    {
      name: 'Kitchen Room',
      img: '/images/kitchen.png',
      desc: 'Stylish and functional designs to inspire your cooking space. Includes ergonomic layouts, smart storage solutions, and modern finishes to make cooking a joy while keeping your kitchen organized and beautiful.'
    },
    {
      name: 'Living Room',
      img: '/images/livingroom.png',
      desc: 'Comfortable, modern furniture for a cozy family area. Discover plush sofas, elegant lighting, and versatile decor ideas that balance style and comfort for relaxing or entertaining guests.'
    },
    {
      name: 'Dining Room',
      img: '/images/dining.png',
      desc: 'Elegant pieces perfect for gatherings and shared meals. From extendable tables to stylish chairs, create a welcoming space for family dinners, parties, or intimate meals with friends.'
    },
    {
      name: 'Bedroom',
      img: '/images/bedroom.png',
      desc: 'Soft textures and calming tones for better sleep. Explore luxurious bedding, smart storage, and ambient lighting to transform your bedroom into a peaceful sanctuary for rest and relaxation.'
    },
  ];

  return (
    <section className="collections">
      <h2>Shop By Room</h2>
      <p>Discover furniture and decor for every room in your home, from living rooms to bedrooms, kitchens, and more.</p>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.img} alt={room.name} className="room-img" />
            <div className="room-name">{room.name}</div>
            <div className="room-overlay">
              <div className="room-details">
                <p>{room.desc}</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;
