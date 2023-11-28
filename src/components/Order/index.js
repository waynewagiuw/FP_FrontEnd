import React from "react";

const index = () => {
  return (
    <section id="food-menu" className="bag">
      <h2 className="food-menu-heading">ORDER</h2>
      <div className="food-menu-container container">
        <div className="food-menu-item">
          <div className="food-img">
            <img
              src="https://img-global.cpcdn.com/recipes/298d53dbde193855/680x482cq70/mie-goreng-jawa-foto-resep-utama.jpg"
              alt="error"
            />
          </div>
          <div className="food-description">
            <h2 className="food-titile">Mie Gori</h2>
            <p>Level : EASY, MEDIUM, BRUTAL</p>
            <p className="food-price">RP 18.000</p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img
              src="https://www.whiteboardjournal.com/wp-content/uploads/2020/09/PTG-NasGorDarHoki-3.jpg"
              alt="error"
            />
          </div>
          <div className="food-description">
            <h2 className="food-titile">Nasi Gori</h2>
            <p>Level : EASY, MEDIUM, BRUTAL</p>
            <p className="food-price">Rp 20.000</p>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="container-k">
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>Gori</th>
                <th>HARGA</th>
                <th>PEDAS</th>
                <th>TAMBAHAN</th>
                <th>JUMLAH</th>
                <th>ALAMAT</th>
              </tr>
              <tr>
                <td data-th="title">MIE GORI</td>
                <td data-th="price">Rp 18.000</td>
                <td>
                  <select>
                    <option />
                    <option>EASY</option>
                    <option>MEDIUM</option>
                    <option>BRUTAL</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option />
                    <option>SOSIS</option>
                    <option>TELUR</option>
                  </select>
                </td>
                <td data-th="quantity">
                  <input
                    type="number"
                    id="qty1"
                    defaultValue={0}
                    placeholder="Enter Quantity"
                  />
                </td>
                <td>
                  <form>
                    <label htmlFor="Masukan Alamat " />
                    <input
                      id="alamat"
                      name="alamat"
                      placeholder="Masukan alamat tujuan..."
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td data-th="title">Nasi Gori</td>
                <td data-th="price">Rp 20.000</td>
                <td>
                  <select>
                    <option />
                    <option>EASY</option>
                    <option>MEDIUM</option>
                    <option>BRUTAL</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option />
                    <option>TUNA</option>
                    <option>SOSIS</option>
                  </select>
                </td>
                <td data-th="quantity">
                  <input
                    type="number"
                    id="qty2"
                    defaultValue={0}
                    placeholder="Enter Quantity"
                  />
                </td>
                <td>
                  <h5>METODE PEMBAYARAN :</h5>
                  <select>
                    <option />
                    <option>BAYAR DI TEMPAT</option>
                    <option>TRANSFER BANK</option>
                    <option>DANA</option>
                    <option>GOPAY</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onclick="total()"
            className="button-1"
            style={{ paddingLeft: 48, marginLeft: 200 }}
          >
            Total Cost
          </button>
          <button
            onclick="submit()"
            className="button-1"
            style={{ marginLeft: 20 }}
          >
            Submit Order
          </button>
          <div className="result" id="total_cost" style={{ marginLeft: 250 }}>
            Rp 0.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
