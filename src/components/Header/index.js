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

<>
<Segment horizontal>

    <Grid columns={2} textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          Logo
        </Grid.Column>

        <Grid.Column>
          <Button circular>Portfolio</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
</Segment>
  
  </>
  );

export default CustomHeader;
