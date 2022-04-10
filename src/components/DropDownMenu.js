import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from '@mui/material/OutlinedInput';

const DropDownMenu = (props) => {
    const label_title = props.label_title;
    const menu_props = props.menu_props;
    const value = props.value;
    const onChange = props.onChange;
    let data = props.data;
    return (
        <>
        <InputLabel id="demo-multiple-name-label" >{label_title}</InputLabel>
       
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          MenuProps={menu_props}
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Name" />}
    
        >
         
          {data.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
        </>
    );
}
export default DropDownMenu;