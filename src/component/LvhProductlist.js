import React, { Component } from 'react';

class LvhProductlist extends Component {
  lvhHandleEdit = (product) => {
    console.log("Edit:", product);
    this.props.tvcOnEdit(product);
  }

  render() {
    const { renderProducts } = this.props;
    console.log("Product:", renderProducts);
    
    const elementProduct = renderProducts.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.active ? 'Hiển thị' : 'Ẩn'}</td>
          <td>
            <button
              className='btn btn-success mx-1'
              name='lvhBtnEdit'
              onClick={() => this.lvhHandleEdit(item)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              className='btn btn-danger mx-1'
              name='lvhBtnDelete'
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Danh Sách Sản Phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LvhProductlist;
