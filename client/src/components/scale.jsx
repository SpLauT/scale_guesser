import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { newScale } from './../actions/scaleAction';
import Node from './node.jsx';
import './../stylesheets/scale.scss';

const Scale = ({ scale, onMissingScale }) => {
    if(!scale) {
        onMissingScale();
    }
    return (
        <div className="scale">
            {
                (scale) ?
                    scale.map((sca, i) =>
                        <Node key={i} position={i} node={sca}/>
                    ) :
                    <p>No Scale</p>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    scale: state.toGuess && state.toGuess.scale
});

const mapDispatchToProps = dispatch => ({
    onMissingScale(){
        dispatch(newScale())
    } 
});

Scale.contextTypes = {
    store: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(Scale);