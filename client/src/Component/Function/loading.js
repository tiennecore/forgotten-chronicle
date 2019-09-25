import React from 'react'
import { css } from '@emotion/core';
// First way to import
import { RingLoader} from 'react-spinners';


export default function loading(props){
    const override = css`
        display: block;
        margin: 0 10px;
    `;
    return (
        <div style={{textAlign:'center'}}>
          <RingLoader
            css={override}
            sizeUnit={"px"}
            size={30}
            color={'#521751'}
            loading={props.loading}
          />
        </div> 
      )

}