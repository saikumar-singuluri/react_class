import React, {Component} from 'react';
import TableHeader  from './headerComponent';
import TableBody from './bodyComponent';

class Table extends Component {
    render() {
        return (
            <table border='1'>
                <TableHeader  headerValues={this.props.header} />
                <TableBody  bodyValues={this.props.body} click={this.props.onCellClick}/>
            </table>
        );
    }
}

export default Table;

