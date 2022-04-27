import React, { useState } from "react";
import { Segment, Grid, Menu, Button, Icon } from "semantic-ui-react";
// components needed

const CustomHeader = () => {
  const [aciveItem, setAciveItem] = useState("home");
  return (
    <>
      <Segment vertical>
        <Grid >
          <Grid.Row columns={2} verticalAlign='middle'>
            <Grid.Column >
              <Icon name='adn' size='huge'/>
              </Grid.Column>

            <Grid.Column>
              <Menu secondary floated='right'>
                <Menu.Item
                  name="Home"
                  // active={this.activeItem}
                  // onClick={this.handleItemClick}
                />
                <Menu.Item
                name='About'
                />
                <Menu.Item
                name='Contact'
                />
              <Button circular>Portfolio</Button>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default CustomHeader;
