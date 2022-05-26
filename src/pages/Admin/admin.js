import React from "react";
import { Card } from 'semantic-ui-react'

export default function Admin(){
    const CardExampleFluid = () => (
        <Card.Group>
          <Card fluid color='red' header='Option 1' />
          <Card fluid color='orange' header='Option 2' />
          <Card fluid color='yellow' header='Option 3' />
        </Card.Group>
    )
}