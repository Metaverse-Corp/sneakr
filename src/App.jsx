import React from "react";
import { ArrowRight, ShoppingBag, Menu, Star } from "lucide-react";
import "./Hero.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home" aria-label="SNEAKR home">SNEAKR<span>.</span></a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#collections">Collections</a>
        <a href="#about">About</a>
      </div>
      <div className="nav-actions">
        <a className="cart-btn" href="#shop"><ShoppingBag size={17} /><span>Cart (0)</span></a>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={23} /></button>
      </div>
    </nav>
  );
}

function RunningScene() {
  return (
    <div className="sneakr-hero-scene" aria-hidden="true">
      <img src="/sneakr-landing.gif" alt="" className="sneakr-landing-animation" />
    </div>
  );
}

function Hero() {
  return (
    <main className="hero" id="home">
      <RunningScene />
      <div className="hero-atmosphere" aria-hidden="true" />
      <Navbar />
      <section className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />THE FUTURE OF FOOTWEAR</div>
          <h1>STEP INTO<span>SOMETHING NEW.</span></h1>
          <p>Not just sneakers. A statement. Discover exclusive footwear designed for movement, comfort and individuality. Find your next favourite pair.</p>
          <div className="hero-actions">
            <a href="#shop" className="primary-button">Explore Collection<ArrowRight size={18} /></a>
            <a href="#collections" className="secondary-button">Discover More</a>
          </div>
          <div className="hero-stats">
            <div><strong>500+</strong><small>Premium Sneakers</small></div>
            <div><strong>10K+</strong><small>Happy Customers</small></div>
            <div><strong>4.9 <Star size={15} fill="currentColor" /></strong><small>Customer Rating</small></div>
          </div>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span className="caption-line" /><span>NEW COLLECTION</span></div>
      </section>
    </main>
  );
}

export default function App() {
  return <Hero />;
}
