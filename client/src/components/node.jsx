import React from 'react';
import { connect } from 'react-redux';
import './../stylesheets/node.scss';

const Node = ({ position, node, onClick }) =>
    <div className="node">
        {
            (node) ?
                node :
                <span className="unkownKey" onClick={() => onClick(position)}>dingus</span>
        }
    </div>

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onClick(position) {
        alert("You clicked me: " + position);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Node);