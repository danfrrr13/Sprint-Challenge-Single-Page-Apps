import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = props => {
  return (
    <Card>
      <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>
          {props.character.species} {props.character.status}
        </Card.Meta>
        <Card.Description>
          Location: {props.character.location.name}
          Origin: {props.character.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        Episodes
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;