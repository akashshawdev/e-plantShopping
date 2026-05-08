import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, selectCartItems, selectTotalQuantity } from "./CartSlice";

// ─── Plant Data ─────────────────────────────────────────────────────────────
const plantCategories = [
  {
    id: "air-purifying",
    name: "Air Purifying Plants",
    emoji: "🌬️",
    subtitle: "Clean the air and freshen your home naturally",
    plants: [
      {
        id: "ap1",
        name: "Peace Lily",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&q=80",
      },
      {
        id: "ap2",
        name: "Spider Plant",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1572544885015-c6c7b41bbddc?w=400&q=80",
      },
      {
        id: "ap3",
        name: "Snake Plant",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=400&q=80",
      },
      {
        id: "ap4",
        name: "Aloe Vera",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80",
      },
      {
        id: "ap5",
        name: "Pothos",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&q=80",
      },
      {
        id: "ap6",
        name: "English Ivy",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1555955257-5f0f0a23c6a7?w=400&q=80",
      },
    ],
  },
  {
    id: "tropical",
    name: "Tropical Plants",
    emoji: "🌴",
    subtitle: "Bring lush, exotic vibes to your living space",
    plants: [
      {
        id: "tp1",
        name: "Monstera Deliciosa",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1600411833114-96a8b43fc3db?w=400&q=80",
      },
      {
        id: "tp2",
        name: "Bird of Paradise",
        price: 34.99,
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&q=80",
      },
      {
        id: "tp3",
        name: "Fiddle Leaf Fig",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1602923668104-8f9e03f24d8f?w=400&q=80",
      },
      {
        id: "tp4",
        name: "Calathea Orbifolia",
        price: 21.99,
        image:
          "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&q=80",
      },
      {
        id: "tp5",
        name: "Philodendron",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80",
      },
      {
        id: "tp6",
        name: "Rubber Plant",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80",
      },
    ],
  },
  {
    id: "succulents",
    name: "Succulents & Cacti",
    emoji: "🌵",
    subtitle: "Low-maintenance beauties for busy plant lovers",
    plants: [
      {
        id: "sc1",
        name: "Echeveria",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
      },
      {
        id: "sc2",
        name: "Haworthia",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80",
      },
      {
        id: "sc3",
        name: "Barrel Cactus",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=400&q=80",
      },
      {
        id: "sc4",
        name: "Jade Plant",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80",
      },
      {
        id: "sc5",
        name: "Zebra Plant",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1594736797933-d0401ba2b65a?w=400&q=80",
      },
      {
        id: "sc6",
        name: "Prickly Pear",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1525438160292-a4a860951216?w=400&q=80",
      },
    ],
  },
];

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        🌿 Paradise <span>Nursery</span>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Plants</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon-link" aria-label="Shopping Cart">
            🛒
            <span className="cart-badge">{totalQuantity}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// ─── Plant Card ───────────────────────────────────────────────────────────────
const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-card-body">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-price">${plant.price.toFixed(2)}</div>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

// ─── Product List Page ────────────────────────────────────────────────────────
const ProductList = () => {
  return (
    <div className="product-page">
      <Navbar />

      <div className="product-page-hero">
        <h1>Our Plant Collection</h1>
        <p>Handpicked greenery for every corner of your home</p>
      </div>

      {plantCategories.map((category) => (
        <div key={category.id} className="category-section">
          <h2 className="category-title">
            {category.emoji} {category.name}
          </h2>
          <p className="category-subtitle">{category.subtitle}</p>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Navbar };
export default ProductList;
