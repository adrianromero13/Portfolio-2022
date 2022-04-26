import React from "react";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Search,
  Button,
} from "semantic-ui-react";
// components needed

const CustomHeader = () => (

    <Segment placeholder>
Hello
    {/* <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Find Country
          </Header>

          <Search placeholder='Search countries...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='world' />
            Add New Country
          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid> */}
  </Segment>
  );

export default CustomHeader;
