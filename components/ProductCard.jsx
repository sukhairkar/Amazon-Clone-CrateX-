import { Button } from "./ui/button";


export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img 
        src={product.img} 
        alt={product.name} 
        style={{ 
          width: "100%", 
          height: "200px", 
          objectFit: "contain", 
          marginBottom: "12px",
          borderRadius: "6px"
        }} 
      />
      <hr></hr>
      <h2 style={{fontSize:"40px"}}>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <Button variant="outline" className="buy-button" style={{ marginTop: "10px" }}>
        Buy Now
      </Button>
    </div>
  );
}
