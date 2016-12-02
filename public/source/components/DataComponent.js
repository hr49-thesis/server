import React from 'react';
import DataAlert from './DataAlert';
import Notification from './Notification';

const DataComponent = (props) => {
  const { newData, newDataActions } = props;
  if (newData.checked === false && newData.data) {
    return <Notification click={newDataActions.dataCheck}/>
  } else if (newData.checked === true) {
    return <DataAlert close={newDataActions.dataClose} name={newData.data.name}/>
  } else {
    return <div></div>
  }
}

export default DataComponent;
