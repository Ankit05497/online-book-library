import React from 'react';
import Add  from './add';
import Edit from './edit';
import Delete from './delete';
import SearchAndView from './searchAndView';
import styles from '../../styles/home.module.css';

type NavValue = 'add' | 'edit' | 'delete' | 'none';

interface State {
  activeNavValue: NavValue;
}

class HomePage extends React.Component {

  state: State = {
    activeNavValue: 'none'
  }

  handleAddClick = () => {
    this.setState({
      activeNavValue: 'add'
    })
  }

  handleEditClick = () => {
    this.setState({
      activeNavValue: 'edit'
    })
  }

  handleDeleteClick = () => {
    this.setState({
      activeNavValue: 'delete'
    })
  }

  render() {
    return <div>
      <h1 className={styles.heading}>Online Book Management System</h1>
      <div className={styles.button_container}>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
      {this.state.activeNavValue !== 'none' &&
        <div className={styles.action_container}>
        {this.state.activeNavValue === 'add' && <Add/>}
        {this.state.activeNavValue === 'edit' && <Edit/>}
        {this.state.activeNavValue === 'delete' && <Delete/>}
        </div>
      }
      <SearchAndView />
    </div>
  }
};

export default HomePage;
