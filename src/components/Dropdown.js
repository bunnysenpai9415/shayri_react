import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/nusrat">Nusrat Fateh Ali</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Rahat Fateh Ali</Dropdown.Item> */}
        <Dropdown.Item href="#/coke-studio">Coke Studio</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Gazal</Dropdown.Item> */}
        <Dropdown.Item href="#/shayari">Shayari</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;