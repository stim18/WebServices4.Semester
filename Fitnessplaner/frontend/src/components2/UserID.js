import React, { useEffect, useState } from 'react';

function ID() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('/training/all');
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      {
        items.length > 0 ?
          items.map(item => (
            <div className="container-fluid p-3 w-50" key={item.id}>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body p-1">
                    <h6 className="card-title">{item.userid}</h6>
                  </div>
                </div>
              </div>
            </div>
          )) :
          <div>Hallo Welt</div>
      }
    </section>
  );
}

export default ID;
