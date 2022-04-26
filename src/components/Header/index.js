import React, { useState } from "react";
import { Segment, Grid, Menu, Button } from "semantic-ui-react";
// components needed

const CustomHeader = () => {
  const [aciveItem, setAciveItem] = useState("home");
  return (
    <>
      <Segment vertical>
        <Grid columns={2} textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>logo</Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <Menu secondary>
                <Menu.Item
                  name="Home"
                  // active={this.activeItem}
                  // onClick={this.handleItemClick}
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
