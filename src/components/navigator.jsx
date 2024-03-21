import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Input} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [token, setToken] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        localStorage.setItem('token', token);
        handleClose();
    }

    return (
        <div
            className={'absolute right-1 top-1'}
        >
            <Button
                onClick={handleClickOpen}
                startIcon={<MenuRoundedIcon/>}
                variant={'contained'}
                size={'small'}
            >
                菜单
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '50%',
                    },
                }}
            >
                <DialogTitle>设置暗号</DialogTitle>
                <DialogContent>
                    <Input
                        autoFocus
                        required
                        fullWidth={true}
                        autoComplete={'true'}
                        variant="standard"
                        onChange={(e) => {
                            setToken(e.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={handleSave}>保存</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}