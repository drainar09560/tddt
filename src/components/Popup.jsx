import React from 'react';

const Popup = ({closePop}) => {
    return (
        <div className="popup" onClick={() => closePop()} style={{
            position: 'absolute',
            transform: 'translateX(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '100'}}
             >
        </div>
    );
};

export default Popup;
