import { useRef } from 'react';

function OutsideClickHandler() {
    const wrapperRef = useRef(props);

    return <div ref={this.wrapperRef}>{props.children}</div>;
}

export default OutsideClickHandler;