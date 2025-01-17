import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.dimension}</Card.Header>
        <Card.Description>
          {props.location.type} {props.location.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {props.location.residents.length} residents
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;