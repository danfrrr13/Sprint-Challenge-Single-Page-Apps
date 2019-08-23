import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const EpisodeCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.episode.name}</Card.Header>
        <Card.Meta>
          {props.episode.air_date}
        </Card.Meta>
        <Card.Description>
          {props.episode.episode}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {props.episode.characters.length} characters shown
      </Card.Content>
    </Card>
  );
}

export default EpisodeCard;