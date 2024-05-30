import React, { Component } from 'react';


class LvhProductAddOrEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: 'Cabbage',
      active: true,
      flag:true,
    };
  }
componentWillMount=()=>{
  let{renderProduct}=this.props;
  console.log("renderProduct:",renderProduct);
  if(renderProduct !=null){
    this.setState({
      id:renderProduct.id,
      title:renderProduct.title,
      ative:renderProduct.active,
    })
  }
}
componentWillReceiveProps=(nextProps)=>{
  let{renderProduct}=nextProps;
  console.log("nextProps:",nextProps);
  this.setState({
    id:renderProduct.id,
      title:renderProduct.title,
      ative:renderProduct.active,
      flag:false
  })

}
  lvhHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // Submit form
  lvhHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <h2>Thêm Mới Sản Phẩm</h2>
        <form className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">ID</span>
            <input
              type="text"
              className="form-control"
              placeholder="ID"
              name="id"
              value={this.state.id}
              onChange={this.lvhHandleChange}
              aria-label="ID"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Title</span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.lvhHandleChange}
              aria-label="Title"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Active</span>
            <select
              className="form-control"
              name="active"
              value={this.state.active}
              onChange={this.lvhHandleChange}
            >
              <option value={1}>Hiển thị</option>
              <option value={0}>Ẩn</option>
            </select>
          </div>

          <button className="btn btn-success" onClick={this.lvhHandleSubmit}>Thêm</button>
        </form>
      </div>
    );
  }
}

export default LvhProductAddOrEdit;
