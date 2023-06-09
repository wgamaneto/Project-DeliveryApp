import styled from 'styled-components';
import propTypes from 'prop-types';
import dataTestsIds from '../utils/dataTestIds';

const ListOrdersDetails = styled.table`
  margin-top: 30px;
  .tableOrder-id {
    background-color: #DC8332;
  }

  .tableOrder-description {
    background-color: #EEB82E;
    width: 98%;
  }

  .tableOrder-quantity {
    background-color: #DC8332;
  }

  .tableOrder-price {
    background-color: #EEB82E;
  }

  .tableOrder-totalPrice {
    background-color: #DC8332;
  }
  
  .tableOrder-item {
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
  }
`;

const InfosDetails = styled.div`
    margin: auto;
    button {
      box-shadow: 1px 1px 1px #000;
      background-color: #EEB82E;
      width: 150px;
      height: 40px;
      margin: 20px;
      color: white;
    }
    background-color: #C94E35;
`;

export default function TableOrders({ sales: { items }, status, handleStatus }) {
  return (
    <>
      <InfosDetails>
        <p
          data-testid={ `${dataTestsIds[41]}` }
          className="detailsStatus"
        >
          { `Status: ${status}` }
        </p>
        <button
          type="button"
          data-testid={ `${dataTestsIds[48]}` }
          disabled={ status !== 'Em Trânsito' }
          value="Entregue"
          onClick={ (event) => handleStatus(event) }
          className="detailsBtn"
        >
          MARCAR COMO ENTREGUE
        </button>
      </InfosDetails>
      <ListOrdersDetails>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map((item) => (
            <tr key={ item.id } className="tableItemsTr">
              <td
                data-testid={ `${dataTestsIds[42]}${item.id}` }
              >
                <p className="tableOrder-id tableOrder-item">{item.id}</p>
              </td>
              <td
                data-testid={ `${dataTestsIds[43]}${item.id}` }
                n
              >
                <p className="tableOrder-description tableOrder-item">{item.name}</p>
              </td>
              <td
                data-testid={ `${dataTestsIds[44]}${item.id}` }
              >
                <p className="tableOrder-quantity tableOrder-item">{item.quantity}</p>
              </td>
              <td
                data-testid={ `${dataTestsIds[45]}${item.id}` }
              >
                <p className="tableOrder-price tableOrder-item">{item.price}</p>
              </td>
              <td
                data-testid={ `${dataTestsIds[46]}${item.id}` }
              >
                <p className="tableOrder-totalPrice tableOrder-item">
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </ListOrdersDetails>
    </>
  );
}

TableOrders.propTypes = {
  items: propTypes.array,
  status: propTypes.string,
  handleStatus: propTypes.func,
}.isRequired;
