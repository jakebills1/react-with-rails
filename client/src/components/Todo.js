import React from "react";
import { Checkbox, Header, Button, Icon } from "semantic-ui-react";

const Todo = ({ id, name, complete, deleteItem, updateItem }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
        defaultChecked={complete} 
        onClick={ () => updateItem(id)}   
      />
      <div>
        <Header as="h2">{name}</Header>
      </div>
    </div>
    <div>
      <Button 
        icon 
        color="red" 
        size="tiny" 
        onClick={() => deleteItem(id)} 
        style={{ marginLeft: "15px", }}>
          <Icon name="trash" />
      </Button>

    </div>

  </div>
)

const styles = {
  flex: {
    display: "flex",
    alignItems: "center"
  }
}
export default Todo;