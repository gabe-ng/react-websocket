import React, { Component } from 'react';
import PropTypes from "prop-types";

class CustomTable extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        rows: PropTypes.number.isRequired,
    }

    static defaultProps = {
        data: [],
        rows: 10,
    }

  render() {
    // Sort the data passed down and then map over the array up
    // until the number of items in the table
    let data = this.props.data.sort((a, b) => b.value - a.value)
        .map((entry, index) => {
            if (index < this.props.rows) {
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{entry.id}</td>
                        <td>{entry.value}</td>
                        <td>{entry.name}</td>
                    </tr>
                )
            }
        });
        
    return (
      <div> 
        <table className="container">
            <tr>
                <th><h1>Entry #</h1></th>
                <th><h1>ID</h1></th>
                <th><h1>Value</h1></th>
                <th><h1>Name</h1></th>
            </tr>
            {data}
        </table>
      </div>
    )
  }
}

export default CustomTable;
