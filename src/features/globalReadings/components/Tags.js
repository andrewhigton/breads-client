import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tags from '../../tags';

class Tags extends Component {
    
    handleClick = () => {
        alert('Heres a modal')
    }

    render() {
        const { currentUser, reader, tag_names } = this.props;

        return (
            <>
                {currentUser.id === reader && 
                <>
                    <p className='btn text-primary m-2 text-nowrap overflow-auto-horizontal'>
                        <FontAwesomeIcon icon='plus' size='sm' data-toggle='modal' data-target='#exampleModal'/>
                        <small> {tag_names}</small>
                    </p>
                </>
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser.user
    }
}

export default connect(mapStateToProps, { ...tags.actions })(Tags);