import {CircularProgress} from "@mui/material";
import Button from "@mui/material/Button";
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';

export function Loading({ onStop }) {
    return (
        <div>
            <CircularProgress size={30} />
            <Button
                startIcon={<BlockRoundedIcon />}
                onClick={onStop}
                size={'small'}
                style={{
                    backgroundColor: '#ece5dd',
                    border: 'none',
                    color: 'black',
                }}
            >
                取消
            </Button>
        </div>
    );
}

export default Loading;