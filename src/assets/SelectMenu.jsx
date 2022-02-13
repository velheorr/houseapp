import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const SelectMenu = ({value, onChange, render, id, idSelect, label}) => {
    return (
        <FormControl sx={{ width: 250 }} >
            <InputLabel id={id}>Улица</InputLabel>
            <SelectMenu
                labelId={id}
                id={idSelect}
                value={value}
                label={label}
                onChange={onChange}
            >
                {render}
            </SelectMenu>
        </FormControl>
    );
};

export default SelectMenu;