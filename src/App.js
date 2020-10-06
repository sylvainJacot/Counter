import React from 'react';
import CardOrder from "./components/CardOrder/CardOrder";
import {GlobalStyle} from "./components/atoms/GlobalStyle";
import CardOrderContextProvider from "./components/CarOrderContext";
import {Orders} from "./components/atoms/OrderMock";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <CardOrderContextProvider>

            {Orders.map((OrderItem,index) => (
                <CardOrder
                    key={index}
                    orderLabel={OrderItem.label}
                    status={OrderItem.status}
                    countingvalue={0}
                    ListItemMapped={OrderItem.orderItems}
                />

            ))

            }


        </CardOrderContextProvider>
    </div>
  );
}

export default App;
