import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [merchants, setMerchants] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://staging.api.1m.app/api/merchants/merchandises?merchantUserName=wokcano_tustin'); // Replace with your API endpoint
                const jsonData = await response.json();
                console.log(jsonData)
                setMerchants(jsonData.merchandises);
            } catch (error) {
                console.log('Error:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="products">
            {merchants &&
                (merchants.map((merchant, index) => (
                    <div className="product" key={index}>
                        <strong>
                        {merchant.name}
                        </strong>
                        <p>Price is: {merchant.price} $</p>
                        <img className="productImage" src={merchant.photos} alt="product picture"/>
                    </div>
                )))
            }
        </div>
    );
}

export default App;
